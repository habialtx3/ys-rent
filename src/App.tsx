import './App.css'
import CarList from './components/CarList'
import ContactSection from './components/ContactSection'
import FooterContent from './components/FooterContent'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ServiceList from './components/ServiceList'
import TestimonyList from './components/TestimonyList'

function App() {

  return (
    <>
      <div className="artsy-blob fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-brand-orange rounded-full grainy" />
      <div className="artsy-blob fixed bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-brand-accent rounded-full grainy" />
      <header className="sticky top-6 z-50 mx-auto max-w-7xl px-6">
        <Navbar/>
      </header>
      <main className="relative z-10 px-6 max-w-7xl mx-auto pt-2">
        <section className="grid lg:grid-cols-12 gap-4 h-auto lg:h-[700px]">
          <HeroSection />
        </section>
        <section className="grid lg:grid-cols-3 gap-4 auto-rows-[300px]" id="about">
          <ServiceList />
        </section>
        <section className="space-y-4" id="fleet">
          <CarList />
        </section>
        <section className="grid lg:grid-cols-4 gap-4" id="testimonials">
          <TestimonyList />
        </section>
        <section className="grid lg:grid-cols-2 gap-4 pb-20" id="contact">
          <ContactSection />
        </section>
      </main>
      <footer className="bg-[#1a1a1a] border-t border-white/5 py-12 px-6">
        <FooterContent />
      </footer>
    </>
  )
}

export default App
