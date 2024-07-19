
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumb, CircularProgress, CircularProgressLabel, Image } from '@chakra-ui/react'
import { CustomButton, NotificationIconButton, UserIconButton } from './buttons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon, EmailIcon } from '@chakra-ui/icons';
import { useAuth } from '../../Pages/Auth/AuthProvider';

const Nav = ({dash=false,reports=false,users=false,proactive=false,tools=false,hide=true, heading='Overview', subtitle,breadcrumb=null,breadcrumbRoute,breadcrumbSub, component})=>{
  let [menuShow, setMenuShow] = useState();
  const navigator = useNavigate();
  const { checkLoginStatus, onLogout } = useAuth();
  let [user, setUser] = useState();
  let [openProfileState, setOpenProfileState] = useState();
  

  useEffect(() => {
    checkLoginStatus().then((value) => {
      console.log('value :>> ', value);
      setUser(value)
   })
   },[])

 
  const onMenuTap = ()=>{
    setMenuShow(true)  //show for small screens
    if(menuShow === true){
      setMenuShow(false) //hide for small screens
    }else{
      setMenuShow(true)
    }
  }
  const backlines = `${import.meta.env.BASE_URL}/icons/lines.svg`;
    return(
        <>
        {/* <!-- mobile view --> */}
        <div className="md:hidden flex justify-between  px-3 text-white bg-[#00203D]">
        
        <Link className="block flex space-x-3  items-center "  >
            <img className="h-14 border border-white mx-auto text-white" src={`${import.meta.env.BASE_URL}/res/logo.png`} alt=""/>
            {/* <p className='mt-1 font-extrabold text-2xl'>{heading}</p> */}
        </Link> 
            <div className="flex"> 
                <button onClick={onMenuTap} className="focus:outline-none border-white focus:border-white mobile-menu-button transition duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center text-white m-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                </button>
            </div> 
        </div> 
        {/* <!-- sidebar --> */}
        <div className={menuShow? "sidebar z-30 md:hidden bg-[#00203D] border border-gray-800 text-white w-72 w-[300px] absolute md:relative inset-y-0 left-0 transform sm:-translate-x-full md:translate-x-0 transition duration-300 ease-in-out": "sidebar rounded-l-lg p-4 hidden bg-white text-white w-72 z-30 w-[300px] absolute md:relative inset-y-0 left-0 transform -translate-x-full md:translate-x-0 transition duration-300 ease-in-out"}>
           {/* <!-- logo --> */}
          <Link className=" block"  >
            <img className="h-14 border border-white mx-auto text-white" src={`${import.meta.env.BASE_URL}/res/logo.png`} alt=""/>
        </Link> 
            {/* <!-- nav --> */}
             <nav className="mt-5 text-black transition duration-300 ease-in-out">
                <Link   className={dash?"py-2 px-5 flex rounded-md mx-2 text-[#00203D] bg-white transition duration-400  mt-3": "flex mt-2 py-2 px-5 rounded-md mx-2  text-white hover:text-[#00203D] hover:bg-white transition duration-400  mt-3"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    <span className="px-4">Dashboard</span>
                </Link>
                <hr className="mx-5"/>
                <Link  to={`/reports`} className={reports?"py-2 px-5 flex rounded-md mx-2 text-[#00203D] bg-white transition duration-400  mt-3" : "flex mt-2 py-2 px-5 rounded-md mx-2  text-white hover:text-[#00203D] hover:bg-white transition duration-400 mt-3"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>

                    <span className="px-4">Manage Reports</span>
                </Link>
                <hr className="mx-5"/>
                <Link  to={`/users`} className={users?"py-2 px-5 flex rounded-md mx-2 text-[#00203D] bg-white transition duration-400  mt-3": "flex mt-2 py-2 px-5 rounded-md mx-2  text-white hover:text-[#00203D] hover:bg-white transition duration-400  mt-3"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>

                    <span className="px-4">Manage Users</span>
                </Link>
                <hr className="mx-5"/>
                <Link  to={`/proactive`} className={proactive?"py-2 px-5 flex rounded-md mx-2 text-[#00203D] bg-white transition duration-400  mt-3": "flex mt-2 py-2 px-5 rounded-md mx-2  text-white hover:text-[#00203D] hover:bg-white transition duration-400  mt-3"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                    </svg>

                    <span className="px-4">Proactiveness</span>
                </Link>
                <hr className="mx-5"/>
               
            <hr className="mx-5" />
            <Menu>
           
              <MenuButton>
                  Actions
                </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
               
            </nav>
        </div>

        {/* <div className='hidden md:block bg-[#00203D] h-80 bg-[url("/icons/lines.svg")] bg-top bg-cover'>  */}
        <div className={`hidden md:block bg-[#00203D] h-80 bg-top bg-cover`} style={{backgroundImage: `url(${backlines})`}}> 
          <nav className='flex justify-between py-4 px-10'>
              <Link className="block flex items-stretch w-fit h-fit"  >
                <img className="h-14 m-auto -mt-2" src={`${import.meta.env.BASE_URL}/res/logo.png`} alt=""/>
            </Link> 
            <div className='flex space-x-5 items-center '>
              {hide ? "" :
                <div className='space-x-5'>
                    <Link className={dash?'text-white': 'text-white text-opacity-50 hover:text-white duration-300 ease-in-out'}>Dashboard</Link>
                    <Link className={reports?'text-white': 'text-white text-opacity-50 hover:text-white duration-300 ease-in-out'}>Manage reports</Link>
                    <Link className={users?'text-white': 'text-white text-opacity-50 hover:text-white duration-300 ease-in-out'}>Manage users</Link>
                    <Link className={proactive?'text-white': 'text-white text-opacity-50 hover:text-white duration-300 ease-in-out'}>Proactiveness</Link>
                </div>
              }
              
                <div className={tools?'text-white flex items-center space-x-1': 'flex items-center space-x-1 text-white text-opacity-50 hover:text-white duration-300 ease-in-out'}>
                  <Menu isLazy>
                    <MenuButton>
                      <span>Tools</span>
                    <ChevronDownIcon />
                    </MenuButton>
                  <MenuList p={0.1} overflow={'hidden'}>
                    <div className="flex justify-between w-full p-2">
                            <p className='font-bold text-black'>Tools</p>
                            <div>
                              <span className='bg-[#E5E4E4] inline-block p-2 text-[#BDBCBC] rounded-md'>
                                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.6939 7.65587L7.72885 4.98887L10.6922 2.32187C11.2622 1.81037 11.2622 0.977873 10.6922 0.466373C10.1222 -0.0496271 9.20052 -0.0481271 8.63052 0.464873L5.66552 3.13187L2.70052 0.461873C2.13052 -0.0511272 1.20719 -0.0481271 0.637187 0.461873C0.0688542 0.974873 0.0688542 1.80737 0.637187 2.31887L3.60385 4.98887L0.643854 7.65137C0.0738542 8.16437 0.0738542 8.99687 0.643854 9.50687C0.928854 9.76487 1.30052 9.89237 1.67385 9.89237C2.04885 9.89237 2.42052 9.76487 2.70552 9.50837L5.66552 6.84437L8.63219 9.51287C8.91719 9.76937 9.28885 9.89687 9.66219 9.89687C10.0355 9.89687 10.4089 9.76787 10.6939 9.51287C11.2639 8.99987 11.2639 8.16887 10.6939 7.65587Z" fill="#BDBCBC"/>
                                  </svg>
                                </span>
                            </div>
                          </div>
                    <MenuItem  onClick={()=> navigator('/tools/fundgate/main')} _hover={{ bg: 'gray.200' }} textColor={'gray.800'} fontWeight={'600'} className='space-x-3'>
                     {/* <EmailIcon color={'#125cc9'}/> */}
                      <span>Fundgate Alert Automation</span>
                    </MenuItem>
                        </MenuList>
                  </Menu>
                  </div>
              
              <Menu isLazy className="z-50">
                    <MenuButton>
                      <NotificationIconButton totalAlerts={2} />
                    </MenuButton>
                    <MenuList p={0.1} overflow={'hidden'} width={'280px'} borderRadius={'12'}>
                          <div className='w-full p-5 bg-white'>
                            <div className="flex justify-between w-full mb-4">
                                <p className='font-bold'>Notifications</p>
                                <div>
                                  <span className='bg-[#E5E4E4] inline-block p-2 text-[#BDBCBC] rounded-md'>
                                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10.6939 7.65587L7.72885 4.98887L10.6922 2.32187C11.2622 1.81037 11.2622 0.977873 10.6922 0.466373C10.1222 -0.0496271 9.20052 -0.0481271 8.63052 0.464873L5.66552 3.13187L2.70052 0.461873C2.13052 -0.0511272 1.20719 -0.0481271 0.637187 0.461873C0.0688542 0.974873 0.0688542 1.80737 0.637187 2.31887L3.60385 4.98887L0.643854 7.65137C0.0738542 8.16437 0.0738542 8.99687 0.643854 9.50687C0.928854 9.76487 1.30052 9.89237 1.67385 9.89237C2.04885 9.89237 2.42052 9.76487 2.70552 9.50837L5.66552 6.84437L8.63219 9.51287C8.91719 9.76937 9.28885 9.89687 9.66219 9.89687C10.0355 9.89687 10.4089 9.76787 10.6939 9.51287C11.2639 8.99987 11.2639 8.16887 10.6939 7.65587Z" fill="#BDBCBC"/>
                                      </svg>
                                   </span>
                                </div>
                          </div>
                       
                      <p className='font-bold text-lg italic text-center mt-3 -rotate-45 p-5 text-gray-400 uppercase'>Coming soon</p>

                      </div>
                    </MenuList>
                </Menu>

                  <Menu isLazy className="z-50">
                    <MenuButton>
                        <UserIconButton profileImage={`${import.meta.env.BASE_URL}/res/userIcon.png`}/>
                    </MenuButton>
                    <MenuList p={0.1} overflow={'hidden'} width={'280px'} borderRadius={'12'}>
                          <div className='w-full p-5'>
                            <div className="flex justify-end w-full mb-4">
                                
                                <div>
                                    <MenuItem className='bg-white hover:bg-white rounded-lg'>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.635 6.89442C13.4638 6.74864 13.2317 6.66675 12.9896 6.66675C12.7476 6.66675 12.5154 6.74864 12.3443 6.89442L9.98371 8.90526L7.62314 6.89442C7.45098 6.75277 7.2204 6.6744 6.98106 6.67617C6.74172 6.67794 6.51278 6.75972 6.34353 6.90389C6.17429 7.04806 6.07829 7.24309 6.07621 7.44697C6.07413 7.65085 6.16613 7.84727 6.33241 7.99393L8.69297 10.0048L6.33241 12.0156C6.16613 12.1623 6.07413 12.3587 6.07621 12.5626C6.07829 12.7665 6.17429 12.9615 6.34353 13.1057C6.51278 13.2498 6.74172 13.3316 6.98106 13.3334C7.2204 13.3352 7.45098 13.2568 7.62314 13.1151L9.98371 11.1043L12.3443 13.1151C12.5164 13.2568 12.747 13.3352 12.9863 13.3334C13.2257 13.3316 13.4546 13.2498 13.6239 13.1057C13.7931 12.9615 13.8891 12.7665 13.8912 12.5626C13.8933 12.3587 13.8013 12.1623 13.635 12.0156L11.2744 10.0048L13.635 7.99393C13.8061 7.84811 13.9023 7.65036 13.9023 7.44417C13.9023 7.23798 13.8061 7.04024 13.635 6.89442Z" fill="#BD0808"/>
                                        <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34871 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35182 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99075 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27288 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7117 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z" fill="#BD0808"/>
                                      </svg>
                                    </MenuItem>
                                </div>
                          </div>
                        <div className='w-fit m-auto text-center'>
                            <img className='h-full w-24' src={`${import.meta.env.BASE_URL}/res/Image.png`} alt="" />
                      </div>
                    <p className='font-bold text-md text-center mt-3'>{ user?.firstName } { user?.lastName }</p>
                      <p className='text-blue-600 font-normal text-md text-center -mt-1'>{ user?.userRole }</p>

                      <div className="flex justify-between mt-5">
                      <CustomButton title="Profile" style="bg-[#00315D] rounded-md text-white hover:bg-blue-700 p-1 px-2 duration-300" />
                      <CustomButton title="Logout" onClick={()=>onLogout()} style="bg-red-800 text-[#EA0334] hover:bg-red-600 rounded-md text-white p-1 px-2 duration-300"/> 
                      </div>
                      </div>
                    </MenuList>
                </Menu>
            
              
                  
              </div>
          </nav>
         <div className=''>
            <img className='py-1 px-10 m-auto w-full' src={`${import.meta.env.BASE_URL}/res/line.svg`} alt="" />
         </div>
         
        <div className='py-2 px-10'>
                  {breadcrumb !=null ? 
                    <div className='text-white flex mt-2 mb-5'>
                      <Link className='text-white text-opacity-50 hover:opacity-100 hover:text-white hover:underline  duration-300 ' to={breadcrumbRoute}><span className=''> {breadcrumb}</span></Link>
                      <span className='inline-block align-baseline pt-1 text-white  text-opacity-50'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 font-bold">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                      <span className='text-white'>{breadcrumbSub}</span>
                    </div> : ""
                  }
          <div className="flex justify-between">
              <div className='text-white'>
                  <p className=' font-extrabold text-2xl lg:text-3xl'>{heading}</p>
                  <div className='text-white text-opacity-50 mt-2'>{subtitle} 
              </div>
              </div>
                <div>
                  {component}
                </div>
          </div>
        </div>

        </div>
        <div className='md:hidden bg-[#00203D] py-4 bg-cover bg-center' style={{backgroundImage: `url(${backlines})`}}>
            <div className="flex flex-wrap justify-between py-2 px-10">
              <div className='text-white'>
                  <p className=' font-extrabold text-2xl lg:text-3xl'>{heading}</p>
                  <div className='text-white text-opacity-50 mt-2'>{subtitle}</div>
                </div>
                <div>
                  {component}
                </div>
          </div>
        </div>
        </>
    )
}

export default Nav;