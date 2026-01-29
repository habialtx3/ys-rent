import React from 'react'

export default function ServiceList() {
    return (
        <>
            <div className="lg:col-span-2 bento-card bg-white/5 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-black mb-6 tracking-tighter">
                    OUR PHILOSOPHY
                </h2>
                <p className="text-brand-accent/60 text-lg leading-relaxed max-w-xl">
                    We've reorganized the rental experience into a curated collection of
                    moments. No friction, just pure aesthetic driving pleasure. Our fleet
                    is handpicked for those who value both form and function.
                </p>
                <div className="flex gap-12 mt-8">
                    <div>
                        <p className="text-4xl font-black text-brand-orange">50+</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
                            Luxury Models
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-brand-orange">12</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
                            Global Hubs
                        </p>
                    </div>
                </div>
            </div>
            <div className="bento-card bg-brand-accent p-8 text-dark-text flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-4xl text-brand-orange">
                        auto_awesome
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40">
                        Since 2024
                    </span>
                </div>
                <div>
                    <h3 className="text-xl font-black tracking-tight mb-2">
                        Immaculate Curation
                    </h3>
                    <p className="text-sm opacity-70">
                        Every vehicle is detailed to a gallery-standard finish before every
                        rental.
                    </p>
                </div>
            </div>
            <div className="bento-card bg-white/5 relative group">
                <img
                    alt="Service"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVWw0CxQuvFFcG9KTNLacxe7zFMfF-pXThMSZ-ODIZjmhUaPx4GUk6wphlICzMVl7e1H9DLoldLKtAYfIEzlnXgnqZb6A4yZEYPQ7JR_R10Dl8JdxwbNLsnLwburEyj5qSKBT3FG44dMbUs3UXIf7n4SLeVoYulD87pD_UTgjKo7CHcx_lhlpQvWoPNHXCS0M3unigyFS9hm7lAI3X5h-fgYsHrOqsYMWB9sF4MBql99PabCspLR_JRWOSXO5yVQMLjJ5NhBdFocA"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-bg to-transparent">
                    <h3 className="text-lg font-black uppercase tracking-wider">
                        Airport Elite
                    </h3>
                </div>
            </div>
            <div className="bento-card bg-brand-orange p-8 text-white flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl">distance</span>
                <div>
                    <h3 className="text-xl font-black tracking-tight mb-2">
                        Unlimited Paths
                    </h3>
                    <p className="text-sm opacity-90">
                        No mileage restrictions on our premium concierge selections.
                    </p>
                </div>
            </div>
            <div className="bento-card bg-white/5 relative group">
                <img
                    alt="Service"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNVz2HEpfQXyxeQI9Pbg2O0wRamw796rT2KSJ4HIprua5_t88CClMTYGfT16dR0CtOIFcJ81LdkETn2QUIC5TGRX8d7X93ixZ2FGavzXDSSxATbE9WHlso1oulqBGlF67jrNth31gQWGIYxL2EYneSx1NESyCqROm00kjkbe1cF5UPW3h6Pu42UVwPaCZVHd7akNB6EJxQ7fuVQIzAUM2A8TUVJokaMZx5zDPhtm8TkQpKCTd0s1XWVaywUE69nA1NWLJPsgcki4"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-bg to-transparent">
                    <h3 className="text-lg font-black uppercase tracking-wider">
                        City Discovery
                    </h3>
                </div>
            </div>
        </>
    )
}
