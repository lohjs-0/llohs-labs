
from pathlib import Path
import json

import pandas as pd
import matplotlib.pyplot as plt


# LLOHS LABS / CTI-001
# MED — Non-Recovery Analysis

BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_FILE = (
    BASE_DIR / "data" / "raw" / "med_historical.json"
)

OUTPUT_DIR = BASE_DIR / "reports" / "figures"

FIELDS = {
    "ValorPixnaodevolvidossaldoinsuficiente":
        "Saldo insuficiente",
    "Valornaodevolvidoscontaencerrada":
        "Conta encerrada",
    "ValorPixnaodevolvidosmotivosdiversos":
        "Motivos diversos",
}


def brl(value):
    return (
        f"R$ {value:,.2f}"
        .replace(",", "X")
        .replace(".", ",")
        .replace("X", ".")
    )


def main():
    print("=" * 55)
    print("LLOHS LABS / CTI-001")
    print("MED / NON-RECOVERY ANALYSIS")
    print("=" * 55)

    if not INPUT_FILE.exists():
        print("[ERRO] Arquivo não encontrado.")
        return

    with INPUT_FILE.open("r", encoding="utf-8") as file:
        payload = json.load(file)

    df = pd.DataFrame(payload.get("records", []))

    if df.empty:
        print("[ERRO] Nenhum registro encontrado.")
        return

    required = list(FIELDS) + [
        "ValorPixresidualnaodevolvido"
    ]

    missing = [
        field for field in required
        if field not in df.columns
    ]

    if missing:
        print("[ERRO] Campos ausentes:", missing)
        return

    for field in required:
        df[field] = pd.to_numeric(
            df[field],
            errors="coerce",
        )

    if df[required].isna().any().any():
        print("[ERRO] Valores ausentes ou inválidos.")
        return

    print("\n[+] Valores por motivo:")

    totals = {}

    for field, label in FIELDS.items():
        total = df[field].sum()
        totals[label] = total

        print(f"  {label}: {brl(total)}")

    residual = df[
        "ValorPixresidualnaodevolvido"
    ].sum()

    print(
        "\n[+] Valor residual não devolvido:",
        brl(residual),
    )

    total_reasons = sum(totals.values())

    print(
        "[+] Soma dos motivos identificados:",
        brl(total_reasons),
    )

    print(
        "\n[AVISO] O valor residual não foi somado "
        "aos motivos para evitar possível "
        "dupla contagem."
    )

    OUTPUT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    labels = list(totals.keys())
    values = [
        amount / 1_000_000
        for amount in totals.values()
    ]

    fig, ax = plt.subplots(figsize=(10, 6))

    ax.barh(labels, values)

    ax.set_title(
        "CTI-001 | Valores não devolvidos por motivo"
    )

    ax.set_xlabel("Valor informado (R$ milhões)")

    ax.grid(axis="x", alpha=0.25)

    fig.tight_layout()

    output = (
        OUTPUT_DIR / "med_non_recovery.png"
    )

    fig.savefig(
        output,
        dpi=200,
        bbox_inches="tight",
    )

    plt.close(fig)

    print(f"\n[OK] Gráfico salvo: {output}")


if __name__ == "__main__":
    main()
