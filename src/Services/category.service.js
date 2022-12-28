import axios from "axios";

const API_URL = "https://api.caspianpizza.ir/api";

const getAllProductCategories = () => {
    return axios.get(API_URL + "/ProductCategory/GetAllProductCategories")
    .then(response => {
        return response.data.data  
    })
    .catch(error => {});
}

const getProductByCategory = (page,pageSize,categotyId) => {
    return axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + page + "&PageSize=" + pageSize +"&ProductCategoryId=" +
      categotyId
    )
    .then((response) => {
        return response.data;
    })
}

const CategoryService = {
    getAllProductCategories,
    getProductByCategory,
  };
  
  export default CategoryService;