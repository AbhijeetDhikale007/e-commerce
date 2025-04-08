// import Image from "next/image";
import Ico from '../../lib/Ico'
import './CSS/FashionStyles.scss'

function FashionStylesContainer({ Text, Title, Prize }: { Text: string, Title: string, Prize: string }) {
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

export default function HomeFashionStyles() {
    return (
        <div className='HomeFashionStyles py-[2vh] w-screen min-h-[66vh] flex justify-center items-center'>
            <section className='flex flex-col gap-4 items-center justify-center w-[75%]'>
                <div className='flex items-center justify-center w-full'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col items-start gap-2'>
                            <h3 className='font-bold text-2xl'>GET YOUR FASHION STYLE</h3>
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
                <div className='flex gap-4'>
                    <FashionStylesContainer Text='LEVIS COTTON' Title='Monica Diara Party Dress' Prize='$893.00' />
                    <FashionStylesContainer Text='LEVIS COTTON' Title='Onima Black Flower Sandal' Prize='$893.00' />
                    <FashionStylesContainer Text='LEVIS COTTON' Title='Poncho Sweater International' Prize='$893.00' />
                    <FashionStylesContainer Text='LEVIS COTTON' Title='Dvalo Office Cotton Suite' Prize='$893.00' />
                </div>
            </section>
        </div>
    )
}