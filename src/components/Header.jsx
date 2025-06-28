const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-[#E1DEE9]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">
                <span className="text-[#461F9C]">We</span><span className="text-[#55D39E]">Kall</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#que-es-vicky" className="text-[#393939] hover:text-[#461F9C] px-3 py-2 text-sm font-medium transition-colors">
                ¿Qué es Vicky?
              </a>
              <a href="#casos-uso" className="text-[#393939] hover:text-[#461F9C] px-3 py-2 text-sm font-medium transition-colors">
                Casos de Uso
              </a>
              <a href="#beneficios" className="text-[#393939] hover:text-[#461F9C] px-3 py-2 text-sm font-medium transition-colors">
                Beneficios
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#demo"
              className="bg-[#461F9C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#9882CC] transition-colors"
            >
              Agenda una reunión
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#393939] hover:text-[#461F9C] p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
