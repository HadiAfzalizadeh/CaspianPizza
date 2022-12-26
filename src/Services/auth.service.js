import axios from "axios";

const API_URL = "https://api.caspianpizza.ir/api/Authenticate";

const login = (email, password) => {
    return axios
      .post(API_URL , {
        email,
        password,
      })
      .then((response) => {
         localStorage.setItem("user", JSON.stringify(response.data.data));
        return response.data.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const AuthService = {
    login,
    logout,
  };
  
  export default authService;