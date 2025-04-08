import './CSS/Footer.scss'

function Heading({ Text }: { Text: string }) {
    return <h3>{Text}</h3>;
}

export default function HomeFooter() {
    return (
        <footer className='flex flex-col gap-4 max-w-[100vw]'>
            <div className='flex gap-5 max-w-[100vw] justify-between'>
                <section>
                    <Heading Text="About Store" />
                    <p>Monday - Friday: 8am to 6pm</p>
                    <p>Saturday: 8am to 6pm</p>
                    <p>Sunday: Service Close</p>
                </section>
                <section>
                    <Heading Text="Our Stores" />
                    <a href="">New York</a>
                    <a href="">London SF</a>
                    <a href="">Los Angeles</a>
                    <a href="">Chicago</a>
                    <a href="">Las Vegas</a>
                </section>
                <section>
                    <Heading Text="Shop Categories" />
                    <a href="">New Arrivals</a>
                    <a href="">Best Selling</a>
                    <a href="">Vegetables</a>
                </section>
                <section>
                    <Heading Text="Useful Links" />
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Contact Us</a>
                    <a href="">Latest News</a>
                    <a href="">Our Sitemaps</a>
                </section>
                <section className='text-wrap w-[22vw]'>
                    <Heading Text="Our Newsletter" />
                    <p>Subscribe to the mailing list to receive updates one the new arrivals and other discounts</p>
                    <input type="email" name="email" id="" />
                    <p>I would like to receive news and special offers from Roiser</p>
                </section>
            </div>
            <hr />
            <div className='flex justify-between'>
                <div>
                    <p>Payment Systems:</p>
                </div>
                <p>Copyright © 2024 Roiser. All rights reserved.</p>
            </div>
        </footer>
    )
}