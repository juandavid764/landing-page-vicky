const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8f9ff] to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#55D39E] mb-6">
           Con Vicky evolucionamos los Asistentes Conversacionales
          </h1>
          <p className="text-xl sm:text-2xl text-[#393939] mb-8 max-w-4xl">
            El asistente conversacional inteligente que revoluciona la atención al cliente 
            con <span className="text-[#461F9C] font-semibold">automatización avanzada</span> y 
            <span className="text-[#55D39E] font-semibold"> respuestas instantáneas</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#agenda"
              className="bg-[#461F9C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9882CC] transition-colors shadow-lg"
            >
              Agenda una llamada
              Agenda una llamada
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero