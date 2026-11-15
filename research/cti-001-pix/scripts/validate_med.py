
from pathlib import Path
import json

BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_FILE = (
    BASE_DIR / "data" / "raw" / "med_202509.json"
)


def main():
    print("=" * 55)
    print("LLOHS LABS / CTI-001")
    print("MED / DATA VALIDATION")
    print("=" * 55)

    if not INPUT_FILE.exists():
        print("[ERRO] Arquivo não encontrado.")
        return

    with INPUT_FILE.open("r", encoding="utf-8") as file:
        payload = json.load(file)

    records = payload.get("records", [])

    print(
        "\nMês solicitado:",
        payload.get("reference_month")
    )

    print("Registros encontrados:", len(records))

    print("\n[+] Meses retornados:")

    months = []

    for record in records:
        month = record.get("AnoMes")
        months.append(month)

        print(
            f"  {month} | "
            f"Contestados: "
            f"{record.get('QtdePixcontestados')}"
        )

    print("\n[+] Verificações:")

    if len(months) != len(set(months)):
        print("[AVISO] Existem meses duplicados.")
    else:
        print("[OK] Não há meses duplicados.")

    if 202509 in months:
        print("[OK] Setembro de 2025 está presente.")
    else:
        print("[AVISO] Setembro de 2025 não está na amostra.")

    print("\n[+] Validação das contestações:")

    for record in records:
        month = record.get("AnoMes")

        total = record.get("QtdePixcontestados")
        accepted = record.get("Qtdecontestacoesaceitas")
        rejected = record.get("Qtdecontestacoesrejeitadas")

        if not all(
            isinstance(value, (int, float))
            for value in (total, accepted, rejected)
        ):
            print(f"[AVISO] {month}: valores ausentes.")
            continue

        difference = total - (accepted + rejected)

        if abs(difference) < 0.001:
            print(f"[OK] {month}: totais consistentes.")
        else:
            print(
                f"[AVISO] {month}: diferença de "
                f"{difference:,.2f}"
            )


if __name__ == "__main__":
    main()
