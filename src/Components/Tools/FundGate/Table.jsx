import DataTable from 'react-data-table-component';
import React, { useState , useEffect} from 'react';
import { Export, downloadCSV } from '../../General/Export';
import { updateMerchants } from '../../../Services/FundgateMerchant';
import {
    Divider,
    Input,
    Spinner
} from '@chakra-ui/react'
import {
    Modal,ModalOverlay,ModalContent,
    ModalHeader, ModalFooter, ModalBody,ModalCloseButton,
    useDisclosure,FormControl,FormLabel,FormErrorMessage,
    Button,Select,useToast,Switch,
    Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody, 
  PopoverArrow,
  PopoverCloseButton,
  Fade, ScaleFade, Slide, SlideFade, Collapse, Box
  } from '@chakra-ui/react'
import { deleteMerchant } from '../../../Services/FundgateMerchant';
import { Field, Form, Formik } from 'formik'; 
import { AddIconButton } from '../../General/buttons';
 
function MyComponent({data,title,refresh}) {
    const columns = [
        {
            name: 'EMAIL',
            selector: row => <div>
                    <Popover>
                        <PopoverTrigger>
                            <p className='cursor-pointer overflow-hidden hover:underlinel hover:bg-gray-200 p-1 px-2 m-1 rounded duration-200'>{row.email}</p>
                        </PopoverTrigger>
                        <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                            <PopoverHeader pt={2} fontWeight='extrabold' className='text-lg' border={0}>
                            Merchant Emails
                            <Divider orientation='horizontal' className='text-gray-500' />
                            </PopoverHeader>
                            <PopoverArrow bg='blue.800' />
                            <PopoverCloseButton />
                            <PopoverBody className='flex flex-wrap space-y-1 max-h-56 overflow-auto'>
                                {row.email.split(',').map((value,index)=>{
                                    return  <p key={index} className='w-fit h-fit bg-gray-800 p-1 rounded mx-1'> {value} </p>
                                })}
                            </PopoverBody>
                        
                        </PopoverContent>
                    </Popover>
                    </div>,
            sortable: true,
            maxWidth: '180px',
        },
        {
            name: 'MERCHANT NAME',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'BALANCE',
            selector: row => 'GHS '+row.balance,
            sortable: true,
        },
        {
            name: 'LOWER LIMIT',
            selector: row => 'GHS '+row.lowerTreshold,
            sortable: true,
        },
        {
            name: 'FREQUENCY',
            selector: row => row.frequency,
            sortable: true,
            // Width: '50px',
            bg:'#000'
        },
        {
            name: 'STATUS',
            selector: row => row.status,
            sortable: true,
            center: true,
            maxWidth: '30px',
            conditionalCellStyles: [
                {
                    when: row => row.status == "ACTIVE",
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
                    when: row => row.status == "INACTIVE",
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
        
        {
            name: 'ACTION',
            Width:'100px',
            center: true,
            cell: (row) => <div className='space-x-2'>
                <Button 
            bg='#125cc9'
            color={'#125cc9'}
            _hover={{bg:'#599bff'}}
            rounded={'5px'}
                px={'1px'}
                py={'0px'}
                w={'fit'}
                size={'sm'}
            mx={'auto'}
                onClick={() => onViewClicked(row._id)}
                >
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.74998 11.872L1 13.3688L2.49674 9.61881M4.74998 11.872L4.45019 9.91814L2.49674 9.61881M4.74998 11.872L8.56225 8.05978M2.49674 9.61881L10.2893 1.82626M12.5425 4.0795L10.2893 1.82626M12.5425 4.0795L13.2422 3.37986C13.8644 2.75765 13.8644 1.74884 13.2422 1.12662V1.12662C12.62 0.504405 11.6111 0.504405 10.9889 1.12662L10.2893 1.82626M12.5425 4.0795L10.5524 6.06964" stroke="white" strokeWidth="1.05543" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
                
                <Button 
            bg='#fcdfdf'
            color={'white'}
            _hover={{bg:'#fac7d2'}}
            rounded={'5px'}
                px={'10px'}
                py={'0px'}
                w={'fit'}
                size={'sm'}
            mx={'auto'}
                onClick={() => onDeleteClicked(row._id)}
                >
                    <svg width="13" height="14" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.85245 1.71969H7.40811C7.18519 0.719511 6.2317 0.00128977 5.12509 0H4.19325C3.08664 0.00128977 2.13315 0.719511 1.91025 1.71969H0.465911C0.208593 1.71969 0 1.91217 0 2.14961C0 2.38705 0.208593 2.57954 0.465911 2.57954H0.931823V8.16855C0.933373 9.35516 1.97547 10.3168 3.26142 10.3182H6.05694C7.34289 10.3168 8.38499 9.35516 8.38654 8.16855V2.57954H8.85245C9.10977 2.57954 9.31836 2.38707 9.31836 2.14963C9.31836 1.91219 9.10977 1.71969 8.85245 1.71969ZM4.19327 7.30871C4.19327 7.54615 3.98467 7.73863 3.72736 7.73863C3.47002 7.73863 3.26142 7.54615 3.26142 7.30871V4.72917C3.26142 4.49173 3.47002 4.29925 3.72733 4.29925C3.98465 4.29925 4.19325 4.49173 4.19325 4.72917V7.30871H4.19327ZM6.05694 7.30871C6.05694 7.54615 5.84834 7.73863 5.59102 7.73863C5.33371 7.73863 5.12511 7.54615 5.12511 7.30871V4.72917C5.12511 4.49173 5.33371 4.29925 5.59102 4.29925C5.84834 4.29925 6.05694 4.49173 6.05694 4.72917V7.30871ZM2.87518 1.71969C3.07336 1.20477 3.6011 0.8605 4.19327 0.859835H5.12511C5.71728 0.8605 6.24502 1.20477 6.4432 1.71969H2.87518Z" fill="#CB0101"/>
                    </svg>
                </Button>
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true
        },
        // DeleteIcon
    ];

    let [loadingDelete, setLoadingDelete] = useState(false)
    let [merchantStatus, setMerchantStatus] = useState(false)
    let [emails, setEmails] = useState([])
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => { 
        if (data == null) { 
            setIsLoading(true)
        } 
        if (data.length == 0) { 
            setIsLoading(false)
        } else {
            setIsLoading(false)
        } 
    },[data])
   

    let [selectedMerchant, setSelectedMerchant] = useState({})
    let [selectedMerchantToDelete, setSelectedMerchantToDelete] = useState(null)
    const onViewClicked = (id) => { 
        console.log(id)
        setEmails(null)
        let selectMerchant = data.filter((value) => { 
            if (value._id == id) {
                return value;
            }
        })
        console.log('selectMerchant :>> ', selectMerchant);
        setMerchantStatus(selectMerchant[0].status)
        setSelectedMerchant(selectMerchant[0])
        setEmails(selectMerchant[0].email)
            onOpen() 
            setOverlay(<Overlay />)
    }

    const deleteSingleMerchant = async () => { 
        await deleteMerchant().then((response) => {
            if (response.status) {
                setMerchants(response.response);
                console.log('response.data :>> ', response.response);
            }
        }).catch((error) => {
            console.log('error :>> ', error);
        })
    }

    const onDeleteClicked = (id) => { 
        console.log(id)
        setSelectedMerchantToDelete(id)
        deleteModal.onOpen()
            setOverlay(<Overlay />)
    }
    const onSubmitDelete = async () => { 
        setLoadingDelete(true)
        // deleting merchant
        console.log('selectedMerchantToDelete', selectedMerchantToDelete)
        if (selectedMerchantToDelete != null) {
            await deleteMerchant(selectedMerchantToDelete).then((response) => {
                if (response.status) {
                    refresh(true)
                    toast({
                        title: 'Merchant successfully deleted',
                        position: 'top-right',
                        status: 'success',
                        isClosable: true,
                      })
                }
            }).catch((error) => {
                console.log('error :>> ', error);
                toast({
                    title: 'Merchant failed to deleted',
                    position: 'top-right',
                    status: 'error',
                    isClosable: true,
                  })
            })

            setLoadingDelete(false)
            setSelectedMerchantToDelete(null)
            deleteModal.onClose()
        }
    }

    const customStyles = {
        rows: {
            style: { 
                minHeight: '72px', // override the row height
            },
        },
        headCells:{
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

    const validateEmail = (value)=>{
        let error
        if (!value && !emails) {
          error = 'Email is required'
        }
        return error
      }
      const validateLowerThreshold = (value)=>{
        let error
        if (!value) {
          error = 'Lower Threshold is required'
        }
        return error
      }

      const validateFrequency = (value)=>{
        let error
        if (!value) error = "Frequency is required"
        return error
      }
    
    
      const UpdateMerchant = async (data,actions) => { 
        // let localMerchant = JSON.parse(data.merchant)
          let localFrequency = JSON.parse(data.frequency)
          
        let payload = {
            "name": data.merchant,
            "email": emails,
            "lowerTreshold": data.lowerThreshold,
            "higherTreshold": '0',
            "frequency": localFrequency.name,
            "timestampWorth": (localFrequency.value).toString(),
            "status": merchantStatus
        }
        console.log('payload :>> ', payload,data.frequency);
          
        
        await updateMerchants(payload,data.id).then((response) => {
            if (response.status) {
              toast({
                title: 'Merchant Updated Successfully',
                position: 'top-right',
                status: 'success',
                isClosable: true,
              })
                refresh(true)
            } else {
              console.log('11error response.message :>> ', response.message.message);
              toast({
                title: response.message.message,
                position: 'top-right',
                status: 'warning',
                isClosable: true,
              })
            }
        }).catch((error) => {
          console.log('error :>> ', error);
          toast({
            title: "Failed to update merchant, Try again",
            position: 'top-right',
            status: 'error',
            isClosable: true,
          })
        })
        actions.setSubmitting(false)
        // onCloseModal(true)
        onClose()
      }
    


    const paginationComponentOptions = {
        rowsPerPageText: 'Select Page',
        rangeSeparatorText: 'for',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Reports',
    };

    const Overlay = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
        //   backdropFilter='blur(10px) hue-rotate(9deg)'
          backdropInvert='10%'
          backdropBlur='2px'
        />
      )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const deleteModal = useDisclosure()
    const [overlay, setOverlay] = useState(<Overlay />)

    return (
        <>
            {!isLoading ?
                <div>
                <DataTable
                style={{
                    color:'red',
                }}
                    columns={columns}
                    data={data}
                    // selectableRows
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    customStyles={customStyles}
                    />
                    <Modal isOpen={isOpen} onClose={onClose}>
                {overlay}
                
                <ModalContent>
                    <ModalHeader className='text-center'>Edit Merchant</ModalHeader>
                            <ModalCloseButton />
                            <div>
                            <Formik
                        initialValues={{ id: selectedMerchant._id, merchant: selectedMerchant.name, email: '',lowerThreshold:selectedMerchant.lowerTreshold, frequency:JSON.stringify({'name':selectedMerchant.frequency, 'value':selectedMerchant.timestampWorth})}}
                        onSubmit={(values, actions) => {
                        console.log('Hello')
                                setTimeout(() => {
                                    UpdateMerchant(values,actions)
                                    // alert(JSON.stringify(values, null, 2))
                                
                                    }, 1000)
                                }}
                                >
                                {(props) => (
                                    <Form className='space-y-5 mt-2'>
                                            <ModalBody className='space-y-5'>

                                            <Field name='merchant'>
                                            {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.merchant && form.touched.merchant}>
                                                <FormLabel>Merchant</FormLabel>
                                                <Input  {...field} disabled value={field.value} placeholder='0.00' size='lg' className='-my-2'/>
                                                <FormErrorMessage>{form.errors.merchant}</FormErrorMessage>
                                            </FormControl>
                                            )}
                                                </Field>
                                                
                                    <Field name='email' validate={validateEmail}>
                                        {({ field, form }) => (
                                        <div className='flex space-x-2 items-center'>
                                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                <FormLabel>Email</FormLabel>
                                                <Input  {...field} value={field.value} placeholder='Email' size='lg' className='-my-2' />
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                            </FormControl>
                                            
                                            <div className='mt-[30px]'>
                                            <AddIconButton title={''}
                                                onClick={()=>{
                                                    // ADD EMAIL TO LIST
                                                    let emailList = emails.split(',')
                                                    console.log(emailList,'email.list',field.value)
                                                   
                                                    let isExist = emailList.findIndex(
                                                        function checkAge(value) {
                                                        return value == field.value;
                                                      })
                                                      if(isExist == -1){
                                                        emailList.push(field.value)
                                                        setEmails(emailList.join(','))
                                                        console.log(emails,'new', isExist)
                                                      }
                                                }}
                                                />
                                            </div>
                                         </div>
                                        )}
                                    </Field>

                                    <div className='bg-gray-50 border flex flex-wrap rounded p-3 '>
                                           {emails.split(',').map((single,index)=>{
                                            return  <Box key={index}
                                            // p='3px'
                                            // px={'4px'}
                                            m='6px'
                                            color='black'
                                            className='w-fit'
                                            position={'relative'}
                                            bg='gray.200'
                                            rounded='sm'
                                            shadow='md'>
                                            {single!==''?
                                            <div className='p-[3px] px-[4px] rounded'>{single}
                                                <span onClick={()=>{
                                                    // DELETE EMAIL
                                                    let emailList = emails.split(',') 

                                                    const index = emailList.indexOf(single);
                                                    console.log('index',index)
                                                    const x = emailList.splice(index, 1);

                                                    console.log(`myArray values: ${emailList}`);
                                                    console.log(`variable x value: ${x}`); 

                                                    console.log(emailList.join(','))
                                                    setEmails(emailList.join(','))

                                                }} className='absolute -top-3 -right-3 bg-white px-[5px] py-[4px] border  border-gray-200 text-sm rounded-2xl inline-block text-white hover:bg-[#fac7d2] hover:border-[#fac7d2] duration-200 cursor-pointer'>
                                                    <svg width="16" height="17" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.85245 1.71969H7.40811C7.18519 0.719511 6.2317 0.00128977 5.12509 0H4.19325C3.08664 0.00128977 2.13315 0.719511 1.91025 1.71969H0.465911C0.208593 1.71969 0 1.91217 0 2.14961C0 2.38705 0.208593 2.57954 0.465911 2.57954H0.931823V8.16855C0.933373 9.35516 1.97547 10.3168 3.26142 10.3182H6.05694C7.34289 10.3168 8.38499 9.35516 8.38654 8.16855V2.57954H8.85245C9.10977 2.57954 9.31836 2.38707 9.31836 2.14963C9.31836 1.91219 9.10977 1.71969 8.85245 1.71969ZM4.19327 7.30871C4.19327 7.54615 3.98467 7.73863 3.72736 7.73863C3.47002 7.73863 3.26142 7.54615 3.26142 7.30871V4.72917C3.26142 4.49173 3.47002 4.29925 3.72733 4.29925C3.98465 4.29925 4.19325 4.49173 4.19325 4.72917V7.30871H4.19327ZM6.05694 7.30871C6.05694 7.54615 5.84834 7.73863 5.59102 7.73863C5.33371 7.73863 5.12511 7.54615 5.12511 7.30871V4.72917C5.12511 4.49173 5.33371 4.29925 5.59102 4.29925C5.84834 4.29925 6.05694 4.49173 6.05694 4.72917V7.30871ZM2.87518 1.71969C3.07336 1.20477 3.6011 0.8605 4.19327 0.859835H5.12511C5.71728 0.8605 6.24502 1.20477 6.4432 1.71969H2.87518Z" fill="#CB0101"/>
                                                    </svg>
                                                </span> 
                                            </div>
                                            : <span></span>}
                                            </Box>
                                           })}
                                    </div>
                                    <div className='flex basis-12 space-x-2 my-2'>
                                        <Field name='lowerThreshold' validate={validateLowerThreshold}>
                                            {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.lowerThreshold && form.touched.lowerThreshold}>
                                                <FormLabel>Lower Limit</FormLabel>
                                                <Input  {...field} placeholder='0.00' size='lg' className='-my-2'/>
                                                <FormErrorMessage>{form.errors.lowerThreshold}</FormErrorMessage>
                                            </FormControl>
                                            )}
                                        </Field>
                                        {/* <Field name='higherThreshold' validate={validateHigherThreshold}>
                                            {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.higherThreshold && form.touched.higherThreshold}>
                                                <FormLabel>Higher Threshold</FormLabel>
                                                <Input  {...field} placeholder='0.00' size='lg' className='-my-2'/>
                                                <FormErrorMessage>{form.errors.higherThreshold}</FormErrorMessage>
                                            </FormControl>
                                            )}
                                        </Field> */}
                                
                                    <Field name='frequency' validate={validateFrequency}>
                                        {({ field, form }) => (
                                                <FormControl isInvalid={form.errors.frequency && form.touched.frequency}>
                                                    <FormLabel>Frequency</FormLabel>
                                                            <Select  {...field} size='lg' className='-my-2' placeholder={selectedMerchant.frequency}>
                                                                {selectedMerchant.frequency !== "2 Hours" ? <option value={JSON.stringify({ value: 7200000, name: '2 Hours' })}>2 hours</option> : null}
                                                                {selectedMerchant.frequency !== "4 hours" ? <option value={JSON.stringify({value:14400000, name:"4 hours"})}>4 hours</option> : null}
                                                                {selectedMerchant.frequency !== "6 hours" ? <option value={JSON.stringify({value:21600000, name:"6 hours"})}>6 hours</option> : null}
                                                                {selectedMerchant.frequency !== "12 hours" ? <option value={JSON.stringify({value: 43200000, name: "12 hours" })}>12 hours</option> : null}
                                                                {selectedMerchant.frequency !== "Daily" ? <option value={JSON.stringify({value:86400000, name:"Daily"})}>Daily</option> : null}
                                                                {selectedMerchant.frequency !== "2 days" ? <option value={JSON.stringify({value:172800000, name:"2 days"})}>2 days</option> : null}
                                                                {selectedMerchant.frequency !== "Weekly" ? <option value={JSON.stringify({value:604800000, name:"Weekly"})}>Weekly</option> : null}
                                                                {selectedMerchant.frequency !== "Monthly" ? <option value={JSON.stringify({value:2629746000, name:"Monthly"})}>Monthly</option> : null}
                                                                { selectedMerchant.frequency !== "Test" ? <option value={JSON.stringify({ value: 60000, name: "Test" })}>Test</option> : null}
                                                
                                                        </Select>
                                                        <FormErrorMessage>{form.errors.frequency}</FormErrorMessage>
                                                    </FormControl>
                                                    )}
                                                </Field>
                                                </div>
                                                <div className='py-2'>
                                                    <div className="flex justify-between">
                                                    <div className='flex space-x-2 text-sm'>
                                                            <Switch id='status' colorScheme={'green'} isChecked={merchantStatus == "ACTIVE" ? true : false} onChange={(e) => { setMerchantStatus(e.target.checked ? 'ACTIVE' : 'INACTIVE'); console.log('value :>> ', e.target.checked); }} />
                                                        <FormLabel htmlFor='status' mb='0'>
                                                        Toggle <span className='lowercase'> to {merchantStatus=="ACTIVE"?'Deactivate':'Activate'}</span>
                                                        </FormLabel>
                                                        </div>
                                                    </div>
                                                        
                                                </div>

                                                <div className='py-2 text-center text-align'>
                                                    <Button
                                                        bg='#125cc9'
                                                        color={'white'}
                                                        _hover={{bg:'#1D19B8'}}
                                                        rounded={'md'}
                                                        px={'50px'}
                                                        w={'fit'}
                                                        mt={4}
                                                                mx={'auto'}
                                                                loadingText='Updating'
                                                        isLoading={props.isSubmitting}
                                                        type='submit'>
                                                        Update
                                                    </Button>
                                                </div>
                                                
                                    </ModalBody> 
                                  
                                    </Form>
                                )}
                                </Formik>
                            </div>
                            
                </ModalContent>
                    </Modal>
                    
                    
            
                    <Modal isOpen={deleteModal.isOpen} onClose={() => { deleteModal.onClose(); setLoadingDelete(false)}}>
                {overlay}
                    <ModalContent className=''>
                                <ModalCloseButton />
                                <div>
                                    <div className='space-y-5 mt-8'>
                                        <ModalBody className='space-y-5'>
                                        <div className='bg-[#fac7d2] rounded-[100px] p-6 w-fit mx-auto text-center'>
                                            <svg width="33" height="34" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.85245 1.71969H7.40811C7.18519 0.719511 6.2317 0.00128977 5.12509 0H4.19325C3.08664 0.00128977 2.13315 0.719511 1.91025 1.71969H0.465911C0.208593 1.71969 0 1.91217 0 2.14961C0 2.38705 0.208593 2.57954 0.465911 2.57954H0.931823V8.16855C0.933373 9.35516 1.97547 10.3168 3.26142 10.3182H6.05694C7.34289 10.3168 8.38499 9.35516 8.38654 8.16855V2.57954H8.85245C9.10977 2.57954 9.31836 2.38707 9.31836 2.14963C9.31836 1.91219 9.10977 1.71969 8.85245 1.71969ZM4.19327 7.30871C4.19327 7.54615 3.98467 7.73863 3.72736 7.73863C3.47002 7.73863 3.26142 7.54615 3.26142 7.30871V4.72917C3.26142 4.49173 3.47002 4.29925 3.72733 4.29925C3.98465 4.29925 4.19325 4.49173 4.19325 4.72917V7.30871H4.19327ZM6.05694 7.30871C6.05694 7.54615 5.84834 7.73863 5.59102 7.73863C5.33371 7.73863 5.12511 7.54615 5.12511 7.30871V4.72917C5.12511 4.49173 5.33371 4.29925 5.59102 4.29925C5.84834 4.29925 6.05694 4.49173 6.05694 4.72917V7.30871ZM2.87518 1.71969C3.07336 1.20477 3.6011 0.8605 4.19327 0.859835H5.12511C5.71728 0.8605 6.24502 1.20477 6.4432 1.71969H2.87518Z" fill="#CB0101"/>
                                            </svg>
                                        </div>
                                        <div className='text-center'>
                                            <p className='font-bold text-lg'>Delete Merchant</p>
                                            <p>Do you want to delete this merchant? This action can't be undone.</p>

                                            <div className='py-4 flex justify-between'>
                                                <Button
                                                    bg='#ffffff'
                                                    color={'gray.500'}
                                                    _hover={{bg:'gray.500',color:'white'}}
                                                    rounded={'md'}
                                                    px={'20px'}
                                                    w={'fit'}
                                                    mt={4}
                                                    mx={'auto'}
                                                    onClick={() => { deleteModal.onClose();  setLoadingDelete(false)}}
                                                    className='border-2 border-gray-400'>
                                                    Cancel
                                                </Button>
                                                <Button
                                                    bg='#CB0101'
                                                    color={'white'}
                                                    _hover={{bg:'red.700'}}
                                                    rounded={'md'}
                                                    px={'20px'}
                                                    onClick={()=> onSubmitDelete()}
                                                    w={'fit'}
                                                    loadingText='Deleting'
                                                    isLoading={loadingDelete}
                                                    mt={4}
                                                    mx={'auto'}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                        </ModalBody> 
                                       
                                    </div>
                                </div>
                                
                    </ModalContent>
                </Modal>
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