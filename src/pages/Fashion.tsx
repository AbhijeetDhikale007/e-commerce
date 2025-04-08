import HomeHeader from '../components/Home/Header'
import HomeHero from '../components/Home/Hero'
import HomeCategories from '../components/Home/Categories'
import HomeDiscounts from '../components/Home/Discounts'
import HomeFashionStyles from '../components/Home/FashionStyles'
import HomeCollection from '../components/Home/Collection'
import HomeFooter from '../components/Home/Footer'
import ProductList from '../components/ProductList'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HomeHeader />
            <HomeHero />
            <HomeCategories />
            <HomeDiscounts />
            <HomeFashionStyles />
            <HomeCollection />
            <HomeFooter />
            <ProductList />
        </div>
    )
}