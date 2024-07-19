import axios from "axios";
import apiEndpoints from "../Global/ApiConfig";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
};


//  LOGIN
export const login = async (data) => {
    try {
        const response = await axios.post(
            apiEndpoints.login,
            data,
            config
      ); 
      console.log('ENDPOINT:>> ', apiEndpoints.login);
      console.log('PAYLOAD:>> ', data);
      console.log('RESPONSE:>> ', response);
        if (response.status == 200) {
          return {
            status: true,
            response: response.data,
          };
        } else{
          return {
            status: false,
            message: response.data,
          };
        } 
      } catch (error) {
        return {
            status: false,
            message: error.response.data,
          }
      }
};