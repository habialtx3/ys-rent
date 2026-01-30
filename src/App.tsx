
import './App.css'
import CarList from './components/CarList'
import ContactSection from './components/ContactSection'
import FooterContent from './components/FooterContent'
import HeroSection from './components/HeroSection'
import ServiceList from './components/ServiceList'
import TestimonyList from './components/TestimonyList'

function App() {

  return (
    <>
      <div className="artsy-blob fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-brand-orange rounded-full grainy" />
      <div className="artsy-blob fixed bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-brand-accent rounded-full grainy" />
      <header className="sticky top-6 z-50 mx-auto max-w-7xl px-6">
        <nav className="bg-brand-bg/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-float">
          <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-white p-1.5 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined !text-xl">car_rental</span>
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase">
              Elite<span className="text-brand-orange">Drive</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a
              className="text-xs font-bold tracking-widest uppercase hover:text-brand-orange transition-colors"
              href="#fleet"
            >
              Fleet
            </a>
            <a
              className="text-xs font-bold tracking-widest uppercase hover:text-brand-orange transition-colors"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-xs font-bold tracking-widest uppercase hover:text-brand-orange transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-xs font-bold tracking-widest uppercase hover:text-brand-orange transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <button className="bg-brand-orange text-white px-6 py-2.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg shadow-brand-orange/20 hover:scale-105 transition-all">
            Book Now
          </button>
        </nav>
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
