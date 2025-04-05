import Image from 'next/image'
import './Hero.scss'

export default function HomeHero() {
    return (
        <div className='FashionHero h-[70vh] max-w-screen w-screen flex items-center justify-end'>
            <section className='flex flex-col gap-4 w-[26%] font-bold text-wrap'>
                <span className='text-xs'>SUMMER 25 WOMEN'S COLLECTION</span>
                <h1 className='text-3xl'>SUPER COLLECTION FOR WOMEN</h1>
                <div className='flex gap-1 items-end'>
                    <p className='font-thin'>From</p>
                    <h4 className='text-xl'>$200.00</h4>
                </div>
                <button className='w-fit text-white text-sm font-extralight'>View Collections</button>
            </section>
        </div>
    )
}