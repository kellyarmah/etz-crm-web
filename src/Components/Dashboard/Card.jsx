const Card = ({heading, number, image="/card1.svg"})=>{
    return (
        <div className='grid grid-cols-5 gap-1 bg-white rounded-xl shadow text-gray-600'>
        <div className='col-span-3 px-7 py-5'>
            <p className='md:text-xl font-semibold'>{heading}</p>
            <p className='md:text-[70px] text-3xl font-bold mt-10'>{number}</p>
        </div>
        <div className='col-span-2'>
            <img className='h-full' src={image} alt="" />
        </div>
    </div>
    )
}

export default Card;