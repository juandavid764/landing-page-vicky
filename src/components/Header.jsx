const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#4299e1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <h1 className="text-xl font-bold text-[#2d3748]">
                  vicky.ai
                </h1>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-[#718096] hover:text-[#2d3748] px-3 py-2 text-sm font-medium transition-colors">
                Contactanos
              </a>
              <a href="#" className="text-[#718096] hover:text-[#2d3748] px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </a>
              <a href="#" className="text-[#718096] hover:text-[#2d3748] px-3 py-2 text-sm font-medium transition-colors">
                Developers
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-[#718096] hover:text-[#2d3748] text-sm font-medium">
              Inicia sesión
            </a>
            <a
              href="#demo"
              className="bg-[#2d3748] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a5568] transition-colors"
            >
              Agenda una reunión
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#718096] hover:text-[#2d3748] p-2">
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