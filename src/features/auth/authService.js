import axios from "axios";
import { base_url } from "../../utils/base_url";

// make reference for commit
axios.defaults.withCredentials = true;

const login = async (userData) =>{
    const response = await axios.post(`${base_url}user/admin-login`, userData);
    if (response.data){
        localStorage.setItem("user", JSON.stringify((response.data)));
    }
    return response.data;
}

const authService = {
    login,
};

export default authService;