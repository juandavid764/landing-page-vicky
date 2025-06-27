import { useState } from 'react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se podría agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-[#461F9C] to-[#816CAF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para transformar tu atención al cliente?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white text-opacity-90">
            Solicita una demostración gratuita y descubre cómo Vicky puede revolucionar 
            la experiencia de tus clientes en solo 30 minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="text-white space-y-6">
            <h3 className="text-2xl font-bold mb-6">
              ¿Qué incluye tu demo gratuita?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#55D39E] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Demostración personalizada</h4>
                  <p className="text-white text-opacity-80 text-sm">
                    Configuración de Vicky adaptada a tu industria y necesidades específicas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#55D39E] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Análisis de ROI</h4>
                  <p className="text-white text-opacity-80 text-sm">
                    Cálculo del retorno de inversión esperado para tu empresa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#55D39E] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Plan de implementación</h4>
                  <p className="text-white text-opacity-80 text-sm">
                    Estrategia paso a paso para integrar Vicky en tu operación
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#55D39E] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Soporte especializado</h4>
                  <p className="text-white text-opacity-80 text-sm">
                    Asesoría de nuestros expertos en automatización conversacional
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-[#55D39E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-black">¡Respuesta en 24 horas!</h4>
                  <p className="text-black text-opacity-80 text-sm">
                    Nuestro equipo se contactará contigo en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#55D39E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#461F9C] mb-4">
                  ¡Solicitud enviada con éxito!
                </h3>
                <p className="text-[#393939] mb-6">
                  Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#461F9C] hover:text-[#9882CC] font-medium"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#461F9C] mb-2">
                    Solicita tu demo gratuita
                  </h3>
                  <p className="text-[#393939]">
                    Completa el formulario y descubre el poder de Vicky
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#393939] mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#393939] mb-2">
                        Email corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors"
                        placeholder="tu@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#393939] mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#393939] mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors"
                        placeholder="+52 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#393939] mb-2">
                      Cuéntanos sobre tu necesidad
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors resize-none"
                      placeholder="Describe brevemente qué te gustaría automatizar con Vicky..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#461F9C] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#9882CC] transition-colors focus:ring-2 focus:ring-[#461F9C] focus:ring-offset-2"
                  >
                    Solicitar Demo Gratuita
                  </button>

                  <p className="text-xs text-[#393939] text-center mt-4">
                    Al enviar este formulario, aceptas que WeKall se ponga en contacto contigo 
                    para programar tu demostración personalizada.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
