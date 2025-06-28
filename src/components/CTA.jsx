import { useState } from 'react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: ''
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
    <section id="demo" className="py-20 bg-[#461F9C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para automatizar tu negocio con Vicky IA?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img 
              src="/img1.png" 
              alt="Vicky IA Dashboard Analytics" 
              className="w-full max-w-lg rounded-xl shadow-2xl"
            />
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
                  ¡Llamada agendada con éxito!
                </h3>
                <p className="text-[#393939] mb-6">
                  Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para coordinar tu llamada estratégica.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#461F9C] hover:text-[#9882CC] font-medium"
                >
                  Agendar otra llamada
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#461F9C] mb-2">
                    Agenda tu llamada
                  </h3>
                  <p className="text-[#393939]">
                    Completa el formulario y descubre cómo Vicky IA puede transformar tu negocio
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#393939] mb-2">
                      Número de teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors"
                      placeholder="+57 xxx xxx xxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-[#393939] mb-2">
                      URL de tu página web *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E1DEE9] rounded-lg focus:ring-2 focus:ring-[#461F9C] focus:border-transparent transition-colors"
                      placeholder="https://www.tuempresa.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#461F9C] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#9882CC] transition-colors focus:ring-2 focus:ring-[#461F9C] focus:ring-offset-2"
                  >
                    Agendar
                  </button>

                  <p className="text-xs text-[#393939] text-center mt-4">
                    Al enviar este formulario, aceptas que WeKall se ponga en contacto contigo 
                    para agendar tu llamada estratégica personalizada.
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