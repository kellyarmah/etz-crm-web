import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login  } from "../../Services/auth";
import { useToast } from "@chakra-ui/react";
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigator = useNavigate();
    const toast = useToast()
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('cfg'));
    const onLogin = async (data) => { 
        await login(data).then((response) => {
            console.log('response :>> ', response);
            if (response.status) { 
                toast({
                    title: 'Login successfully',
                    position: 'top-right',
                    status: 'success',
                    isClosable: true,
                })
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

            let user = response.response;
            setUser({ ...user, token: '', refreshToken: '' })
            setToken(user.token)
            localStorage.setItem('cfg', user.token)
            localStorage.setItem('gfc', JSON.stringify({...user,token:'',refreshToken:''}))
            navigator('/')
            return;
        }).catch((error) => {
            console.log('error :>> ', error);
            throw new Error(error)
        })
    }

    const onLogout = () => { 
        setToken('');
        setUser(null);
        localStorage.removeItem('cfg');
        localStorage.removeItem('gfc');
        navigator('/login');
    }


    const checkLoginStatus = async () => {
        console.log('checkLoginStatus')
        let newUser = localStorage.getItem('gfc', { ...user, token: '', refreshToken: '' })
        // console.log('SAVED USER DETAILS :>> ', newUser);

        if (newUser == null) {
            console.log('You are logged out')
            setToken('');
            localStorage.removeItem('cfg');
            localStorage.removeItem('gfc');
            navigator('/login');
        } else {
            setUser(newUser)
            console.log('STILL LOGIN ACTIVE :>> TRUE', 'newUser');
            return JSON.parse(newUser);
        }
    }

    return <AuthContext.Provider value={{user,setUser,token,onLogin,onLogout,checkLoginStatus}}>
                {children}
            </AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => { 
    return useContext(AuthContext)
}