// import Image from "next/image";
import Ico from '../../lib/Ico'
import './CSS/Collection.scss'

function CollectionContainer({ Text, Title, Prize }: { Text: string, Title: string, Prize: string }) {
    return (
        <div className='FashionStylesContainer flex flex-col items-center text-xs min-h-[34vh] min-w-[12vw]'>
            <div className='ImageDiv flex items-center justify-center bg-white w-full h-[94%] overflow-hidden'>
                <img className='w-full' src='/vercel.svg' alt={Text} />
            </div>
            <div className='TextContainer w-full flex flex-col gap-2'>
                <p className='text-sm font-semibold'>{Text}</p>
                <h3>{Title}</h3>
                <h3>{Prize}</h3>
            </div>
        </div>
    )
}

export default function HomeCollection() {
    return (
        <div>

        </div>
    )
}