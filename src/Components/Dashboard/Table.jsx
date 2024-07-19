import DataTable from 'react-data-table-component';
import React from 'react';
import { BorderAllRounded } from '@mui/icons-material';

const columns = [
	{
		name: 'ID',
		selector: row => row.id,
		sortable: true,
	},
	{
		name: 'EMAIL/PHONE',
		selector: row => row.emailPhone,
		sortable: true,
	},
    {
		name: 'CREATED BY',
		selector: row => row.createdBy,
		sortable: true,
	},
    {
		name: 'PAYMENT CHANNEL',
		selector: row => row.paymentChannel,
		sortable: true,
	},
    {
		name: 'ISSUE TYPE',
		selector: row => row.issueType,
		sortable: true,
	},
    {
		name: 'ACTION TAKEN',
		selector: row => row.actionTaken,
		sortable: true,
	},
    {
		name: 'DATE',
		selector: row => row.date,
		sortable: true,
	},
    {
		name: 'TIME',
		selector: row => row.time,
		sortable: true,
	},
    {
		name: 'STATUS',
		selector: row => row.status,
		sortable: true,
        center: true,
        conditionalCellStyles: [
			{
				when: row => row.status == "Resolved",
				style: {
					backgroundColor: '#B9E0DA',
					color: '#00B69B',
                    height: "fit-content",
                    fontWeight: "bold",
                    padding: "7px 5px",
                    margin:"auto 5px",
                    textAlign: "right",
                    borderRadius: "5px",
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
            {
				when: row => row.status == "Pending",
				style: {
					backgroundColor: '#FCE7D4',
					color: '#EF9037',
                    height: "fit-content",
                    fontWeight: "bold",
                    padding: "7px 5px",
                    margin:"auto 5px",
                    textAlign: "right",
                    borderRadius: "5px",
					'&:hover': {
						cursor: 'pointer',
					},
				},
			},
            {
				when: row => row.status == "Rejected",
				style: {
					backgroundColor: '#FBC7D2',
					color: '#EA0234',
                    height: "fit-content",
                    fontWeight: "bold",
                    padding: "7px 5px",
                    margin:"auto 5px",
                    textAlign: "right",
                    borderRadius: "5px",
					'&:hover': {
						cursor: 'pointer',
					},
				},
			}
        ]
       
	},
];

const data = [
  	{
        id: 1,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Pending"
	},
	{
        id: 2,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Rejected"
	},
    {
        id: 3,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 4,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 5,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 6,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 7,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 8,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 9,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 10,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 11,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 12,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
    {
        id: 13,
		emailPhone: 'johnmanu@gmail.com',
		createdBy: '@john',
        paymentChannel: 'Pay fluid',
        issueType: "Airtime",
        actionTaken: "Reversed",
        date: "12/02/2023",
        time: " 12:00 PM",
        status: "Resolved"
	},
]

function MyComponent() {
    // const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);

    // DataTableOne = styled.DataTable({
    //     background: '#BF4F74',
    //     height: '50px',
    //     width: '50px'
    //   });

    const customStyles = {
        rows: {
            style: {
               
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                backgroundColor: '#00203D',
                color: "white",
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
        
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Select Page',
        rangeSeparatorText: 'for',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Reports',
    };

	return (
		<DataTable
        style={{
            color:'red'
        }}
			columns={columns}
			data={data}
            selectableRows
            pagination
            paginationComponentOptions={paginationComponentOptions}
            customStyles={customStyles}
            // actions={actionsMemo}
		/>
	);
};

export default MyComponent