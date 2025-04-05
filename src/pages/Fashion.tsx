import HomeHeader from '../components/Home/Header'
import HomeFooter from '../components/Home/Footer'
import ProductList from '../components/ProductList'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HomeHeader />
            <HomeFooter />
            <ProductList />
        </div>
    )
}