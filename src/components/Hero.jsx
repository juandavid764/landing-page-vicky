const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#E1DEE9] to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#461F9C] mb-6">
            Conoce a <span className="text-[#55D39E]">Vicky</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#393939] mb-8 max-w-4xl mx-auto">
            El asistente conversacional inteligente que revoluciona la atención al cliente 
            con <span className="text-[#461F9C] font-semibold">automatización avanzada</span> y 
            <span className="text-[#55D39E] font-semibold"> respuestas instantáneas</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#demo"
              className="bg-[#461F9C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#9882CC] transition-colors shadow-lg"
            >
              Solicitar Demo Gratis
            </a>
            <a
              href="#que-es-vicky"
              className="border-2 border-[#461F9C] text-[#461F9C] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#461F9C] hover:text-white transition-colors"
            >
              Ver Cómo Funciona
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 bg-[#55D39E] rounded-full blur-3xl"></div>
          </div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-[#E1DEE9]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#55D39E] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">V</span>
                </div>
                <div className="bg-[#E1DEE9] rounded-lg px-4 py-3 flex-1">
                  <p className="text-[#393939]">¡Hola! Soy Vicky, tu asistente conversacional. ¿En qué puedo ayudarte hoy?</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-end">
                <div className="bg-[#461F9C] text-white rounded-lg px-4 py-3 max-w-xs">
                  <p>Necesito información sobre sus servicios</p>
                </div>
                <div className="w-8 h-8 bg-[#816CAF] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">👤</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#55D39E] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">V</span>
                </div>
                <div className="bg-[#E1DEE9] rounded-lg px-4 py-3 flex-1">
                  <p className="text-[#393939]">¡Perfecto! Te puedo ayudar con información detallada sobre nuestros servicios, precios y agendar una demostración personalizada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
