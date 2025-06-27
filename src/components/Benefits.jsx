const Benefits = () => {
  const benefits = [
    {
      title: "Disponibilidad 24/7",
      description: "Vicky nunca duerme. Atiende a tus clientes en cualquier momento del día o la noche, sin interrupciones.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Reducción de Costos",
      description: "Disminuye significativamente los costos operativos al automatizar hasta el 80% de las consultas rutinarias.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Escalabilidad Infinita",
      description: "Maneja miles de conversaciones simultáneas sin degradar la calidad del servicio.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5 5 5M7 19l5-5 5 5" />
        </svg>
      )
    },
    {
      title: "Consistencia Total",
      description: "Garantiza respuestas uniformes y precisas, eliminando la variabilidad humana en el servicio.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Aprendizaje Continuo",
      description: "Se mejora constantemente con cada interacción, optimizando respuestas y flujos de conversación.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Integración Perfecta",
      description: "Se adapta a tus sistemas existentes sin interrumpir las operaciones actuales de tu negocio.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#461F9C] mb-6">
            ¿Por qué elegir Vicky?
          </h2>
          <p className="text-xl text-[#393939] max-w-3xl mx-auto mb-8">
            Los beneficios y diferenciadores que hacen de Vicky la mejor opción para tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-[#E1DEE9] to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#55D39E] rounded-xl flex items-center justify-center text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#461F9C] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#393939] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-[#E1DEE9] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#461F9C] text-center mb-8">
            Vicky vs. Soluciones Tradicionales
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#461F9C]">
                  <th className="text-left py-4 px-6 text-[#461F9C] font-semibold">Característica</th>
                  <th className="text-center py-4 px-6 text-[#55D39E] font-semibold">Vicky</th>
                  <th className="text-center py-4 px-6 text-[#393939] font-semibold">Soluciones Tradicionales</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-[#E1DEE9]">
                  <td className="py-4 px-6 text-[#393939] font-medium">Tiempo de implementación</td>
                  <td className="py-4 px-6 text-center text-[#55D39E] font-semibold">2-4 semanas</td>
                  <td className="py-4 px-6 text-center text-[#393939]">3-6 meses</td>
                </tr>
                <tr className="border-b border-[#E1DEE9]">
                  <td className="py-4 px-6 text-[#393939] font-medium">Costo de mantenimiento</td>
                  <td className="py-4 px-6 text-center text-[#55D39E] font-semibold">Bajo</td>
                  <td className="py-4 px-6 text-center text-[#393939]">Alto</td>
                </tr>
                <tr className="border-b border-[#E1DEE9]">
                  <td className="py-4 px-6 text-[#393939] font-medium">Capacidad de aprendizaje</td>
                  <td className="py-4 px-6 text-center text-[#55D39E] font-semibold">Automático</td>
                  <td className="py-4 px-6 text-center text-[#393939]">Manual</td>
                </tr>
                <tr className="border-b border-[#E1DEE9]">
                  <td className="py-4 px-6 text-[#393939] font-medium">Disponibilidad</td>
                  <td className="py-4 px-6 text-center text-[#55D39E] font-semibold">24/7/365</td>
                  <td className="py-4 px-6 text-center text-[#393939]">Horario limitado</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-[#393939] font-medium">Escalabilidad</td>
                  <td className="py-4 px-6 text-center text-[#55D39E] font-semibold">Ilimitada</td>
                  <td className="py-4 px-6 text-center text-[#393939]">Limitada por recursos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#55D39E] mb-2">80%</div>
            <div className="text-[#393939]">Reducción en consultas manuales</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#55D39E] mb-2">24/7</div>
            <div className="text-[#393939]">Disponibilidad completa</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#55D39E] mb-2">99%</div>
            <div className="text-[#393939]">Precisión en respuestas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#55D39E] mb-2">60%</div>
            <div className="text-[#393939]">Ahorro en costos operativos</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
