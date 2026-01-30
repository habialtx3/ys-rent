import React from 'react'

export default function HeroSection() {
    return (
        <>
            <div className="lg:col-span-7 bento-card bg-brand-light p-10 lg:p-16 flex flex-col justify-center relative group">
                <div className="absolute top-8 left-8 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-orange rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark-text/40">
                        Premium Motion
                    </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-dark-text leading-[0.95] tracking-tighter mt-4">
                    REDESIGN YOUR <br />
                    <span className="text-brand-orange">JOURNEY.</span>
                </h1>
                <p className="mt-8 text-dark-text/70 text-lg max-w-md leading-relaxed">
                    Exclusive bento-style mobility for the modern traveler. Experience the
                    intersection of art and automotive excellence.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <button className="bg-brand-orange text-white px-10 py-5 rounded-full text-sm font-black tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-brand-orange/20">
                        Explore Fleet
                    </button>
                    <div className="flex items-center gap-3 px-6 py-5 rounded-full border border-dark-text/10 text-dark-text hover:bg-dark-text/5 transition-all cursor-pointer">
                        <span className="material-symbols-outlined">play_circle</span>
                        <span className="text-xs font-black uppercase tracking-widest">
                            The Experience
                        </span>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-5 min-h-[320px] bento-card relative bg-[#2a2a2a] group">
                <img
                    alt="Luxury car"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJTtkoVnA9pTk7vY32_x6qSZ-Q4Q7-wWKrEzkNN_I0ux-tbcgwoTtGZpBh0D3Wp6hAyTVkKGmlVmgIIPHVLcK3onubguznkDQBD1Wpb-7ilNn_XoIY1or8wLpCfiw_fe6hDaF9O8Hi3WZZW2Ek_sOzIPfpXh7mJgE74keg0TpVs7AKD9DwQU4SwqjTODvF9ClPrg8INmna2xoVwZJ7h74Rbay6bZbGqTRi3a5MlZ80jg5C7kILePpZqSrYNea54X8JZNP-PRnRdQM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-brand-accent/10 backdrop-blur-md rounded-inner border border-white/10">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
                                Safety First
                            </p>
                            <p className="text-sm font-bold mt-1">Full Premium Coverage</p>
                        </div>
                        <span className="material-symbols-outlined text-brand-accent text-3xl">
                            verified_user
                        </span>
                    </div>
                </div>
            </div>


        </>
    )
}
