
from datetime import datetime, timezone
from pathlib import Path
import json

import requests


# CTI-001 / LLOHS LABS
# Public source discovery — Banco Central do Brasil

BASE_DIR = Path(__file__).resolve().parents[1]
EVIDENCE_DIR = BASE_DIR / "evidence"

API_URL = "https://dadosabertos.bcb.gov.br/api/3/action/package_show"
DATASET_ID = "pix"


def collect_bcb_sources():
    EVIDENCE_DIR.mkdir(parents=True, exist_ok=True)

    print("=" * 55)
    print("LLOHS LABS / CTI-001")
    print("THE BRAZILIAN PIX FRAUD SUPPLY CHAIN")
    print("=" * 55)

    print("\n[+] Consultando catálogo público do Banco Central...")

    try:
        response = requests.get(
            API_URL,
            params={"id": DATASET_ID},
            timeout=30,
            headers={
                "User-Agent": "LLOHS-CTI-001-Research/0.1"
            },
        )

        response.raise_for_status()
        payload = response.json()

        if not payload.get("success"):
            raise ValueError(
                "O catálogo não confirmou o sucesso da consulta."
            )

        dataset = payload.get("result", {})
        resources = dataset.get("resources", [])

        collected_at = datetime.now(
            timezone.utc
        ).isoformat()

        report = {
            "project": "CTI-001",
            "source": "Banco Central do Brasil",
            "dataset_id": DATASET_ID,
            "dataset_title": dataset.get("title"),
            "collected_at_utc": collected_at,
            "dataset_url": (
                "https://dadosabertos.bcb.gov.br/dataset/pix"
            ),
            "resources": [
                {
                    "id": item.get("id"),
                    "name": item.get("name"),
                    "description": item.get("description"),
                    "format": item.get("format"),
                    "url": item.get("url"),
                    "last_modified": item.get("last_modified"),
                }
                for item in resources
            ],
        }

        output_path = EVIDENCE_DIR / "bcb_sources.json"

        with output_path.open(
            "w", encoding="utf-8"
        ) as file:
            json.dump(
                report,
                file,
                ensure_ascii=False,
                indent=2,
            )

        print(f"\n[OK] Dataset: {report['dataset_title']}")
        print(f"[OK] Recursos encontrados: {len(resources)}")

        for index, resource in enumerate(resources, start=1):
            print(
                f"  [{index:02}] "
                f"{resource.get('name') or 'Sem nome'}"
                f" | {resource.get('format') or 'Formato desconhecido'}"
            )

        print(f"\n[OK] Evidência salva em: {output_path}")

    except requests.RequestException as error:
        print(f"\n[ERRO] Falha na consulta HTTP: {error}")

    except (ValueError, KeyError) as error:
        print(f"\n[ERRO] Resposta inválida: {error}")


if __name__ == "__main__":
    collect_bcb_sources()
