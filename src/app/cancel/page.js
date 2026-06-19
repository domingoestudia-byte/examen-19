import Link from "next/link";

export default function CancelPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fef2f2",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <main
        style={{
          maxWidth: "480px",
          width: "100%",
          padding: "48px 32px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          margin: "24px",
          textAlign: "center",
        }}
      >
        {/* Cancel Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#fee2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "12px",
          }}
        >
          Pago cancelado
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "32px",
          }}
        >
          El pago no se ha completado. No se ha cobrado ningún importe. Si tienes alguna duda, inténtalo de nuevo.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#dc2626",
            border: "none",
            borderRadius: "12px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Volver al producto
        </Link>
      </main>
    </div>
  );
}