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
    Input,
  Select,
  useToast
  } from '@chakra-ui/react'
import { CreateButton } from '../../General/buttons'
import { useState, useEffect } from 'react'
import { Field, Form, Formik } from 'formik';
import { merchantList, addMerchants } from '../../../Services/FundgateMerchant';


  export default function AddMerchant({onCloseModal}) {

    let [merchants, setMerchants] = useState([]);
    let [notification, setNotification] = useState({})

    const toast = useToast()

    const getMerchantList = async () => { 
        await merchantList().then((response) => {
            if (response.status) {
                setMerchants(response.response);
                console.log('response.data :>> ', response.response);
            }
        }).catch((error) => {
            console.log('error :>> ', error);
        })
    }

    const addMerchant = async (data,actions) => { 
      let localMerchant = JSON.parse(data.merchant)
      let localFrequency = JSON.parse(data.frequency)
      let payload = {
          "cardNo": localMerchant.cardNumber,
          "name": localMerchant.name,
          "email": data.email,
          "lowerTreshold": data.lowerThreshold,
          "higherTreshold": '0',
          "frequency": localFrequency.name,
          "timestampWorth": (localFrequency.value).toString()
      }
      console.log('payload :>> ', payload);

      await addMerchants(payload).then((response) => {
          if (response.status) {
            toast({
              title: "Merchant added successfully",
              position: 'top-right',
              status: 'success',
              isClosable: true,
            })
              console.log('response.message :>> ', response);
          } else {
            console.log('11error response.message :>> ', response);
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
          title: "Failed to Add merchant, Try again",
          position: 'top-right',
          status: 'error',
          isClosable: true,
        })
      })
      actions.setSubmitting(false)
      onCloseModal(true)
      onClose()
    }
    

    useEffect(() => {
        console.log("2. Fundgate Merchant List")
        getMerchantList()
    },[])


    let [selectedMerchant, setSelectedMerchant] = useState('')
    const onMerchantChange = (value) => {
      
    let merchantData = JSON.parse(value)
      console.log('+++merchantData', merchantData)
      
      setSelectedMerchant(merchantData)
    }

    
    const validateMerchant = (value)=>{
        let error
        if (!value) {
          error = 'Merchant Name is required'
        }
        return error
      }

    const validateEmail = (value)=>{
        let error
        if (!value) {
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

      const validateHigherThreshold = (value)=>{
        let error
        if (!value) {
          error = 'Higher Threshold is required'
        }
        return error
      }

      const validateFrequency = (value)=>{
        let error
        if (!value) error = "Frequency is required"
        return error
      }



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
    const [overlay, setOverlay] = useState(<Overlay />)
    return (
      <>
      <CreateButton title={'Enroll Merchant'} 
        onClick={()=>{
            onOpen() 
            setOverlay(<Overlay />)}} 
        />
  
        <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
         
          <ModalContent>
            <ModalHeader className='text-center'>Add Merchant</ModalHeader>
            <ModalCloseButton />
        
            <div>
                    <Formik
                initialValues={{ merchant: {}, email: '',higherThreshold:'',lowerThreshold:'', frequency:'' }}
                onSubmit={(values, actions) => {
                  console.log('Hello')
                          setTimeout(() => {
                            addMerchant(values,actions)
                            // alert(JSON.stringify(values, null, 2))
                           
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form className='space-y-5 mt-8'>
                                    <ModalBody className='space-y-5'>

                                 <Field name='merchant' validate={validateMerchant}>
                        {({ field, form }) => (
                          
                          <FormControl isInvalid={form.errors.merchant && form.touched.merchant}>
                                    <FormLabel>Merchant</FormLabel>
                                    <Select  {...field} size='lg' className='-my-2' placeholder='Select option'>
                                  {merchants.map((single,index)=>{
                                    if(selectedMerchant!=null){
                                      if(single.cardNumber == selectedMerchant.cardNumber){ return null;}
                                      else{ return <option key={index} value={JSON.stringify(single)}>{single.name}</option>}
                                    }else{
                                      return <option key={index} value={JSON.stringify(single)}>{single.name}</option>
                                    }
                                  })}
                              
                                    </Select>
                                    <FormErrorMessage>{form.errors.merchant}</FormErrorMessage>
                                </FormControl>


                                
                        )}
                        

                            </Field>
                            <Field name='email' validate={validateEmail}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel>Email</FormLabel>
                                    <Input  {...field} placeholder='Email' size='lg' className='-my-2' />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
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
                                    <Select  {...field} size='lg' className='-my-2' placeholder='Select option'>
                                      <option value={JSON.stringify({value:7200000, name: '2 Hours'})}>2 hours</option>
                                      <option value={JSON.stringify({value:14400000, name:"4 hours"})}>4 hours</option>
                                      <option value={JSON.stringify({value:21600000, name:"6 hours"})}>6 hours</option>
                                      <option value={JSON.stringify({value: 43200000, name: "12 hours" })}>12 hours</option>
                                      <option value={JSON.stringify({value:86400000, name:"Daily"})}>Daily</option>
                                      <option value={JSON.stringify({value:172800000, name:"2 days"})}>2 days</option>
                                      <option value={JSON.stringify({value:604800000, name:"Weekly"})}>Weekly</option>
                                      <option value={JSON.stringify({value:2629746000, name:"Monthly"})}>Monthly</option>
                                      <option value={JSON.stringify({value:60000, name:"Test"})}>Test</option>
                                    </Select>
                                    <FormErrorMessage>{form.errors.frequency}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            </div>
                            </ModalBody>
                           
                            

                            <ModalFooter className='text-center text-align'>
                            <Button
                                bg='#125cc9'
                                color={'white'}
                                _hover={{bg:'#1D19B8'}}
                                rounded={'md'}
                                px={'50px'}
                                w={'fit'}
                                mt={4}
                        mx={'auto'}
                        // onClick={onAddMerchant()}
                        loadingText='Submitting'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Add Merchant
                            </Button>
                            </ModalFooter>
                            </Form>
                        )}
                        </Formik>
                    </div>  
          </ModalContent>
        </Modal>
      </>
    )
  }