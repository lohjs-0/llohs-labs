
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json

import requests


# LLOHS LABS / CTI-001
# MED — Historical Collection

BASE_DIR = Path(__file__).resolve().parents[1]
OUTPUT_DIR = BASE_DIR / "data" / "raw"

API_URL = (
    "https://olinda.bcb.gov.br/olinda/servico/"
    "Pix_DadosAbertos/versao/v1/odata/"
    "EstatisticasFraudesPix(Database=@Database)"
)

DATABASE = "202509"
MAX_RECORDS = 100


def main():
    print("=" * 55)
    print("LLOHS LABS / CTI-001")
    print("MED / HISTORICAL COLLECTION")
    print("=" * 55)

    params = {
        "@Database": f"'{DATABASE}'",
        "$top": MAX_RECORDS,
        "$format": "json",
    }

    print("\n[+] Consultando Banco Central...")
    print(f"[+] Limite solicitado: {MAX_RECORDS} registros")

    try:
        response = requests.get(
            API_URL,
            params=params,
            timeout=60,
            headers={
                "Accept": "application/json",
                "User-Agent": "LLOHS-CTI-001-Research/0.1",
            },
        )

        print(f"\n[HTTP] {response.status_code}")

        if not response.ok:
            print("\n[ERRO] Resposta do servidor:")
            print(response.text[:1500])
            return

        payload = response.json()
        records = payload.get("value", [])

        if not isinstance(records, list):
            raise ValueError(
                "Formato inesperado da resposta."
            )

        records.sort(
            key=lambda item: item["AnoMes"]
        )

        months = [item["AnoMes"] for item in records]

        print(f"[OK] Registros: {len(records)}")

        if months:
            print(f"[OK] Primeiro mês: {months[0]}")
            print(f"[OK] Último mês: {months[-1]}")

        if len(months) != len(set(months)):
            print("[AVISO] Existem meses duplicados.")

        if len(records) == MAX_RECORDS:
            print(
                "[AVISO] O limite solicitado foi atingido. "
                "A série pode estar incompleta."
            )

        output = {
            "project": "CTI-001",
            "source": "Banco Central do Brasil",
            "dataset": "EstatisticasFraudesPix",
            "database_parameter": DATABASE,
            "collected_at_utc": datetime.now(
                timezone.utc
            ).isoformat(),
            "request_url": response.url,
            "records": records,
        }

        OUTPUT_DIR.mkdir(
            parents=True,
            exist_ok=True,
        )

        output_path = (
            OUTPUT_DIR / "med_historical.json"
        )

        raw_bytes = json.dumps(
            output,
            ensure_ascii=False,
            indent=2,
        ).encode("utf-8")

        output_path.write_bytes(raw_bytes)

        checksum = hashlib.sha256(
            raw_bytes
        ).hexdigest()

        print(f"\n[OK] Arquivo salvo: {output_path}")
        print(f"[SHA256] {checksum}")

    except requests.RequestException as error:
        print(f"\n[ERRO DE REDE] {error}")

    except (ValueError, KeyError) as error:
        print(f"\n[ERRO DE DADOS] {error}")


if __name__ == "__main__":
    main()
