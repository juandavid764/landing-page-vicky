const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8f9ff] to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d3748] mb-6">
            Llamadas con inteligencia artificial en español para tu negocio
          </h1>
          <p className="text-xl sm:text-2xl text-[#718096] mb-8 max-w-4xl mx-auto">
            Configura llamadas automáticas que suenan como humanos en tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#demo"
              className="bg-[#2d3748] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4a5568] transition-colors shadow-lg"
            >
              Agenda una llamada
            </a>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="mt-16 bg-[#2d3748] py-8 rounded-2xl">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-white font-bold text-lg">WeKall</div>
            <div className="text-white font-bold text-lg">Vicky AI</div>
            <div className="text-white font-bold text-lg">AutoCall</div>
            <div className="text-white font-bold text-lg">SmartVoice</div>
            <div className="text-white font-bold text-lg">CallBot</div>
            <div className="text-white font-bold text-lg">VoiceAI</div>
          </div>
        </div>

        {/* Demo Form Section */}
        <div className="mt-20 max-w-md mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
              Prueba las llamadas con IA usando la información de tu empresa
            </h3>
            <p className="text-[#718096]">
              Optimiza tu operación con llamadas predictivas
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">
                  Teléfono
                </label>
                <div className="flex">
                  <select className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50">
                    <option>+57</option>
                    <option>+52</option>
                    <option>+1</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="123 456 7890"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#2d3748] mb-2">
                  URL de tu página web
                </label>
                <input
                  type="url"
                  placeholder="https://tu-landing-page.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                />
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm text-blue-700">
                    <strong>Entrenamiento de IA:</strong> Analizamos tu sitio web de forma inteligente para crear un asistente personalizado.
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#48bb78] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#38a169] transition-colors"
              >
                Procesar
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Recibir llamada IA
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero