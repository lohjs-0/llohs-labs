
from pathlib import Path
import json
import requests
import xml.etree.ElementTree as ET


# LLOHS LABS / CTI-001
# MED — Function Parameter Discovery

BASE_DIR = Path(__file__).resolve().parents[1]
EVIDENCE_DIR = BASE_DIR / "evidence"

SERVICE_BASE = (
    "https://olinda.bcb.gov.br/olinda/servico/"
    "Pix_DadosAbertos/versao/v1"
)

ODATA_URL = f"{SERVICE_BASE}/odata"
METADATA_URL = f"{ODATA_URL}/$metadata"

TARGET = "EstatisticasFraudesPix"

EVIDENCE_DIR.mkdir(parents=True, exist_ok=True)


def get_metadata():
    print("\n[1] Consultando metadados XML...")

    response = requests.get(
        METADATA_URL,
        timeout=30,
    )
    response.raise_for_status()

    output = EVIDENCE_DIR / "pix_odata_metadata.xml"
    output.write_bytes(response.content)

    print(f"[OK] Metadados salvos: {output}")

    root = ET.fromstring(response.content)

    print("\n[+] Definições relacionadas ao MED:")

    for element in root.iter():
        name = element.attrib.get("Name", "")

        if TARGET not in name:
            continue

        print("\nElemento:", element.tag.split("}")[-1])
        print("Atributos:", element.attrib)

        for child in element:
            print(
                "  ",
                child.tag.split("}")[-1],
                child.attrib,
            )


def inspect_service():
    print("\n[2] Consultando catálogo do serviço...")

    response = requests.get(
        ODATA_URL,
        params={"$format": "json"},
        timeout=30,
    )
    response.raise_for_status()

    catalog = response.json()

    matches = [
        item
        for item in catalog.get("value", [])
        if TARGET.lower() in (
            item.get("name", "").lower()
        )
    ]

    print(
        json.dumps(
            matches,
            indent=2,
            ensure_ascii=False,
        )
    )


def inspect_swagger():
    print("\n[3] Consultando documentação OpenAPI...")

    candidates = [
        f"{SERVICE_BASE}/swagger.json",
        f"{SERVICE_BASE}/swagger/v1/swagger.json",
    ]

    for url in candidates:
        try:
            response = requests.get(
                url,
                timeout=20,
            )

            print(
                f"HTTP {response.status_code}: {url}"
            )

            if not response.ok:
                continue

            document = response.json()

            paths = document.get("paths", {})

            matches = {
                path: details
                for path, details in paths.items()
                if TARGET.lower() in path.lower()
            }

            if matches:
                print("\n[+] Definição encontrada:")

                print(
                    json.dumps(
                        matches,
                        indent=2,
                        ensure_ascii=False,
                    )[:6000]
                )

                return

        except (requests.RequestException, ValueError):
            continue

    print(
        "\n[AVISO] Não foi possível obter a "
        "definição Swagger automaticamente."
    )


def main():
    print("=" * 55)
    print("LLOHS LABS / CTI-001")
    print("MED / PARAMETER DISCOVERY")
    print("=" * 55)

    try:
        get_metadata()
        inspect_service()
        inspect_swagger()

    except (
        requests.RequestException,
        ET.ParseError,
        ValueError,
    ) as error:
        print(f"\n[ERRO] {error}")


if __name__ == "__main__":
    main()
