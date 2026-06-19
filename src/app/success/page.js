import Link from "next/link";

export default function SuccessPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0fdf4",
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
        {/* Success Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#dcfce7",
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
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
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
          ¡Pago exitoso!
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#555",
            marginBottom: "32px",
          }}
        >
          Gracias por tu compra. Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación en los próximos minutos.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#16a34a",
            border: "none",
            borderRadius: "12px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Volver a la tienda
        </Link>
      </main>
    </div>
  );
}