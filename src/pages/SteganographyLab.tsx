
import { useState, type ChangeEvent } from "react";

type Mode = "embed" | "extract";

const MAGIC = new TextEncoder().encode("LLSB");
const HEADER_SIZE = 8;

async function readImage(file: File): Promise<{
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}> {
  const url = URL.createObjectURL(file);

  try {
    const image = new Image();
    image.src = url;
    await image.decode();

    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) {
      throw new Error("Não foi possível acessar o Canvas.");
    }

    ctx.drawImage(image, 0, 0);
    return { canvas, ctx };
  } finally {
    URL.revokeObjectURL(url);
  }
}

function createPayload(message: string): Uint8Array {
  const text = new TextEncoder().encode(message);

  if (text.length > 0xffffffff) {
    throw new Error("Mensagem muito grande.");
  }

  const payload = new Uint8Array(HEADER_SIZE + text.length);
  payload.set(MAGIC, 0);

  const view = new DataView(payload.buffer);
  view.setUint32(4, text.length, false);

  payload.set(text, HEADER_SIZE);
  return payload;
}

function embedBits(
  imageData: ImageData,
  message: string
): void {
  const payload = createPayload(message);
  const pixels = imageData.data;
  const capacity = (pixels.length / 4) * 3;
  const required = payload.length * 8;

  if (required > capacity) {
    throw new Error(
      "A imagem é pequena demais para essa mensagem."
    );
  }

  let bitIndex = 0;

  for (let i = 0; i < pixels.length && bitIndex < required; i++) {
    if (i % 4 === 3) continue;

    const byteIndex = Math.floor(bitIndex / 8);
    const shift = 7 - (bitIndex % 8);
    const bit = (payload[byteIndex] >> shift) & 1;

    pixels[i] = (pixels[i] & 0xfe) | bit;
    bitIndex++;
  }
}

function extractBits(imageData: ImageData): string {
  const pixels = imageData.data;
  const capacity = (pixels.length / 4) * 3;

  if (capacity < HEADER_SIZE * 8) {
    throw new Error("Imagem pequena demais.");
  }

  let position = 0;

  function readByte(): number {
    let value = 0;

    for (let bit = 0; bit < 8; bit++) {
      while (position % 4 === 3) position++;

      if (position >= pixels.length) {
        throw new Error("Dados insuficientes.");
      }

      value = (value << 1) | (pixels[position] & 1);
      position++;
    }

    return value;
  }

  const header = new Uint8Array(HEADER_SIZE);

  for (let i = 0; i < HEADER_SIZE; i++) {
    header[i] = readByte();
  }

  for (let i = 0; i < MAGIC.length; i++) {
    if (header[i] !== MAGIC[i]) {
      throw new Error(
        "Nenhuma mensagem LSB-01 foi encontrada."
      );
    }
  }

  const view = new DataView(header.buffer);
  const length = view.getUint32(4, false);

  if ((HEADER_SIZE + length) * 8 > capacity) {
    throw new Error("O tamanho da mensagem é inválido.");
  }

  const message = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    message[i] = readByte();
  }

  return new TextDecoder("utf-8", {
    fatal: true,
  }).decode(message);
}

export default function SteganographyLab() {
  const [mode, setMode] = useState<Mode>("embed");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null;

    setFile(selected);
    setResult("");
    setError("");
  }

  async function processImage() {
    if (!file) {
      setError("Selecione uma imagem PNG.");
      return;
    }

    if (file.type !== "image/png") {
      setError("Este laboratório aceita apenas PNG.");
      return;
    }

    if (mode === "embed" && !message.length) {
      setError("Digite uma mensagem.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const { canvas, ctx } = await readImage(file);

      const data = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      if (mode === "embed") {
        embedBits(data, message);
        ctx.putImageData(data, 0, 0);

        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (value) => {
              if (value) resolve(value);
              else reject(new Error("Falha ao gerar PNG."));
            },
            "image/png"
          );
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "llohs-lsb-01.png";
        link.click();

        setTimeout(() => URL.revokeObjectURL(url), 1000);
        setResult("Mensagem incorporada! PNG gerado.");
      } else {
        const extracted = extractBits(data);
        setResult(extracted);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocorreu um erro inesperado."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "48px 20px",
      }}
    >
      <p style={{ opacity: 0.65 }}>
        LLOHS LABS / CYBERSECURITY / LSB-01
      </p>

      <h1>Steganography Lab</h1>

      <p>
        Esconda ou recupere mensagens em imagens PNG
        utilizando o bit menos significativo (LSB).
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button onClick={() => {
          setMode("embed");
          setResult("");
          setError("");
        }}>
          Esconder mensagem
        </button>

        <button onClick={() => {
          setMode("extract");
          setResult("");
          setError("");
        }}>
          Extrair mensagem
        </button>
      </div>

      <div style={{ marginTop: 28 }}>
        <label htmlFor="lsb-image">Imagem PNG</label>
        <input
          id="lsb-image"
          type="file"
          accept="image/png"
          onChange={handleFile}
          style={{ display: "block", marginTop: 8 }}
        />
      </div>

      {mode === "embed" && (
        <div style={{ marginTop: 24 }}>
          <label htmlFor="lsb-message">
            Mensagem a esconder
          </label>

          <textarea
            id="lsb-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            style={{
              display: "block",
              width: "100%",
              marginTop: 8,
              padding: 12,
              boxSizing: "border-box",
            }}
          />
        </div>
      )}

      <button
        onClick={processImage}
        disabled={loading}
        style={{ marginTop: 24, padding: "12px 20px" }}
      >
        {loading
          ? "Processando..."
          : mode === "embed"
            ? "Esconder e salvar PNG"
            : "Extrair mensagem"}
      </button>

      {error && (
        <p role="alert" style={{ color: "#dc3545" }}>
          {error}
        </p>
      )}

      {result && (
        <section style={{ marginTop: 28 }}>
          <h2>Resultado</h2>
          <pre style={{
            whiteSpace: "pre-wrap",
            overflowWrap: "anywhere",
          }}>
            {result}
          </pre>
        </section>
      )}

      <p style={{ marginTop: 36, opacity: 0.7 }}>
        Processamento local no navegador.
        Nenhuma imagem é enviada a um servidor.
        Este experimento não utiliza criptografia.
      </p>
    </main>
  );
}
