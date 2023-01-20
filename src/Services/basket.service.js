import axios from "axios";
import authHeader from '../Services/auth-header';

const DeleteFromCart_URL = "https://api.caspianpizza.ir/api/Cart/DeleteFromCart";

const addToCart_URL = "https://api.caspianpizza.ir/api/Cart/AddToCart";

const removeFromCart_URL = "https://api.caspianpizza.ir/api/Cart/RemoveFromCart";

const CreateCart_URL = "https://api.caspianpizza.ir/api/Cart";

const PayForUser_URL = "https://api.caspianpizza.ir/api/Payment/PayForUser";


const getMyCart = (browserId) => {
    return axios
    .get(
      "https://api.caspianpizza.ir/api/Cart/GetMyCart/" + browserId
    )
    .then((response) => {
      return response.data.data;
    })
  };

  const deleteFromCart = (cartId,productId) => {
    return axios
    .post(DeleteFromCart_URL , {
      cartId,
      productId,
      priceType: 1
    })
    .then((response) => {})
  };

  const addToCart = (cartId,productId) => {
    return axios
    .post(addToCart_URL , {
      cartId,
      productId,
      priceType: 1
    })
    .then((response) => {})
  };

  const removeFromCart = (cartId,productId) => {
    return axios
    .post(removeFromCart_URL , {
      cartId,
      productId,
      priceType: 1
    })
    .then((response) => {})
  };

  const createCart = (cartId,productId,browserId) => {
    return axios
    .post(CreateCart_URL , {
      browserId,
      finished: false,
      discountCouponCode: "",
      priceType: 1,
      cartItems: [
        {
          productId,
          count: 1,
          cartId,
          priceType: 1
        }
      ]
    })
    .then((response) => {return response.data.data;})
  };

  const deleteCart = (cartId,browserId) => {
    return axios
    .delete(
      "https://api.caspianpizza.ir/api/Cart?Id=" + cartId + "&BrowserId=" + browserId
    )
    .then((response) => {})
  };

  const payForUser = (browserId) => {
    return axios
    .post(PayForUser_URL , {
      browserId,
      paymentType: 2,
      amount: 0,
      amountPaidWithCredit: 0,
      address: "",
      phone: ""
    }, { headers: authHeader() })
    .then((response) => {return response.data;})
  };

  const ReCreateOrder = (orderId,browserId) => {
    return axios
    .post("https://api.caspianpizza.ir/api/Order/ReCreateOrder/" + orderId  + "?BrowserId=" + browserId, null ,{ headers: authHeader()})
    .then((response) => {return response.data.data;})
  };


  
  const BasketService = {
    getMyCart,
    deleteFromCart,
    addToCart,
    removeFromCart,
    createCart,
    deleteCart,
    payForUser,
    ReCreateOrder
  };
  
  export default BasketService;