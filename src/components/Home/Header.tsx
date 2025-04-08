import Image from 'next/image'
import './CSS/Header.scss'

export default function HomeHeader() {
    return (
    <header className='flex flex-col w-[100vw]'>
      <section className="TopSection flex h-[6vh] justify-between items-center text-sm">
        <div className="flex gap-5">
            <p>About</p>
            <p>My Account</p>
            <p>Wishlist</p>
            <p>Checkout</p>
        </div>
        <div className="flex">
            <p>Free shipping for all orders of 150$</p>
        </div>
        <div className="flex gap-5">
            <p>Share Location</p>
            <p>Languages</p>
            <p>Currency</p>
        </div>
      </section>

      <section className='MiddleSection flex gap-5 h-[10vh] items-center justify-between bg-white'>
        <div className='flex gap-2'>
            <Image src='/next.svg' alt='Logo' width={100} height={100} />
            <h1 className='text-3xl'>Roiser</h1>
        </div>
        <div className='flex gap-2 items-center SearchBox'>
            <p>All Categeries</p>
            <hr />
            <input type="text" placeholder='Search Keywords' className='bg-white p-1 text-xs' />
            <button className='text-xs text-white'>Search Here</button>
        </div>
        <div>
            <p className='text-end'>Call us now</p>
            <p>+10 023834 20202</p>
        </div>
        <div>
            <p>Your Cart</p>
            <p>$ 1028.00</p>
        </div>
      </section>

      <section className='BottomSection flex min-h-[7vh] items-center w-[100vw]'>
        <div className='Buttons flex gap-6 w-[60vw] px-2 h-[8vh] text-sm'>
            <button>HOME</button>
            <button>SHOP</button>
            <button>WOMEN</button>
            <button>MEN</button>
            <button>PAGES</button>
            <button>BLOG</button>
            <button>CONTACT</button>
        </div>
        <div className='Discount flex gap-3 items-center w-[18vw] h-[8vh] justify-center'>
            <p>Get 30% Discount Now</p>
            <p className='Sale bg-white p-1 rounded-xl text-red-500'>SALE</p>
        </div>
      </section>
    </header>
    );
}