import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#040b12",
          border: "2px solid #38bdf8",
          borderRadius: "50px",
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: "-0.06em",
        }}
      >
        <span style={{ color: "#38bdf8" }}>&lt;</span>
        <span style={{ color: "#f8fafc" }}>P</span>
        <span style={{ color: "#38bdf8" }}>/&gt;</span>
      </div>
    ),
    {
      ...size,
    },
  );
}
