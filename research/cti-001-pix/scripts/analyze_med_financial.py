
from pathlib import Path
import json

import pandas as pd
import matplotlib.pyplot as plt


# LLOHS LABS / CTI-001
# MED — Financial Analysis

BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_FILE = (
    BASE_DIR / "data" / "raw" / "med_historical.json"
)

OUTPUT_DIR = BASE_DIR / "reports" / "figures"


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
    print("MED / FINANCIAL ANALYSIS")
    print("=" * 55)

    with INPUT_FILE.open("r", encoding="utf-8") as file:
        payload = json.load(file)

    df = pd.DataFrame(payload["records"])

    df["Data"] = pd.to_datetime(
        df["AnoMes"].astype(str),
        format="%Y%m",
    )

    df = df.sort_values("Data")

    fields = {
        "ValorPixcontestadosaceitos": "Valor contestado aceito",
        "ValorPixdevolvidosintegralmente": "Devolução integral",
        "ValorPixdevolvidosparcialmente": "Devolução parcial",
        "ValorPixresidualnaodevolvido": "Valor residual não devolvido",
        "ValorPixnaodevolvidossaldoinsuficiente": "Saldo insuficiente",
        "Valornaodevolvidoscontaencerrada": "Conta encerrada",
        "ValorPixnaodevolvidosmotivosdiversos": "Outros motivos",
        "PercentualdeDevolucao": "Percentual de devolução",
    }

    for field in fields:
        df[field] = pd.to_numeric(
            df[field],
            errors="coerce",
        )

    if df[list(fields)].isna().any().any():
        print("[ERRO] Há valores financeiros ausentes.")
        return

    df["ValorDevolvido"] = (
        df["ValorPixdevolvidosintegralmente"]
        + df["ValorPixdevolvidosparcialmente"]
    )

    print("\n[+] Resumo financeiro por mês:")

    for _, row in df.iterrows():
        month = row["Data"].strftime("%m/%Y")

        print(f"\n  {month}")
        print(
            "  Contestações aceitas:",
            brl(row["ValorPixcontestadosaceitos"]),
        )
        print(
            "  Devolvido integral + parcial:",
            brl(row["ValorDevolvido"]),
        )
        print(
            "  Percentual informado pelo BC:",
            f"{row['PercentualdeDevolucao']:.2f}%",
        )

    print("\n[+] Totais do período:")

    contested = df["ValorPixcontestadosaceitos"].sum()
    returned = df["ValorDevolvido"].sum()

    print("Valor de contestações aceitas:", brl(contested))
    print("Valor devolvido integral + parcial:", brl(returned))

    if contested > 0:
        ratio = returned / contested * 100
        print(
            "Razão calculada entre os valores:",
            f"{ratio:.2f}%",
        )

    OUTPUT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    fig, ax = plt.subplots(figsize=(12, 6))

    ax.plot(
        df["Data"],
        df["ValorPixcontestadosaceitos"] / 1_000_000,
        marker="o",
        label="Contestações aceitas",
    )

    ax.plot(
        df["Data"],
        df["ValorDevolvido"] / 1_000_000,
        marker="o",
        label="Devoluções integrais + parciais",
    )

    ax.set_title(
        "CTI-001 | Valores associados ao MED"
    )

    ax.set_xlabel("Mês")
    ax.set_ylabel("Valor (R$ milhões)")

    ax.grid(alpha=0.25)
    ax.legend()

    fig.autofmt_xdate()
    fig.tight_layout()

    output = (
        OUTPUT_DIR / "med_financial_analysis.png"
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
