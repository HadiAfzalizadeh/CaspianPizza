import axios from "axios";

const Login_URL = "https://api.caspianpizza.ir/api/Authenticate";

const login = (email, password) => {
    return axios
      .post(Login_URL , {
        email,
        password
      })
      .then((response) => {
         if(response.data.data !== null){
          localStorage.setItem("user", JSON.stringify(response.data.data));
          return response.data.data;
         }else{
          throw new Error(response.data.message);
         }
      })
  };


  const logout = () => {
    localStorage.removeItem("user");
  };

  const AuthService = {
    login,
    logout
  };
  
  export default AuthService;