const fundgateBaseUrl = "https://webpay.etranzactgh.com/crmbalance";
const liveFundgateUrl = "https://webpay.etranzactgh.com/crmbalancelive";
const baseUrl = "https://sandbox-api.etranzact.com.gh/crm"
const prodUrl = "https://webpay.etranzactgh.com/crm"



const apiEndpoints = {

    login: baseUrl + "/user/login",


    merchants: liveFundgateUrl + "/merchants",
    addMerchants: `${prodUrl}/fundgate-merchant/create-merchant`,
    enrolledMerchants:  `${prodUrl}/fundgate-merchant/all-merchant`,
    deleteMerchants: `${prodUrl}/fundgate-merchant/delete-merchant`,
    updateMerchants: `${prodUrl}/fundgate-merchant/update-merchant`,
    fundgateLogs: `${baseUrl}/logs`
}


export default apiEndpoints;