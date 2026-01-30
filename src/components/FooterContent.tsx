
export default function FooterContent() {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="bg-brand-orange text-white p-1 rounded-lg">
                        <span className="material-symbols-outlined !text-lg">car_rental</span>
                    </div>
                    <h2 className="text-lg font-black tracking-tighter uppercase italic">
                        YS Rental Car
                    </h2>
                </div>
                <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <a className="hover:text-brand-orange transition-colors" href="#">
                        Privacy
                    </a>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                        Terms
                    </a>
                    <a className="hover:text-brand-orange transition-colors" href="#">
                        Cookies
                    </a>
                </div>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                    © 2024 YS Rental Group
                </p>
            </div>
        </>
    )
}
