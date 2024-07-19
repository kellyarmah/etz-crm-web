import DataTable from 'react-data-table-component';
import React, { useState , useEffect} from 'react';
import { Export, downloadCSV } from '../../General/Export';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Input,
    Spinner
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
  Select,
  useToast
  } from '@chakra-ui/react'
import { deleteMerchant } from '../../../Services/FundgateMerchant';
import { Field, Form, Formik } from 'formik';
import { maxWidth } from '@mui/system';


function MyComponent({data,title}) {
    const columns = [
       
        {
            name: 'AUTHOR',
            selector: row => row.author,
            sortable: true,
            // maxWidth: '50px',
            
        },
        {
            name: 'ACTION',
            selector: row => row.action,
            sortable: true,
            // maxWidth: '50px'
        },
        {
            name: 'DETAILS',
            selector: row => row.details,
            sortable: true,
            // minWidth: '50px',
        },
        {
            name: 'DATE',
            selector: row => new Date(row.timestamp).toDateString(),
            sortable: true,
            // maxWidth: '200px',
        },
        {
            name: 'TIME',
            selector: row => new Date(row.timestamp).toLocaleTimeString(),
            sortable: true,
            // maxWidth: '35px',
        },
        {
            name: 'STATUS',
            selector: row => row.status,
            sortable: true,
            center: true,
            maxWidth: '30px',
            conditionalCellStyles: [
                {
                    when: row => row.status == "SUCCESS",
                    style: {
                        backgroundColor: '#B9E0DA',
                        color: '#00B69B',
                        height: "fit-content",
                        fontWeight: "bold",
                        padding: "7px 5px",
                        margin: "auto 5px",
                        textAlign: "center",
                        borderRadius: "5px",
                        // maxWidth: '20px',

                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                },
                {
                    when: row => row.status == "FAILED",
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
                   
                },
                {
                    when: row => row.status == "PENDING",
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
        // {
        //     name: 'ACTION',
        //     Width:'100px',
        //     center: true,
        //     cell: (row) => <Button 
        //     bg='#125cc9'
        //     color={'white'}
        //     _hover={{bg:'#1D19B8'}}
        //     rounded={'3px'}
        //         px={'10px'}
        //         py={'0px'}
        //         w={'fit'}
        //         size={'sm'}
        //     mx={'auto'}
        //         onClick={() => onViewClicked(row._id)}
        //     >View</Button>,
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true
        // },
    ];

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (data.length == 0) { 
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
        console.log('here data :>> ', data);
    },[data])


   
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
        <>
            {!isLoading ?
                <div>
                <DataTable
                style={{
                    color:'red'
                }}
                    columns={columns}
                    data={data.map((value,index,array)=> array[array.length -1 -index])}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    customStyles={customStyles}
                    />
                    </div>
                : 
                <div className='text-center py-10'>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                            size='xl'
                    />
                </div>
                }
            </>
	);
};

export default MyComponent