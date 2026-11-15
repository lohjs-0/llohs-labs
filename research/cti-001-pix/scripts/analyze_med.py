
from pathlib import Path
import json

import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib.ticker import FuncFormatter


# =========================================
# LLOHS LABS / CTI-001
# MED — Historical Data Analysis
# Monochrome Editorial Edition
# =========================================

BASE_DIR = Path(__file__).resolve().parents[1]

INPUT_FILE = BASE_DIR / "data" / "raw" / "med_historical.json"

OUTPUT_DIR = BASE_DIR / "reports" / "figures"


# =========================================
# VISUAL IDENTITY
# =========================================

BG = "#09090B"
PANEL = "#111113"
TEXT = "#E4E4E7"
MUTED = "#A1A1AA"
GRID = "#29292E"
LINE = "#C4C4CC"
MARKER = "#F4F4F5"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 11,
    "figure.facecolor": BG,
    "axes.facecolor": BG,
    "axes.edgecolor": GRID,
    "axes.labelcolor": MUTED,
    "text.color": TEXT,
    "xtick.color": MUTED,
    "ytick.color": MUTED,
    "grid.color": GRID,
    "savefig.facecolor": BG,
})


def main():
    print("=" * 55)
    print("LLOHS LABS / CTI-001")
    print("MED / HISTORICAL ANALYSIS")
    print("=" * 55)

    if not INPUT_FILE.exists():
        print("[ERRO] Arquivo histórico não encontrado.")
        return

    with INPUT_FILE.open("r", encoding="utf-8") as file:
        payload = json.load(file)

    records = payload.get("records", [])

    if not records:
        print("[ERRO] Nenhum registro disponível.")
        return

    df = pd.DataFrame(records)

    df["Data"] = pd.to_datetime(
        df["AnoMes"].astype(str),
        format="%Y%m",
        errors="coerce",
    )

    if df["Data"].isna().any():
        print("[ERRO] Existem meses inválidos.")
        return

    df = df.sort_values("Data").reset_index(drop=True)

    if df["Data"].duplicated().any():
        print("[ERRO] Existem meses duplicados.")
        return

    expected_months = pd.date_range(
        start=df["Data"].min(),
        end=df["Data"].max(),
        freq="MS",
    )

    missing_months = expected_months.difference(
        pd.DatetimeIndex(df["Data"])
    )

    print(f"\n[+] Registros: {len(df)}")
    print(
        "[+] Primeiro mês:",
        df["Data"].min().strftime("%m/%Y"),
    )
    print(
        "[+] Último mês:",
        df["Data"].max().strftime("%m/%Y"),
    )

    if missing_months.empty:
        print("[OK] Não há meses ausentes no intervalo.")
    else:
        print("[AVISO] Meses ausentes:")
        for month in missing_months:
            print(" -", month.strftime("%m/%Y"))

    columns = [
        "QtdePixcontestados",
        "Qtdecontestacoesaceitas",
        "Qtdecontestacoesrejeitadas",
    ]

    for column in columns:
        df[column] = pd.to_numeric(
            df[column],
            errors="coerce",
        )

    if df[columns].isna().any().any():
        print("[ERRO] Existem valores numéricos inválidos.")
        return

    df["Diferenca"] = (
        df["QtdePixcontestados"]
        - df["Qtdecontestacoesaceitas"]
        - df["Qtdecontestacoesrejeitadas"]
    )

    print("\n[+] Validação dos totais:")

    inconsistent = df[
        df["Diferenca"].abs() > 0.001
    ]

    if not inconsistent.empty:
        print("[AVISO] Totais inconsistentes encontrados:")

        for _, row in inconsistent.iterrows():
            month = row["Data"].strftime("%m/%Y")

            print(f"\n  Mês: {month}")
            print(
                "  Pix contestados:",
                int(row["QtdePixcontestados"])
            )
            print(
                "  Aceitas:",
                int(row["Qtdecontestacoesaceitas"])
            )
            print(
                "  Rejeitadas:",
                int(row["Qtdecontestacoesrejeitadas"])
            )
            print(
                "  Diferença:",
                int(row["Diferenca"])
            )
    else:
        print("[OK] Todos os totais mensais são consistentes.")

    OUTPUT_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    # =========================================
    # MONOCHROME CHART
    # =========================================

    fig, ax = plt.subplots(figsize=(13, 6.5))

    fig.subplots_adjust(
        left=0.10,
        right=0.96,
        top=0.76,
        bottom=0.20,
    )

    fig.text(
        0.10,
        0.94,
        "LLOHS LABS  /  CTI-001",
        fontsize=10,
        fontweight="bold",
        color=MUTED,
        family="monospace",
    )

    fig.text(
        0.10,
        0.865,
        "PIX CONTESTATIONS",
        fontsize=21,
        fontweight="bold",
        color=TEXT,
    )

    fig.text(
        0.10,
        0.815,
        "Monthly volume of contested Pix transactions",
        fontsize=11,
        color=MUTED,
    )

    ax.plot(
        df["Data"],
        df["QtdePixcontestados"],
        color=LINE,
        linewidth=2.3,
        marker="o",
        markersize=6,
        markerfacecolor=MARKER,
        markeredgecolor=BG,
        markeredgewidth=1.5,
        zorder=3,
    )

    ax.fill_between(
        df["Data"],
        df["QtdePixcontestados"],
        0,
        color=LINE,
        alpha=0.055,
    )

    ax.set_xlabel(
        "OBSERVATION MONTH",
        fontsize=9,
        labelpad=16,
        color=MUTED,
        fontweight="bold",
    )

    ax.set_ylabel(
        "CONTESTED TRANSACTIONS",
        fontsize=9,
        labelpad=14,
        color=MUTED,
        fontweight="bold",
    )

    ax.xaxis.set_major_locator(
        mdates.MonthLocator(interval=2)
    )

    ax.xaxis.set_major_formatter(
        mdates.DateFormatter("%b %Y")
    )

    ax.yaxis.set_major_formatter(
        FuncFormatter(lambda value, _: f"{value:,.0f}")
    )

    ax.set_ylim(bottom=0)

    ax.grid(
        axis="y",
        linestyle="--",
        linewidth=0.7,
        alpha=0.75,
    )

    ax.grid(axis="x", visible=False)

    ax.set_axisbelow(True)

    for spine in ["top", "right", "left"]:
        ax.spines[spine].set_visible(False)

    ax.spines["bottom"].set_color(GRID)

    ax.tick_params(
        axis="both",
        length=0,
        pad=10,
        labelsize=9,
    )

    fig.text(
        0.10,
        0.055,
        "SOURCE: BANCO CENTRAL DO BRASIL  /  MED OPEN DATA",
        fontsize=8,
        color=MUTED,
        family="monospace",
    )

    fig.text(
        0.96,
        0.055,
        "FIG. 01",
        fontsize=9,
        color=TEXT,
        ha="right",
        family="monospace",
    )

    output_file = (
        OUTPUT_DIR / "med_contestacoes_mensais.png"
    )

    fig.savefig(
        output_file,
        dpi=250,
        bbox_inches="tight",
        facecolor=BG,
    )

    plt.close(fig)

    print(f"\n[OK] Gráfico salvo: {output_file}")

    print("\n[+] Resumo mensal:")

    for _, row in df.iterrows():
        month = row["Data"].strftime("%m/%Y")
        total = int(row["QtdePixcontestados"])

        print(f"  {month}: {total:,}")


if __name__ == "__main__":
    main()
