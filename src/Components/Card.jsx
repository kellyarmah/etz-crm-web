
const Card = ({icon,leading, trailing})=>{
    return (
        <div className='bg-white rounded-xl p-4 border flex justify-between shadow'>
        <div className='flex space-x-1'>
             {icon}
            <div className=''>
                 <p className='text-[60px] font-medium -mt-6 text-gray-700'>{leading}</p>
                 <p className='font-medium text-gray-500 -mt-4 pl-1'>{trailing}</p>
            </div>
        </div>
        <div>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 rotate-90">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
             </svg>

        </div>
       
     </div>
    )
}

export default Card;