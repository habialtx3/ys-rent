import React from 'react'

export default function ContactSection() {
    return (
        <>
            <div className="bento-card bg-white/5 p-10 lg:p-16">
                <h2 className="text-4xl font-black tracking-tighter mb-8">
                    TERTARIK ?  <br />
                    <span className="text-brand-orange"> Kontak Kami Segera</span>
                </h2>
                <p className="text-brand-accent/60 max-w-md text-lg sm:text-sm">
                    Hubungi kami melalui platform favorit Anda. Respon cepat, pelayanan ramah,
                    dan profesional.
                </p>
            </div>
            <div className="grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 gap-2">
                <a
                    href="#"
                    className="bento-card p-6 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400
                    text-white flex flex-col justify-between group"
                >
                    <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                        photo_camera
                    </span>
                    <div>
                        <h3 className="text-lg font-black">Instagram</h3>
                        <p className="text-xs opacity-80">@yourbrand</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="bento-card p-6 bg-black text-white flex flex-col justify-between group"
                >
                    <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                        play_circle
                    </span>
                    <div>
                        <h3 className="text-lg font-black">TikTok</h3>
                        <p className="text-xs opacity-60">@yourbrand</p>
                    </div>
                </a>

                <a
                    href="https://wa.me/628xxxxxxxxxx"
                    className="bento-card p-6 bg-[#25D366] text-slate-950 flex flex-col justify-between group"
                >
                    <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                        chat
                    </span>
                    <div>
                        <h3 className="text-lg font-black">WhatsApp</h3>
                        <p className="text-xs opacity-90">Chat Sekarang</p>
                    </div>
                </a>

            </div>
        </>
    )
}
