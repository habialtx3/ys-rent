import React from 'react'

export default function CarList() {
    return (
        <>
            <div className="flex justify-between items-center px-4">
                <h2 className="text-3xl font-black tracking-tighter">
                    THE CURATED COLLECTION
                </h2>
                <a
                    className="text-xs font-black uppercase tracking-widest text-brand-orange flex items-center gap-2 group"
                    href="#"
                >
                    View Full Gallery
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bento-card bg-brand-light text-dark-text p-4">
                    <div className="relative h-60 rounded-inner overflow-hidden mb-6 bg-brand-accent/20">
                        <img
                            alt="BMW"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKgPuoRx1M4RedYrG7r2lehsyVhelbNPOegs07M_wZYvWr0dHCpNSU1_bKrWDO52vcrbbshu6C6dhhdZonDBQstyMB4EsnB12tEC6As8kldMUugGp4BxMGaVTBxkL-SAxXdWfBxfn3aAlj3byuHv2PEr2bhQtOoRsb0eCccRMfRsXHF0s1CqITaTbWHhT7DUDwg2yCJH188ulsi4oN5mMweM4IL2a1qxjwZ2mEICuKOK_c5ufYHCTqwZ5ADci7NGq9pODfTHRU-yk"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                            <span className="text-xs font-black tracking-widest text-brand-orange">
                                $120
                            </span>
                            <span className="text-[10px] font-bold opacity-40 uppercase">
                                /day
                            </span>
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="text-xl font-black tracking-tighter mb-4">
                            BMW M4 Competition
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    airline_seat_recline_extra
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    4 Seats
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    settings_input_component
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Auto
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    speed
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Sport
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    ac_unit
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Dual AC
                                </span>
                            </div>
                        </div>
                        <button className="w-full bg-dark-text text-white py-4 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-brand-orange transition-colors">
                            Rent This Unit
                        </button>
                    </div>
                </div>
                <div className="bento-card bg-brand-light text-dark-text p-4">
                    <div className="relative h-60 rounded-inner overflow-hidden mb-6 bg-brand-accent/20">
                        <img
                            alt="Mercedes"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdRwu3hDYs3oEZVLHRcnaJ1SnOwvOHhMrsh7gpAnv4P1wQ5QkmsMEwhV-ArdIns9hFwASn0UYy2BIHf6y7tjPISoGFXx5E2Ns8zbh0CxfA25jxs_vvYoql-GR5lFUopUzyMdaCmZj2WPcqFyIfs98tQBNrz5ZQyxHC91PjAMdetKPth5br0slayVk7hSS5nKX2h3FgEef2zN2LBzlHQX6Epemlr_gmAHU-c7GfXIdKL1tP67ZKzu2ItQpUuvSfdSGIGUUmT596qwg"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                            <span className="text-xs font-black tracking-widest text-brand-orange">
                                $150
                            </span>
                            <span className="text-[10px] font-bold opacity-40 uppercase">
                                /day
                            </span>
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="text-xl font-black tracking-tighter mb-4">
                            Mercedes E-Class
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    airline_seat_recline_extra
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    5 Seats
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    settings_input_component
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Auto
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    pill
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Comfort
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    luggage
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    2 Large
                                </span>
                            </div>
                        </div>
                        <button className="w-full bg-dark-text text-white py-4 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-brand-orange transition-colors">
                            Rent This Unit
                        </button>
                    </div>
                </div>
                <div className="bento-card bg-brand-light text-dark-text p-4">
                    <div className="relative h-60 rounded-inner overflow-hidden mb-6 bg-brand-accent/20">
                        <img
                            alt="Audi"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc5Wvy_WJ8jPNOX0FbV5PQGrMI2U_xd-SqgzyOQxJazCfXR96Suk9kObpFqcwkYXWy1AFkrmm1D1SApXn06QTXLzecWZ-nUvzBfZN15j9e33mjQu-0slr69LSujwGTFYjqSPkszrFQ9vAQCHb86rJb65MuIXis_b_5QDPDFVRPdZ1Rc9omW5J3yio-jRfng0S2cwiDcHrvmLJDuqoO0rSGRmI5Ng5vGwNmB19HMydmTujcBZL_76AWx_tD0DihWVlDwJt-hAejClE"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                            <span className="text-xs font-black tracking-widest text-brand-orange">
                                $135
                            </span>
                            <span className="text-[10px] font-bold opacity-40 uppercase">
                                /day
                            </span>
                        </div>
                    </div>
                    <div className="px-2">
                        <h3 className="text-xl font-black tracking-tighter mb-4">
                            Audi RS6 Avant
                        </h3>
                        <div className="grid grid-cols-2 gap-2 mb-6">
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    airline_seat_recline_extra
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    5 Seats
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    settings_input_component
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Auto
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    bolt
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Hybrid
                                </span>
                            </div>
                            <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-brand-orange !text-lg">
                                    security
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                                    Assist+
                                </span>
                            </div>
                        </div>
                        <button className="w-full bg-dark-text text-white py-4 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-brand-orange transition-colors">
                            Rent This Unit
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
