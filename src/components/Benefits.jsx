const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#461F9C] mb-6">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-[#393939] max-w-3xl mx-auto mb-8">
            Las métricas que demuestran el impacto real de Vicky IA en tu negocio
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
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

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-[#461F9C] to-[#816CAF] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Tus empleados deberían pasar más tiempo en cosas importantes
          </h3>
          <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Libera a tu equipo de tareas repetitivas y permíteles enfocarse en lo que realmente genera valor para tu negocio
          </p>
          <a 
            href="#demo" 
            className="inline-block bg-white text-[#461F9C] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg"
          >
            Agenda una llamada
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits