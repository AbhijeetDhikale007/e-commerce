import HomeHeader from './Header'
import HomeFooter from './Footer'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <HomeHeader />
            <HomeFooter />
        </div>
    )
}