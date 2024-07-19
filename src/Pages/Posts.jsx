import Nav from '../Components/Nav'
import {
    Input,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
const Post = ()=>{
    return(
        <div className='bg-gray-300 p-4'>
            <div className="relative min-h-screen md:flex bg-white rounded-3xl border p-[10px]">
                    <Nav dash={true}/>
                    <main className="border-l rounded-r-2xl w-full px-5 pt-3 bg-gray-50">
                    <div className='rounded-xl p-5 flex justify-between'>
                        <div>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>FYB</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Mentors</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <p className='font-bold lg:text-3xl'>Dashboard</p>
                        </div>
                           <div className='lg:w-4/12 border h-fit rounded-3xl bg-white'>
                                <Input placeholder='Search' size='lg' rounded={'3xl'} />
                           </div>
                        </div>
                    </main>
            </div>
        </div>
    )
}
export default Post