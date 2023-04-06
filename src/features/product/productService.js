import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/all-product`);
  return response.data;
};

const addProduct = async(productData) =>{
  const response = await axios.post(`${base_url}product/`, productData);
  if (response.data){
    alert("Sucessfully add product");
  }
  return response.data;
}

const productService = {
    getProducts, addProduct,
};

export default productService;
