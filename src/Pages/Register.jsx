import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Link
  } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
const Register = ()=>{

    const validateFullName = (value)=>{
        let error
        if (!value) {
          error = 'Fullname is required'
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
      const validatePassword = (value)=>{
        let error
        if (!value) {
          error = 'Password is required'
        }
        return error
      }

    return(
        <div>
            <div className="md:grid lg:grid-cols-5 md:grid-cols-4 md:gap-1 lg:w-8/12  bg-gray-100 p-1 rounded-2xl mx-auto my-10">
                <div className='p-10 bg-white rounded-xl text-center border col-span-2 '>
                    <div className='p-10'>
                        <img src="/logo.svg" alt="savings image" />
                    </div>
                    <p className='font-bold lg:text-xl'>Become a Financial Mentor</p>
                    <p>Please enter your details</p>
                    
                    <div>
                    <Formik
                        initialValues={{ fullname:'', email: '',password:'' }}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                            }, 1000)
                        }}
                        >
                        {(props) => (
                            <Form className='space-y-5 mt-8'>
                                 <Field name='fullname' validate={validateFullName}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.fullname && form.touched.fullname}>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input  {...field} placeholder='Full Name' size='lg' className='-my-2' />
                                    <FormErrorMessage>{form.errors.fullname}</FormErrorMessage>
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
                            <Field name='password' validate={validatePassword}>
                                {({ field, form }) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel>Password</FormLabel>
                                    <Input  {...field} placeholder='Password' size='lg' className='-my-2'/>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                                )}
                            </Field>
                           
                            <Button
                                bg='#00608b'
                                color={'white'}
                                _hover={{bg:'#336699'}}
                                rounded={'3xl'}
                                w={'full'}
                                mt={4}
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Create new Account
                            </Button>

                            <div className='text-center -mt-8'>
                                <Link color='gray.600' href='/login' className='text-sm'>
                                    Already have an account?
                                </Link>
                            </div>
                            </Form>
                        )}
                        </Formik>
                    </div>
                </div>
                <div className='p-10 lg:col-span-3 space-y-10 pt-10 border md:col-span-3 hidden md:block bg-white rounded-xl'>
                        <img src="/register.svg" alt="savings image" className='mt-10' />
                      <div className='w-96 text-center m-auto'>
                        <p className='font-bold lg:text-2xl text-center'>Welcome back!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ipsum, rem cum doloremque optio maiores</p>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Register