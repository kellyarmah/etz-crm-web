import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Link,useToast
  } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/auth';
import { useAuth } from './AuthProvider';


const Login = () => {
    const { onLogin } = useAuth()
    const navigator = useNavigate()
    const toast = useToast()
    const validateEmail = (value)=>{
        let error
        if (!value) {
          error = 'Email is required'
        }
        return error
      }
      const validatePassword = (value)=>{
        let error
        if (!value) {
          error = 'Password is required'
        }
        return error
      }
    
    const onSubmitTest = async (values, actions) => { 
        onLogin(values)
        console.log('onsubmitTest; values :>> ', values);
    }

    const onSubmit = async (values, actions) => {
        console.log('login payload :>> ', values);

        await login(values).then((response) => {
            if (response.status) { 
                toast({
                    title: 'Login successfully',
                    position: 'top-right',
                    status: 'success',
                    isClosable: true,
                })

                let user = response.response; 
                localStorage.setItem('cfg', user.token)
                localStorage.setItem('gfc', JSON.stringify({ ...user, token: '', refreshToken: '' }))
                
                setTimeout(() => {
                    navigator('/tools/fundgate/main')
                }, 500);
            } else {
                toast({
                    title: response.message.message,
                    position: 'top-right',
                    status: 'error',
                    isClosable: true,
                  })
            }
        }).catch((error) => {
            console.log('error :>> ', error);
        })

        actions.setSubmitting(false)
     }

    return(
        <div className='h-screen'>
            <div className="md:grid grid-cols-2 gap-5 p-3 rounded-3xl lg:w-9/12 h-full mx-auto">
            <div className='md:hidden block text-center mx-auto bg-[#01315d] rounded-lg text-center '>
                        <img className='h-20 mx-auto py-2' src={`${import.meta.env.BASE_URL}/icons/logo.png`} alt="" />

                </div>
                
                <div className='col-span-1 p-10 bg-white space-y-2 content-center'>
                    <p className='text-gray-500 lg:text-3xl text-xl text-[#01315d] font-extrabold'>Welcome back</p>
                    <p className='text-gray-500'>Please enter your details to login</p>
                    <div>
                    <Formik
                        initialValues={{ email: '',password:'' }}
                        onSubmit={(values, actions) => {
                            // setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2))
                            // actions.setSubmitting(false)
                            // }, 1000)
                            onSubmit(values,actions)
                        }}
                        >
                        {(props) => (
                            <Form className='space-y-6 mt-8'>
                            <Field name='email' validate={validateEmail}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel><span className='font-bold text-[#00315d]'>Email address</span></FormLabel>
                                    <Input  {...field} type='email' placeholder='name@company.com' size='lg' className='-my-2' />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <Field name='password' validate={validatePassword}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel><span className='font-bold text-[#00315d]'>Password</span></FormLabel>
                                    <Input  {...field} type='password' placeholder='******' size='lg' className='-my-2'/>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                            <div className='text-right -mt-8'>
                                <Link color='gray.600' href='#' className='text-sm'>
                                    Forget password?
                                </Link>
                            </div>
                            <Button
                                bg='#00315d'
                                color={'white'}
                                _hover={{bg:'#336699'}}
                                rounded={'lg'}
                                w={'full'}
                                mt={4}
                                py={6}
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Login
                            </Button>

                            {/* <div className=''>
                                <Link bg='gray.200' href='/register' className='text-sm text-center w-full block text-black rounded-3xl p-[10px] hover:bg-gray-300 font-bold'>
                                    Create new Account
                                </Link>
                            </div> */}
                            </Form>
                        )}
                        </Formik>
                    </div>
                </div>

                <div className='md:block hidden col-span-1 bg-[#01315d] rounded-lg  content-center'>
                    <div className='text-center w-fit mx-auto'>
                        <img className='h-20' src={`${import.meta.env.BASE_URL}/icons/logo.png`} alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login