import axios from "axios";

const API_URL = "https://api.caspianpizza.ir/api";

const getAllProductCategories = () => {
    return axios.get(API_URL + "/ProductCategory/GetAllProductCategories")
    .then(response => {
        return response.data.data  
    })
    .catch(error => {});
}

const CategoryService = {
    getAllProductCategories
  };
  
  export default CategoryService;