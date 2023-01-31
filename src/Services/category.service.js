import axios from "axios";

const API_URL = "https://api.caspianpizza.ir/api";

const getAllProductCategories = () => {
    axios.get(API_URL + "/ProductCategory/GetAllProductCategories")
    .then(response => {
        return response.data.data  
    })
    .catch(error => {});
}

const getProductByCategoryForUser = (productCategoryId,hasDiscount,searchKey,page,sortBy,pageSize) => {
    return axios
    .get(
        API_URL + "/GetProductByCategoryForUser?ProductCategoryId=" + productCategoryId + "/HasDiscount=" + hasDiscount + "/SearchKey=" + searchKey + "/Page=" + page + "/SortBy=" + sortBy + "/PageSize=" + pageSize
    )
    .then((response) => {
      return response.data.data;
    })
  };

const CategoryService = {
    getAllProductCategories,
    getProductByCategoryForUser
  };
  
  export default CategoryService;