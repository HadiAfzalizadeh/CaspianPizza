import axios from "axios";

const API_URL = "https://api.caspianpizza.ir/api";

const getAllProductCategories = () => {
    return axios.get(API_URL + "/ProductCategory/GetAllProductCategories")
    .then(response => {
        return response.data.data  
    })
    .catch(error => {});
}

const getProductByCategory = (page, PageSize, ProductCategoryId) => {
    return axios.get(API_URL + "/Product/GetProductByCategory?Page=" + page + "&PageSize=" + PageSize + "&ProductCategoryId=" + ProductCategoryId)
    .then((response) => {
        return response.data 
    });
}

const CategoryService = {
    getAllProductCategories,
    getProductByCategory
  };
  
  export default CategoryService;