const HowVickyWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#461F9C] mb-6">
            ¿Cómo funciona Vicky IA?
          </h2>
          <p className="text-xl text-[#393939] max-w-3xl mx-auto">
            Descubre en este video cómo Vicky puede transformar la atención al cliente de tu empresa
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/IUeLXPSKZtg"
              title="Cómo funciona Vicky IA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#461F9C] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#461F9C] mb-4">
              Chatbot
            </h3>
            <p className="text-[#393939]">
              Vicky Chatbot es experta en interacción escrita, creando diálogos textuales ágiles y profundos con flujos diseñados para maximizar la satisfacción del cliente en cada clic.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#816CAF] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#461F9C] mb-4">
              VoiceBots
            </h3>
            <p className="text-[#393939]">
              Vicky comprende y anticipa las necesidades de tus clientes, integrando sistemas para ofrecer un servicio excepcional. Disponible en todo momento, Vicky garantiza que la experiencia de marca que reciben tus clientes es exactamente la que desean.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#55D39E] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#461F9C] mb-4">
              IA generativa
            </h3>
            <p className="text-[#393939]">
              Impulsa tu negocio con la AI generativa de Vicky: donde la tecnología se encuentra con la conversación para llevar tus interacciones al próximo nivel. Confía en la experiencia de WeKall para una AI que no solo dialoga, sino que aprende y se adapta, asegurando que cada conversación sea única y constructiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowVickyWorks
