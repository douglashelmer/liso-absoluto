import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Liso Absoluto — Domine a Arte do Alisamento Profissional";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0b09",
          color: "#f7f1e8",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,168,104,0.12) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            fontSize: 18,
            color: "#D4A868",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            marginBottom: 28,
            fontFamily: "Arial, sans-serif",
          }}
        >
          LISO ABSOLUTO · CURSO ONLINE
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.1,
            textAlign: "center",
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          Alisamento que dura.{" "}
          <span style={{ color: "#D4A868" }}>Começa no diagnóstico.</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 26,
            color: "#b5a98e",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Do diagnóstico preciso à hidratação final — o protocolo completo para profissionais de salão
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#7a6e5a",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>✓ 5 módulos + bônus</span>
          <span>✓ Acesso vitalício</span>
          <span>✓ Garantia 7 dias</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
