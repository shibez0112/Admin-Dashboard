import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProdCategory = async () => {
  const response = await axios.get(`${base_url}prodCategory/all-category`);
  return response.data;
};

const prodCategoryService = {
  getProdCategory,
};

export default prodCategoryService;