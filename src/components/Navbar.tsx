export default function Navbar() {
    return (
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
    )
}
