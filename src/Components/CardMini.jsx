
const Card = ({icon,leading, trailing})=>{
    return (
        <div className='bg-white rounded-xl p-4 border'>
        <div className='flex space-x-1'>
             {icon}
            <div className=''>
                 <p className='text-[30px] font-medium -mt-3 text-gray-700'>{leading}</p>
                 <p className='font-medium text-gray-500 -mt-4 text-left pl-1'>{trailing}</p>
            </div>
        </div>
       
       
     </div>
    )
}

export default Card;