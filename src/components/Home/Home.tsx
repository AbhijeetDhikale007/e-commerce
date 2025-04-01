import HomeHeader from './Header'
import HomeFooter from './Footer'
import ProductList from '../ProductList'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HomeHeader />
            <HomeFooter />
            <ProductList />
        </div>
    )
}