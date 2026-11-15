
import { useEffect, useState, type ChangeEvent } from "react";
import "../styles/SteganographyLab.css";

type Mode = "embed" | "extract";

const MAGIC = new TextEncoder().encode("LLSB");
const HEADER_SIZE = 8;

async function readImage(file: File) {
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
      throw new Error("Canvas indisponível.");
    }

    ctx.drawImage(image, 0, 0);

    return { canvas, ctx };
  } finally {
    URL.revokeObjectURL(url);
  }
}

function createPayload(message: string) {
  const text = new TextEncoder().encode(message);

  if (text.length > 0xffffffff) {
    throw new Error("Mensagem muito grande.");
  }

  const payload = new Uint8Array(HEADER_SIZE + text.length);
  payload.set(MAGIC);

  new DataView(payload.buffer).setUint32(4, text.length, false);
  payload.set(text, HEADER_SIZE);

  return payload;
}

function embedBits(data: ImageData, message: string) {
  const payload = createPayload(message);
  const pixels = data.data;
  const capacity = (pixels.length / 4) * 3;
  const required = payload.length * 8;

  if (required > capacity) {
    throw new Error("A imagem não possui capacidade suficiente.");
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

function extractBits(data: ImageData) {
  const pixels = data.data;
  const capacity = (pixels.length / 4) * 3;

  if (capacity < HEADER_SIZE * 8) {
    throw new Error("Imagem pequena demais.");
  }

  let position = 0;

  function readByte() {
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
      throw new Error("Nenhuma mensagem LSB-01 encontrada.");
    }
  }

  const length = new DataView(header.buffer).getUint32(4, false);

  if ((HEADER_SIZE + length) * 8 > capacity) {
    throw new Error("Dados inválidos ou corrompidos.");
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
  const [preview, setPreview] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0] ?? null;

    setFile(selected);
    setResult("");
    setError("");
    setCopied(false);
  }

  function changeMode(next: Mode) {
    setMode(next);
    setResult("");
    setError("");
    setCopied(false);
  }

  async function processImage() {
    if (!file) {
      setError("Selecione uma imagem PNG.");
      return;
    }

    if (file.type !== "image/png") {
      setError("Apenas imagens PNG são aceitas.");
      return;
    }

    if (mode === "embed" && !message.length) {
      setError("Digite uma mensagem para ocultar.");
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

        setResult("Mensagem incorporada com sucesso. O PNG foi gerado.");
      } else {
        setResult(extractBits(data));
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

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
    } catch {
      setError("Não foi possível copiar a mensagem.");
    }
  }

  const messageBytes = new TextEncoder().encode(message).length;
  const capacity = file ? "Imagem carregada" : "Aguardando imagem";

  return (
    <div className="steg-page">
      <div className="steg-container">
        <div className="steg-breadcrumb">
          <span>LLOHS LABS</span>
          <span>/</span>
          <span>CYBERSECURITY</span>
          <span>/</span>
          <strong>LSB-01</strong>
        </div>

        <header className="steg-header">
          <div className="steg-label">
            <span className="steg-dot" />
            INTERACTIVE EXPERIMENT / 001
          </div>

          <h1>
            Steganography<span className="steg-accent">.</span>
          </h1>

          <p>
            Explore a ocultação de informações em imagens digitais
            utilizando a técnica Least Significant Bit (LSB).
            Incorpore uma mensagem em um arquivo PNG e tente
            recuperá-la.
          </p>
        </header>

        <div className="steg-layout">
          <section className="steg-panel">
            <div className="steg-panel-heading">
              <div>
                <span className="steg-eyebrow">WORKSPACE</span>
                <h2>LSB encoder / decoder</h2>
              </div>

              <span className="steg-version">v1.0</span>
            </div>

            <div className="steg-mode">
              <button
                type="button"
                className={mode === "embed" ? "active" : ""}
                onClick={() => changeMode("embed")}
              >
                <span>01</span> Encode
              </button>

              <button
                type="button"
                className={mode === "extract" ? "active" : ""}
                onClick={() => changeMode("extract")}
              >
                <span>02</span> Decode
              </button>
            </div>

            <div className="steg-field">
              <div className="steg-field-heading">
                <label htmlFor="steg-file">INPUT IMAGE</label>
                <span>PNG ONLY</span>
              </div>

              <label className="steg-upload" htmlFor="steg-file">
                {preview ? (
                  <div className="steg-preview">
                    <img src={preview} alt="Imagem selecionada" />
                    <div>
                      <strong>{file?.name}</strong>
                      <span>Clique para substituir a imagem</span>
                    </div>
                  </div>
                ) : (
                  <div className="steg-upload-empty">
                    <span className="steg-upload-icon">+</span>
                    <strong>Selecionar imagem</strong>
                    <span>Escolha um arquivo PNG para começar</span>
                  </div>
                )}
              </label>

              <input
                id="steg-file"
                className="steg-file-input"
                type="file"
                accept="image/png"
                onChange={handleFile}
              />
            </div>

            {mode === "embed" && (
              <div className="steg-field">
                <div className="steg-field-heading">
                  <label htmlFor="steg-message">
                    SECRET MESSAGE
                  </label>
                  <span>{messageBytes} BYTES</span>
                </div>

                <textarea
                  id="steg-message"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  placeholder="Digite a mensagem que será escondida nos pixels..."
                  rows={5}
                />
              </div>
            )}

            {error && (
              <div className="steg-alert steg-error" role="alert">
                {error}
              </div>
            )}

            {result && (
              <div className="steg-result">
                <div className="steg-result-heading">
                  <span>
                    {mode === "embed"
                      ? "ENCODING COMPLETE"
                      : "EXTRACTED MESSAGE"}
                  </span>

                  {mode === "extract" && (
                    <button type="button" onClick={copyResult}>
                      {copied ? "COPIADO" : "COPIAR"}
                    </button>
                  )}
                </div>

                <pre>{result}</pre>
              </div>
            )}

            <button
              type="button"
              className="steg-execute"
              onClick={processImage}
              disabled={loading}
            >
              <span>
                {loading
                  ? "PROCESSING..."
                  : mode === "embed"
                    ? "ENCODE & DOWNLOAD"
                    : "EXTRACT MESSAGE"}
              </span>
              <span aria-hidden="true">↗</span>
            </button>
          </section>

          <aside className="steg-sidebar">
            <div className="steg-info-card">
              <span className="steg-eyebrow">ABOUT THIS LAB</span>
              <h3>Least Significant Bit</h3>
              <p>
                Cada canal RGB possui um bit menos significativo.
                Alterar esse bit modifica o valor da cor em no
                máximo uma unidade.
              </p>

              <div className="steg-binary">
                <div>
                  <span>ORIGINAL</span>
                  <code>1001011<span>0</span></code>
                </div>

                <div>
                  <span>MODIFIED</span>
                  <code>1001011<strong>1</strong></code>
                </div>
              </div>
            </div>

            <div className="steg-info-card">
              <span className="steg-eyebrow">SYSTEM STATUS</span>

              <div className="steg-status-row">
                <span>Processing</span>
                <strong>CLIENT-SIDE</strong>
              </div>

              <div className="steg-status-row">
                <span>File format</span>
                <strong>PNG</strong>
              </div>

              <div className="steg-status-row">
                <span>Encryption</span>
                <strong>NONE</strong>
              </div>

              <div className="steg-status-row">
                <span>Input</span>
                <strong>{capacity}</strong>
              </div>
            </div>

            <div className="steg-note">
              <span>NOTE / 001</span>
              <p>
                Este laboratório é educacional. A técnica LSB
                simples não oferece criptografia nem resistência
                garantida à esteganálise.
              </p>
            </div>
          </aside>
        </div>

        <footer className="steg-footer">
          <span>LLOHS LABS — DIGITAL FORENSICS & SECURITY</span>
          <span>EXPERIMENT 001 / STEGANOGRAPHY</span>
        </footer>
      </div>
    </div>
  );
}
