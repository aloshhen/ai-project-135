import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HeroGuide from './components/HeroGuide'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HeroGuide />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App