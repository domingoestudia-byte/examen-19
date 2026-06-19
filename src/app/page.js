"use client";

import { useState } from "react";

const product = {
  name: "Guía de Productividad Digital",
  description:
    "Una guía completa en PDF con más de 100 páginas para optimizar tu flujo de trabajo, gestionar tu tiempo y aumentar tu productividad. Incluye plantillas descargables, ejercicios prácticos y accesos a recursos exclusivos.",
  price: 29.99,
  currency: "EUR",
  image: "/next.svg",
};

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/pagos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error al crear la sesión de pago. Inténtalo de nuevo.");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <main
        style={{
          maxWidth: "480px",
          width: "100%",
          padding: "32px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          margin: "24px",
        }}
      >
        {/* Product Image */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#f0f0f0",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="8" y1="7" x2="16" y2="7" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>

        {/* Product Info */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#111",
            marginBottom: "8px",
            margin: 0,
          }}
        >
          {product.name}
        </h1>

        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#555",
            marginTop: "12px",
            marginBottom: "24px",
          }}
        >
          {product.description}
        </p>

        {/* Price */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#111",
            marginBottom: "24px",
          }}
        >
          ${product.price} {product.currency}
        </div>

        {/* Button */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: loading ? "#6B46C1" : "#7C3AED",
            border: "none",
            borderRadius: "12px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.2s",
            boxShadow: "0 2px 8px rgba(124, 58, 237, 0.4)",
          }}
          onMouseEnter={(e) => {
            if (!loading) e.target.style.backgroundColor = "#6D28D9";
          }}
          onMouseLeave={(e) => {
            if (!loading) e.target.style.backgroundColor = "#7C3AED";
          }}
        >
          {loading ? "Procesando..." : "Comprar ahora"}
        </button>

        {/* Footer info */}
        <p
          style={{
            fontSize: "12px",
            color: "#aaa",
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          Pago seguro con Stripe · Test mode
        </p>
      </main>
    </div>
  );
}