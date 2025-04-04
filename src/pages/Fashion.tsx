import HomeHeader from '../components/Home/Header'
import HomeHero from '../components/Home/Hero'
import HomeFooter from '../components/Home/Footer'
import ProductList from '../components/ProductList'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HomeHeader />
            <HomeHero />
            <HomeFooter />
            <ProductList />
        </div>
    )
}