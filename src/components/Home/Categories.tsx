// import Image from "next/image";
import Ico from '../../lib/Ico'
import './CSS/Categories.scss'

function CategoryContainer({ Text }: { Text: string }) {
    return (
        <div className='CategoryContainer flex flex-col items-center gap-2 text-xs text-white min-h-[32vh] min-w-[12vw]'>
            <div className='bg-white rounded-md overflow-hidden'>
                <img className='h-38 w-full' src='/vercel.svg' alt={Text} />
            </div>
            {Text}
        </div>
    )
}

export default function HomeCategories() {
    return (
        <div className='FashionCategories w-screen min-h-[66vh] flex justify-center items-center'>
            <section className='flex flex-col gap-4 items-center justify-center w-[75%]'>
                <div className='flex items-center justify-center w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='font-bold text-2xl'>BEST FOR YOUR CATEGORIES</h3>
                            <p className='opacity-50 text-xs'>28 categories belonging to a total of 15,382 products</p>
                        </div>
                        <div className='Buttons flex gap-2'>
                            <div>
                                <Ico name='LeftButton' />
                            </div>
                            <div>
                                <Ico name='RightButton' />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='w-full' />
                <div className='flex gap-5'>
                    <CategoryContainer Text='WOMEN WEAR' />
                    <CategoryContainer Text='SHOES COLLECTION' />
                    <CategoryContainer Text='BAG COLLECTION' />
                    <CategoryContainer Text='WATCHES' />
                    <CategoryContainer Text='ACCESSORIES' />
                    <CategoryContainer Text='SUNGLASSES' />
                </div>
            </section>
        </div>
    )
}