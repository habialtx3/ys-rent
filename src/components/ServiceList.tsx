import React from 'react'

export default function ServiceList() {
    return (
        <>
            <div className="lg:col-span-2 bento-card bg-white/5 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-black mb-6 tracking-tighter">
                    LAYANAN KAMI
                </h2>
                <p className="text-brand-accent/60 text-lg leading-relaxed max-w-xl">
                    Solusi transportasi premium di Batam. Fleksibel, nyaman, dan profesional
                    untuk segala kebutuhan perjalanan Anda — dari bisnis hingga wisata.
                </p>
                <div className="flex gap-12 mt-8">
                    <div>
                        <p className="text-4xl font-black text-brand-orange">24/7</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
                            Customer Support
                        </p>
                    </div>
                    <div>
                        <p className="text-4xl font-black text-brand-orange">100+</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
                            Armada Siap Jalan
                        </p>
                    </div>
                </div>
            </div>

            <div className="bento-card bg-brand-accent p-8 text-dark-text flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl text-brand-orange">
                    directions_car
                </span>
                <div>
                    <h3 className="text-xl font-black tracking-tight mb-2">
                        Rental Mobil Lepas Kunci
                    </h3>
                    <p className="text-sm opacity-70">
                        Bebas berkendara sendiri dengan armada terawat dan persyaratan mudah.
                    </p>
                </div>
            </div>

            <div className="bento-card bg-white/5 relative group">
                <img
                    alt="Rental + Driver"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1511910849309-0dffb8785146"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-bg to-transparent">
                    <h3 className="text-lg font-black uppercase tracking-wider">
                        Rental Mobil + Driver
                    </h3>
                    <p className="text-xs opacity-70">
                        Perjalanan nyaman dengan driver profesional & berpengalaman.
                    </p>
                </div>
            </div>

            <div className="bento-card bg-brand-orange p-8 text-white flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                <div>
                    <h3 className="text-xl font-black tracking-tight mb-2">
                        Rental Mobil Premium
                    </h3>
                    <p className="text-sm opacity-90">
                        Armada eksklusif untuk kebutuhan VIP, event, dan perjalanan istimewa.
                    </p>
                </div>
            </div>

            <div className="bento-card bg-white/5 relative group">
                <img
                    alt="Antar Jemput"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-bg to-transparent">
                    <h3 className="text-lg font-black uppercase tracking-wider">
                        Antar Jemput Lokasi
                    </h3>
                    <p className="text-xs opacity-70">
                        Bandara, hotel, pelabuhan, dan lokasi khusus lainnya.
                    </p>
                </div>
            </div>

            <div className="bento-card bg-brand-accent p-8 text-dark-text flex flex-col justify-between">
                <span className="material-symbols-outlined text-4xl text-brand-orange">
                    business_center
                </span>
                <div>
                    <h3 className="text-xl font-black tracking-tight mb-2">
                        Perjalanan Dinas
                    </h3>
                    <p className="text-sm opacity-70">
                        Solusi transportasi profesional untuk kebutuhan bisnis & corporate.
                    </p>
                </div>
            </div>

            <div className="bento-card bg-white/5 relative group">
                <img
                    alt="Tour Batam"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    src="https://images.unsplash.com/photo-1526495124232-a04e1849168c"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-bg to-transparent">
                    <h3 className="text-lg font-black uppercase tracking-wider">
                        Wisata & Tour Kota Batam
                    </h3>
                    <p className="text-xs opacity-70">
                        Jelajahi destinasi terbaik Batam bersama guide lokal.
                    </p>
                </div>
            </div>
        </>
    )
}
