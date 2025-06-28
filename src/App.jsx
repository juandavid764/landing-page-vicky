import Header from './components/Header'
import Hero from './components/Hero'
import UseCases from './components/UseCases'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import HowVickyWorks from './components/HowVickyWorks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CTA />
      <HowVickyWorks />
      <UseCases />
      <Benefits />
      <Footer />
    </div>
  )
}

export default App
