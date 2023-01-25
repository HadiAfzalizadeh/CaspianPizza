import './App.css';
import { isMobile } from 'react-device-detect';
import  DesktopApp  from './Components/DesktopComponents/DesktopApp';
import { MobileApp } from './Components/MobileComponents/MobileApp';
import { useEffect } from "react";
import axios from "axios";
import { getMyCart } from './Slices/basket.slice';
import { useDispatch , useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';



function SelectDeviceComponent() {

  if (isMobile) {
    return <MobileApp />;
  }
  return <DesktopApp />;
}

const App = () => {

  // localStorage.removeItem("cart");
  // localStorage.setItem("cart", JSON.stringify({browserId: "a13b07f9-8b40-4587-a09e-ea31aac75921", cartId: "153" }));

  // const cart = JSON.parse(localStorage.getItem("cart"));

  // // alert(cart.brawserId);

  // console.log(uuidv4());

  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getMyCart());
}, [dispatch]);


    return(
      <SelectDeviceComponent />
    )

}

export default App;