import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Guía de Productividad Digital",
              description:
                "PDF completo con más de 100 páginas para optimizar tu productividad.",
            },
            unit_amount: 2999, // €29.99 en centavos
          },
          quantity: 1,
        },
      ],
      success_url: `${DOMAIN}/success`,
      cancel_url: `${DOMAIN}/cancel`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Error al crear sesión de checkout:", error.message);
    return Response.json(
      { error: "Error al crear la sesión de pago" },
      { status: 500 }
    );
  }
}