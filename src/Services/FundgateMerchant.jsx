import axios from "axios";
import apiEndpoints from "../Global/ApiConfig";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
};


//  GET MERCHANT LIST
export const merchantList = async () => {
    try {
        const response = await axios.get(
          apiEndpoints.merchants,
          config
        ); 
        if (response.status == 200) {
          return {
            status: true,
            response: response.data,
          };
        } else {
          return {
            status: false,
            message: response.data.msg,
          };
        }
      } catch (error) {
        throw error;
      }
};

//  GET ENROLLED MERCHANTS
export const enrolledMerchants = async () => {
    try {
        const response = await axios.get(
          apiEndpoints.enrolledMerchants,
          config
        ); 
        if (response.status == 200) {
          return {
            status: true,
            response: response.data,
          };
        } else if (response.status == 404) {
          return {
            status: true,
            message: response.data.msg,
          };
        } else {
          return null;
        }
      } catch (error) {
        throw error;
      }
};


//  ADD MERCHANTS
export const addMerchants = async (data) => {
    try {
        const response = await axios.post(
            apiEndpoints.addMerchants,
            data,
            config
        ); 
        if (response.status == 200) {
          return {
            status: true,
            response: response.data,
          };
        } else{
          return {
            status: true,
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



//  ADD MERCHANTS
export const updateMerchants = async (data,id) => {
  try {
      const response = await axios.patch(
          `${apiEndpoints.updateMerchants}/${id}`,
          data,
          config
      );
      if (response.status == 200) {
        return {
          status: true,
          // response: response.data,
        };
      } else{
        return {
          status: false,
          message: response.data,
        };
      } 
  } catch (error) {
    console.log('update merchant error :>> ', error);
      return {
          status: false,
          message: error.response.data,
        }
    }
};


//  DELETE ENROLLED MERCHANTS
export const deleteMerchant = async (id) => {
    try {
        const response = await axios.delete(
          apiEndpoints.deleteMerchants+'/'+id,
          config
        ); 
        if (response.status == 200) {
          return {
            status: true,
            response: response.data,
          };
        } else if (response.status == 404) {
          return {
            status: true,
            message: response.data.msg,
          };
        } else {
          return null;
        }
      } catch (error) {
        throw error;
      }
};


//  GET ENROLLED MERCHANTS
export const apiLogs = async () => {
  try {
      const response = await axios.get(
        apiEndpoints.fundgateLogs,
        config
      ); 
      if (response.status == 200) {
        return {
          status: true,
          response: response.data,
        };
      } else if (response.status == 404) {
        return {
          status: true,
          message: response.data.msg,
        };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
};
