// import Image from "next/image";
import Ico from '../../lib/Ico'
import './CSS/FashionStyles.scss'

function DiscountsContainer({ Text, Title, Message }: { Text: string, Title: string, Message: string }) {
    return (
        <div className='FashionStylesContainer flex flex-col gap-3 justify-center h-[34vh] w-full'>
            <p className='text-xs'>{Text}</p>
            <h3 className='text-lg font-semibold'>{Title}</h3>
            <span className='text-xs opacity-50'>{Message}</span>
            <div>
                <button className='flex gap-2 items-center'>
                    <div className='h-5 w-5'>
                        <Ico name='PlusButton' />
                    </div>
                    <span className='text-xs'>Add to Cart</span>
                </button>
            </div>
        </div>
    )
}

export default function HomeFashionStyles() {
    return (
        <div>

        </div>
    )
}