import axios from "axios";
import { base_url } from "../../utils/base_url";

<<<<<<< HEAD
// make reference for commit
=======
>>>>>>> e06d9a211ba18ea927a585ea7a69ff50e738abfe
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