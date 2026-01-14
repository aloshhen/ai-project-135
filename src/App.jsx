import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HeroGuides from './components/HeroGuides'
import HeroBuildCalculator from './components/HeroBuildCalculator'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dota-dark min-h-screen">
      <Navigation />
      <Hero />
      <HeroGuides />
      <HeroBuildCalculator />
      <About />
      <Footer />
    </div>
  )
}

export default App