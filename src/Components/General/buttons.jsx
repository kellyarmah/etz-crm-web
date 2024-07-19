import { Link } from "react-router-dom"


export const NotificationIconButton = ({ totalAlerts = 0, onClick }) => {
     return (
    <>
        <div className='px-5 relative h-10'>
        <Link className='text-white absolute top-[5px] left-[4px] hover:text-opacity-50 duration ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
        </Link>
        <span className='bg-[#EA0234]  px-1 text-white rounded-3xl absolute top-0 right-[10px] text-[10px]'>{totalAlerts}</span>
    </div>
    </>)
}


export const UserIconButton = ({profileImage, onClick})=>{
    return (
        <>
           
                <div className='bg-white p-2 rounded-[50px] h-12 w-12'>
                     <Link onClick={onclick}>
                    <img className='h-full w-full' src={`${import.meta.env.BASE_URL}/res/userIcon.png`} alt="" />
                    </Link>
                </div>
        </>
    )
}


export const CreateButton = ({title,onClick})=>{
    return (
        <button onClick={onClick} className='bg-[#125cc9] hover:bg-blue-800 flex font-bold space-x-2 text-white px-8 py-2 pt-3 rounded'> 
            <span>{title}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
        </button>
    )
}

export const AddIconButton = ({onClick})=>{
    return (
        <div onClick={onClick} className='bg-[#125cc9] hover:bg-blue-900 flex items-center font-bold text-white h-7 w-7 p-1 rounded-2xl duration-200'> 
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </span>
        </div>
    )
}

export const ExportButton = ({title,onClick})=>{
    return (
        <button onClick={onClick} className='border border-gray-300 bg-[#0D2E18] hover:border-[#40B97D] flex items-center font-bold space-x-2 text-white px-8 py-2 rounded'> 
            <span>{title}</span>
            <span>
                <img src={`${import.meta.env.BASE_URL}/res/excel.svg`} />
            </span>
        </button>
    )
}


export const SuppendButton = ({title,onClick})=>{
    return (
        <button onClick={onClick} className='border-2 border-[#FF0000] bg-[#611526] hover:bg-blue-800 flex items-center font-bold space-x-2 text-white px-8 py-2 rounded'> 
            <span>{title}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
            </span>
        </button>
    )
}


export const LogsButton = ({title,onClick})=>{
    return (
        <button onClick={onClick} className='bg-[#DF9300] hover:bg-yellow-700 flex items-center font-bold space-x-2 text-white px-8 py-2 rounded'> 
            <span>{title}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>

            </span>
        </button>
    )
}


export const CustomButton = ({title,onClick,style})=>{
    return (
        <button onClick={onClick} className={style}> 
            <span>{title}</span>
        </button>
    )
}