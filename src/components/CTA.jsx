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
    console.log('Datos del formulario:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="demo" className="py-20 bg-[#2d3748]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para automatizar tus llamadas?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Agenda una demostración personalizada y descubre cómo Vicky puede transformar 
            la comunicación de tu empresa en solo 30 minutos.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#48bb78] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#2d3748] mb-4">
                ¡Solicitud enviada con éxito!
              </h3>
              <p className="text-[#718096] mb-6">
                Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[#4299e1] hover:text-[#2b6cb0] font-medium"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#2d3748] mb-2">
                  Agenda tu demostración gratuita
                </h3>
                <p className="text-[#718096]">
                  Completa el formulario y descubre el poder de las llamadas automatizadas
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2d3748] mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2d3748] mb-2">
                      Email corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent transition-colors"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#2d3748] mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2d3748] mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent transition-colors"
                      placeholder="+52 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2d3748] mb-2">
                    Cuéntanos sobre tu necesidad
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent transition-colors resize-none"
                    placeholder="Describe brevemente qué te gustaría automatizar con Vicky..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4299e1] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#3182ce] transition-colors focus:ring-2 focus:ring-[#4299e1] focus:ring-offset-2"
                >
                  Agendar Demostración Gratuita
                </button>

                <p className="text-xs text-[#718096] text-center mt-4">
                  Al enviar este formulario, aceptas que WeKall se ponga en contacto contigo 
                  para programar tu demostración personalizada.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTA