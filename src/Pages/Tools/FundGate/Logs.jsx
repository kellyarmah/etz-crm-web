import Nav from "../../../Components/General/Nav"
import Main from '../../../Components/General/Main'
import Card from '../../../Components/Dashboard/Card'
import { CreateButton, LogsButton } from '../../../Components/General/buttons'
import { SearchInputDark } from '../../../Components/General/searchInput'
import Table from '../../../Components/Tools/FundGate/LogsTable'
import AddMerchant from "../../../Components/Tools/FundGate/AddMerchant"
import { Export, downloadCSV } from "../../../Components/General/Export"
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { apiLogs } from "../../../Services/FundgateMerchant"

const data = [
    {
      id: 1,
      author: '@Amabel',
      action: 'NEW_MERCHANT',
      status: 'SUCCESS',
      date: "24-05-2024",
      time: "10:00 AM",
      details: "Merchant FNB added successfully",
    },
    {
        id: 1,
        author: '@SYSTEM',
        action: 'EMAIL',
        status: 'SUCCESS',
        date: "24-05-2024",
        time: "10:00 AM",
        details: "Email alert sent to FNB, current balance - GHS 1000",
    },
    {
        id: 1,
        author: '@Amabel',
        action: 'MERCHANT_STATUS_ACTIVE',
        status: 'SUCCESS',
        date: "24-05-2024",
        time: "10:00 AM",
        details: "Merchant FNB is active",
    },
    {
        id: 1,
        author: '@Amabel',
        action: 'MERCHANT_STATUS_INACTIVE',
        status: 'SUCCESS',
        date: "24-05-2024",
        time: "10:00 AM",
        details: "Merchant FNB is inactive",
    },
]


const Logs = () => {
    let [logs, setLogs] = useState([]);
    let [refresh, setRefresh] = useState(false);
    const getLogs = async () => { 
        await apiLogs().then((response) => {
            if (response.status) {
                setLogs(response.response.response);
                console.log('response.logs :>> ', response.response.response);
            }
        }).catch((error) => {
            console.log('error :>> ', error);
        })
    }
    useEffect(() => {
        console.log("Fundgate Logs List")
        getLogs()
    },[refresh])

    return <div>
        <div className="relative bg-[#f5f6fa]">
            <Nav
                
                tools={true}
                heading='Fundgate Logs'
                subtitle={
                    <div>
                        <p>Fundgate automation logs </p>
                    </div>}
                breadcrumb={'Fundgate Automation'}
                breadcrumbRoute = {'/tools/fundgate/main'}
                breadcrumbSub={"Fundgate Automation Logs"}
                component={<div className="flex flex-wrap space-x-3">
                    {/* <AddMerchant onCloseModal={(value) => { setRefresh(!refresh); console.log('onclose value :>> ', value);}} /> */}
                    
                </div>} />

            <Main main={
            <div className='h-fit p-1 mt-2'>
                <div className=''>
                   
                </div>

                <div>
                   <div className="flex justify-between items-end my-2">
                        <div>
                            {/* <Export onExport={() => downloadCSV(merchants)} /> */}
                        </div>
                        <div className='w-[250px] bg-whitel rounded-md'>
                            <SearchInputDark title={'Search reports'} />
                        </div>
                   </div>
                   <div className='border rounded-xl shadow overflow-hidden mt-5'>
                        <Table data={logs} title={'Fundgate Merchants'} />
                   </div>
                </div>
                <div className='h-12'>

                </div>
            </div>} />
        </div>
        </div>
}
export default Logs
