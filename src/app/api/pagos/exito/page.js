'use client'

import { useSearchParams } from 'next/navigation'

export default function SuscripcionExitoPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  const planesNombre = {
    standard: 'Standard',
    premium: 'Premium',
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          ¡pago exitoso!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          has pagado <strong>{planesNombre[plan] || plan}</strong>
        </p>
        <p className="text-gray-600 mb-8">
         
          Recibirás un correo de confirmación con los detalles de tu pedido.
        </p>
        <a
          href="/dashboard"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Ir al Dashboard
        </a>
      </div>
    </div>
  )
}