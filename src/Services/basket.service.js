import axios from "axios";

const DeleteFromCart_URL = "https://api.caspianpizza.ir/api/Cart/DeleteFromCart";

const addToCart_URL = "https://api.caspianpizza.ir/api/Cart/AddToCart";

const removeFromCart_URL = "https://api.caspianpizza.ir/api/Cart/RemoveFromCart";

const CreateCart_URL = "https://api.caspianpizza.ir/api/Cart";


const getMyCart = (browserId) => {
    return axios
    .get(
      "https://api.caspianpizza.ir/api/Cart/GetMyCart/" + browserId
    )
    .then((response) => {
      return response.data.data.cartItems;
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

  const BasketService = {
    getMyCart,
    deleteFromCart,
    addToCart,
    removeFromCart,
    createCart,
    deleteCart
  };
  
  export default BasketService;