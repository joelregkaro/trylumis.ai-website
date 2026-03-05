import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Lumis — Personal Growth AI";
  const description =
    searchParams.get("description") || "Feel understood. Grow for real.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0C1120",
          padding: "80px",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.2), transparent)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #7C3AED, #A78BFA)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#EAEDF3",
            }}
          >
            Lumis
          </span>
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#EAEDF3",
            lineHeight: 1.2,
            marginBottom: "16px",
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#8B92A8",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
