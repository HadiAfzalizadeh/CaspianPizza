import axios from "axios";

const API_URL = "https://api.caspianpizza.ir/api/Authenticate";

const login = (email, password) => {
    return axios
      .post(API_URL , {
        email,
        password,
      })
      .then((response) => {
         if(response.data.data !== null){
          localStorage.setItem("user", JSON.stringify(response.data.data));
          return response.data.data;
         }else{
          // return response.data.message;
          throw new Error(response.data.message);
         }
      })
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const AuthService = {
    login,
    logout,
  };
  
  export default AuthService;