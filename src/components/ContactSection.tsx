import React from 'react'

export default function ContactSection() {
    return (
        <>
            <div className="bento-card bg-white/5 p-12 lg:p-16">
                <h2 className="text-4xl font-black tracking-tighter mb-8">
                    INITIATE <br />
                    <span className="text-brand-orange">REQUEST.</span>
                </h2>
                <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            className="bg-white/5 border border-white/10 text-white rounded-inner p-5 focus:ring-1 focus:ring-brand-orange outline-none placeholder:text-white/20 text-sm"
                            placeholder="FULL NAME"
                            type="text"
                        />
                        <input
                            className="bg-white/5 border border-white/10 text-white rounded-inner p-5 focus:ring-1 focus:ring-brand-orange outline-none placeholder:text-white/20 text-sm"
                            placeholder="EMAIL ADDRESS"
                            type="email"
                        />
                    </div>
                    <select className="w-full bg-white/5 border border-white/10 text-white/40 rounded-inner p-5 focus:ring-1 focus:ring-brand-orange outline-none text-sm appearance-none">
                        <option>SELECT MODEL</option>
                        <option>BMW M4 Competition</option>
                        <option>Mercedes-Benz E-Class</option>
                        <option>Audi RS6 Avant</option>
                    </select>
                    <textarea
                        className="w-full bg-white/5 border border-white/10 text-white rounded-inner p-5 focus:ring-1 focus:ring-brand-orange outline-none placeholder:text-white/20 text-sm"
                        placeholder="ADDITIONAL NOTES"
                        rows={3}
                        defaultValue={""}
                    />
                    <button className="w-full bg-brand-orange text-white py-6 rounded-inner text-sm font-black tracking-[0.2em] uppercase hover:scale-[1.01] transition-all shadow-xl shadow-brand-orange/20">
                        Send Application
                    </button>
                </form>
            </div>
            <div className="grid grid-rows-2 gap-4">
                <div className="bento-card bg-brand-accent p-10 text-dark-text flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-black tracking-tighter mb-4">
                            GLOBAL STUDIO
                        </h3>
                        <p className="text-sm opacity-70 leading-relaxed max-w-xs">
                            123 Luxury Lane, Central Business District, London, UK
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-dark-text/5 p-3 rounded-xl">
                            <span className="material-symbols-outlined text-brand-orange">
                                call
                            </span>
                        </div>
                        <div className="bg-dark-text/5 p-3 rounded-xl">
                            <span className="material-symbols-outlined text-brand-orange">
                                mail
                            </span>
                        </div>
                        <div className="bg-dark-text/5 p-3 rounded-xl">
                            <span className="material-symbols-outlined text-brand-orange">
                                share_location
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bento-card relative group">
                    <img
                        alt="Map Location"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTVq5FNU_5mCeIK5uWLmgaoF_NuRI1iFvYkLUNlBGxMLqh0CKeiL3Z68cF_XVNH6X5J9HUGUvL0M46LoZJ0dD1ro39w14KmWstAM_2vcsNowSMMAT1vhPGublZyhcy3vRYbSJJ74iGNvz68RofESBDH1rmxKxCujR84gTpGy9tSyTAmB8HM0lEEQXKdS8fYak83GN9vCBOvB1pLVEi1ue8JZmQi3M3BReOfNUAbUGZ7lplUfTOPVAMXU3vRl9Q9qBNZ_GQgnXSyY8"
                    />
                    <div className="absolute inset-0 bg-brand-orange/5" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-brand-orange">
                            <span className="material-symbols-outlined text-white">
                                location_on
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
