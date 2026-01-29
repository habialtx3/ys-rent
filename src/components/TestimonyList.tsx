import React from 'react'

export default function TestimonyList() {
    return (
        <>
            <div className="lg:col-span-1 bento-card bg-brand-orange p-8 flex flex-col justify-between text-white">
                <span className="material-symbols-outlined text-5xl">format_quote</span>
                <p className="text-xs font-black uppercase tracking-[0.2em]">
                    Words from our <br />
                    community.
                </p>
            </div>
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
                <div className="bento-card bg-brand-accent p-8 text-dark-text flex flex-col justify-between">
                    <p className="italic text-sm leading-relaxed mb-6">
                        "Absolute masterpiece of service. The bento delivery was seamless."
                    </p>
                    <div className="flex items-center gap-3">
                        <img
                            alt="James"
                            className="w-10 h-10 rounded-full grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAziS3nMgqaemXf3nIX7ceOyMa_80d2ndtqdnuh3geepmdAYlSaqOlMsfff_VuFSvX5tV8ODErVl42BL9IW3W1yKgh1PFZ2aJXYME8U83qHDuzS-ZtiCr_8rrPdrzCXPG03BElqO-X602wvQ1Gpg9pMOuvFYmiEharbC8dpm4awrgh0mRCu35kKDFLTFYqQJB4njzwNfaaj52JvtUCdF-vZqkJVvdV7odAXIpJDpWOVbtvYcfyerAexJC-OU0qQ7v9L6vK9KD_LTMo"
                        />
                        <div>
                            <p className="text-xs font-black uppercase">James W.</p>
                            <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest">
                                Architect
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bento-card bg-brand-accent p-8 text-dark-text flex flex-col justify-between">
                    <p className="italic text-sm leading-relaxed mb-6">
                        "The E-Class was pristine. I've never had a more stylish rental."
                    </p>
                    <div className="flex items-center gap-3">
                        <img
                            alt="Sarah"
                            className="w-10 h-10 rounded-full grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYkUNVPwOL5_IW5SzNIvpEAzZOLBYyYD2qTfFcxNenMnwAQhoweOcuqITDfwEQD6ED0gA5UPo9_8yFQYAEatHT3mW15645B9ycDHAlruvuMh0yTQxXSAWCbYAxXGORIpDt21P3GTpqDg84kin21EO2AvTArI0Nu5rO5opQHYI8frNSd6XZ1a5Ky6BVp0Vw80XjMEX0Nrl3G00UOc9D_wrq_EtS5Vp4q17f6Xd9YtErzDhGvzeYRuaQIMho1gDt3vD-r49uSM6Fej0"
                        />
                        <div>
                            <p className="text-xs font-black uppercase">Sarah J.</p>
                            <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest">
                                Travel Designer
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bento-card bg-brand-accent p-8 text-dark-text flex flex-col justify-between">
                    <p className="italic text-sm leading-relaxed mb-20">
                        "WhatsApp support responded in seconds. Truly premium experience."
                    </p>
                    <div className="flex items-center gap-3">
                        <img
                            alt="Michael"
                            className="w-10 h-10 rounded-full grayscale"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2y5-lWTDhskDZWpGw5wkbZ35Yg3JI5F63Jga_Tl7aa3il2cnKXzHWkUsZxW2TP3fS09lEhppP7tBNOglMrDbfAQfQoSXFLwYf64IV12-VRDRJw2DT_Y4M9ffrCwQqb2Yv1pMAt4m4io1gRsFpBUDNaIMZZ5n9MWliKvvl1XKqTwCqkyx4gdUOtvBoXaYN30Fd3kepRM-c6_V7RNUkfiWfkhoA030pMdRHwMzvxdZWOOtSuVTaYw_mw-X6nYa5932p9RoG3eIEp9o"
                        />
                        <div>
                            <p className="text-xs font-black uppercase">Michael C.</p>
                            <p className="text-[9px] opacity-40 uppercase font-bold tracking-widest">
                                Founder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
