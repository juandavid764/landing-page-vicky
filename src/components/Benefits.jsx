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
        <div className="mt-20 bg-[#E1DEE9] rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#461F9C] mb-2">7X</div>
              <div className="text-[#393939]">Escala tu contacto con clientes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#461F9C] mb-2">24/7</div>
              <div className="text-[#393939]">Disponibilidad completa</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#461F9C] mb-2">80%</div>
              <div className="text-[#393939]">Reducción en costos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#461F9C] mb-2">99%</div>
              <div className="text-[#393939]">Precisión en respuestas</div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16  rounded-2xl p-8 text-center text-white">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-black leading-tight">
            Tus empleados deberían pasar más tiempo en cosas importantes.
          </h2>
          <a 
            href="#demo" 
            className="inline-block bg-[#461F9C] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#E1DEE9] transition-colors duration-300 text-lg"
          >
            Agenda una llamada
          </a>
        </div>
      </div>
    </section>
  )
}

export default Benefits