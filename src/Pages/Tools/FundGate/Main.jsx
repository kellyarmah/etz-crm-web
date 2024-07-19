import Nav from "../../../Components/General/Nav"
import Main from '../../../Components/General/Main'
import Card from '../../../Components/Dashboard/Card'
import { CreateButton, LogsButton } from '../../../Components/General/buttons'
import { SearchInputDark } from '../../../Components/General/searchInput'
import Table from '../../../Components/Tools/FundGate/Table'
import AddMerchant from "../../../Components/Tools/FundGate/AddMerchant"
import { Export, downloadCSV } from "../../../Components/General/Export"
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { enrolledMerchants } from "../../../Services/FundgateMerchant"
import { useNavigate } from "react-router-dom"

const data = [
    {
      id: 1,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Healthy Balance"
  },
  {
      id: 2,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Low Balance"
  },
  {
      id: 3,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Critical Balance"
  },
  {
      id: 4,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Low Balance"
  },
  {
      id: 5,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Healthy Balance"
  },
  {
      id: 6,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Critical Balance"
  },
  {
      id: 7,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Low Balance"
  },
  {
      id: 8,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Low Balance"
  },
  {
      id: 9,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Healthy Balance"
  },
  {
      id: 10,
      email: 'johnmanu@gmail.com',
      merchantName: 'Fundgate test',
      balance: '23000',
      highThreshold: "1200",
      lowerThreshold: "1000",
      frequency: "12hr",
      status: "Critical Balance"
  }
]


const FundGateMain = () => {
    const navigator = useNavigate();

    let [merchants, setMerchants] = useState([]);
    let [refresh, setRefresh] = useState(false);
    const getEnrolledMerchant = async () => { 
        await enrolledMerchants().then((response) => {
            if (response.status) {
                setMerchants(response.response.response);
                console.log('Main response.data :>> ', response.response.response);
            }
        }).catch((error) => {
            console.log('error :>> ', error);
        })
    }
    useEffect(() => {
        console.log("Enrolled Fundgate Merchant List")
        getEnrolledMerchant()
    },[refresh])

    return <div>
        <div className="relative bg-[#f5f6fa]">
            <Nav
                
                tools={true}
                heading='Fundgate Automation'
                subtitle={
                    <div>
                        <p>View and manage all fundgate automation </p>
                    </div>}
                breadcrumb={'Tools'}
                breadcrumbSub={"Fundgate Automation"}
                component={<div className="flex flex-wrap md:space-x-3 md:space-y-0 space-y-2">
                    <AddMerchant onCloseModal={(value) => { setRefresh(!refresh); console.log('onclose value :>> ', value);}} />
                    <LogsButton title={'Logs'} onClick={()=>navigator('/tools/fundgate/logs')} />
                </div>} />

            <Main main={
            <div className='h-fit p-1 mt-2'>
                <div className=''>
                   
                </div>

                <div>
                   <div className="flex justify-between items-end my-2">
                        <div>
                            <Export onExport={() => downloadCSV(merchants)} />
                        </div>
                        <div className='w-[250px] bg-whitel rounded-md'>
                            <SearchInputDark title={'Search reports'} />
                        </div>
                   </div>
                   <div className='border rounded-xl shadow overflow-hidden mt-5'>
                        <Table data={merchants} title={'Fundgate Merchants'} refresh={(value)=>{setRefresh(!refresh)}}/>
                   </div>
                </div>
                <div className='h-12'>

                </div>
            </div>} />
        </div>
        </div>
}
export default FundGateMain
