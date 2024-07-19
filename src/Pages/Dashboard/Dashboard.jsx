import Nav from '../../Components/General/Nav'
import Main from '../../Components/General/Main'
import Card from '../../Components/Dashboard/Card'
import { CreateButton, SuppendButton } from '../../Components/General/buttons'
import { SearchInput } from '../../Components/General/searchInput'
import ReportTable from '../../Components/Dashboard/Table'
const Dashboard = ()=>(
    <div>
        <div className="relative bg-[#f5f6fa]">
            <Nav
                dash={true}
                heading='Overview'
                subtitle={'As of 11th April 2024, 4:33 AM '}
                component={<div>
                    <CreateButton title={'Create ticket'} />
                </div>} />

            <Main main={
            <div className='h-fit'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-3 py-3'>
                    <Card heading={'Resolved Issues'} number={54} />
                    <Card heading={'Pending Issues'} number={5} />
                    <Card heading={'Proactiveness'} number={4} />
                </div>

                <div>
                   <div className="flex justify-between items-end my-2">
                        <div>
                            <p className='text-[#00203D] font-bold'>Recent reports</p>
                        </div>
                        <div className='w-[250px] bg-white'>
                            <SearchInput title={'Search reports'} />
                        </div>
                   </div>
                   <div className='border rounded-xl shadow'>
                        <ReportTable />
                   </div>
                </div>
                <div className='h-12'>

                </div>
            </div>} />
        </div>
    </div>
)
export default Dashboard
