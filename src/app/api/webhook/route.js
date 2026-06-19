import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email || "No disponible";
    const amount = session.amount_total
      ? `$${(session.amount_total / 100).toFixed(2)}`
      : "No disponible";

    console.log("✅ Pago completado:");
    console.log(`   Email: ${email}`);
    console.log(`   Importe: ${amount}`);
  }

  return new Response("OK", { status: 200 });
}