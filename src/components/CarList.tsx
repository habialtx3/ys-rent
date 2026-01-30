import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

type Car = {
    name: string
    price: number
    img: string
    seats: number
    type: string
    tag: string
}

const cars: Car[] = [
    {
        name: "Agya / Ayla",
        price: 250000,
        img: "https://images.unsplash.com/photo-1549921296-3c5c6f96b8b3",
        seats: 5,
        type: "Manual",
        tag: "City",
    },
    {
        name: "New Agya",
        price: 300000,
        img: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
        seats: 5,
        type: "Auto",
        tag: "Urban",
    },
    {
        name: "All New Brio",
        price: 300000,
        img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
        seats: 5,
        type: "Auto",
        tag: "City",
    },
    {
        name: "New Xenia",
        price: 350000,
        img: "https://images.unsplash.com/photo-1605559424843-9f7b8e9b9d41",
        seats: 7,
        type: "Auto",
        tag: "Family",
    },
    {
        name: "Calya / Sigra",
        price: 300000,
        img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
        seats: 7,
        type: "Manual",
        tag: "Economy",
    },
    {
        name: "Xpander",
        price: 400000,
        img: "https://images.unsplash.com/photo-1603386329225-868f9b1f4b72",
        seats: 7,
        type: "Auto",
        tag: "Premium",
    },
    {
        name: "Mobilio",
        price: 300000,
        img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023",
        seats: 7,
        type: "Auto",
        tag: "Family",
    },
    {
        name: "Rocky",
        price: 350000,
        img: "https://images.unsplash.com/photo-1600359757080-83d6e4b0c8ad",
        seats: 5,
        type: "Auto",
        tag: "Compact SUV",
    },
    {
        name: "Reborn",
        price: 500000,
        img: "https://images.unsplash.com/photo-1601924638867-3ec62e37e7ae",
        seats: 7,
        type: "Luxury",
        tag: "VIP",
    },
]

export default function CarList() {
    return (
        <>
            <div className="flex justify-between items-center px-4 mb-4">
                <h2 className="text-3xl font-black tracking-tighter">
                    MOBIL KAMI
                </h2>
                <a className="text-xs font-black uppercase tracking-widest text-brand-orange flex items-center gap-2 group">
                    Lihat Semua
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </a>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1.1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {cars.map((car, i) => (
                    <SwiperSlide key={i}>
                        <div className="bento-card bg-brand-light text-dark-text p-2 h-full">
                            <div className="relative h-50 rounded-inner overflow-hidden mb-6 bg-brand-accent/20">
                                <img
                                    src={car.img}
                                    alt={car.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                                    <span className="text-xs font-black tracking-widest text-brand-orange">
                                        Rp {car.price.toLocaleString('id-Id')}
                                    </span>
                                    <span className="text-[10px] font-bold opacity-40 uppercase">
                                        /hari
                                    </span>
                                </div>
                            </div>

                            <div className="px-2">
                                <h3 className="text-xl font-black tracking-tighter mb-4">
                                    {car.name}
                                </h3>

                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    <Spec icon="airline_seat_recline_extra" label={`${car.seats} Seats`} />
                                    <Spec icon="settings_input_component" label={car.type} />
                                    <Spec icon="speed" label={car.tag} />
                                    <Spec icon="verified" label="Include AC" />
                                </div>

                                <button className="w-full bg-dark-text text-white py-4 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-brand-orange transition-colors">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

type SpecProps = {
    icon: string
    label: string
}

function Spec({ icon, label }: SpecProps) {
    return (
        <div className="bg-brand-accent/50 p-3 rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-brand-orange !text-lg">
                {icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
                {label}
            </span>
        </div>
    )
}
