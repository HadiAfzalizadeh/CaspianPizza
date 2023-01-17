import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faArrowLeft,
  faArrowRight,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState , useEffect } from 'react';
import authHeader from '../../Services/auth-header';
import { OrderGeneralDetail } from '../SharedComponents/OrderGeneralDetail';
import { Link } from 'react-router-dom'
import ItemCard from "../SharedComponents/ItemCard";

function ReOrderButton(props){
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
  
    return(
      <div className="py-1 me-3 f_OpenSans_Bold bg-transparent nonedecoration rounded text-nowrap d-inline px-5" style={{ border: '1px solid #303F9F' , color: '#303F9F' }} onClick={() => 
        {                      
           if(!loading){
             setloading(true);
             axios
           .post("https://api.caspianpizza.ir/api/Order/ReCreateOrder/" + props.itemId , null,{ headers: authHeader() })
           .then((response) => {
             setloading(false);
             navigate("/Basket");
           })
           .catch((error) => {alert(error);setloading(false);});
           }
       }}>
         {!loading && (<span className="f_OpenSans_Bold">Re Order Now</span>)}
       {loading && (<FontAwesomeIcon style={{ color: '#303F9F' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/>)}
         </div>
    )
  
  }


export const OrderDetail = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get('https://api.caspianpizza.ir/api/Order/GetByOrderStatus?OrderState=' + 0 + '&StartDate&EndDate&SearchKey&Page=1&PageSize=1', { headers: authHeader() })
        .then((response) => {
          setItem(response.data.data[0]);
        })
        .catch((error) => {});
      }, []);

    // useEffect(() => {
    //     axios.get('https://api.caspianpizza.ir/api/OrderDetail/FindOrderDetailByOrderId' + props.orderStatus , { headers: authHeader() })
    //     .then((response) => {
    //       setItem(response.data.data);
    //     })
    //     .catch((error) => {});
    //   }, []);

      if(item === null){
            return null;
      }

    return(
        <div className='container px-0' style={{ border: '1px solid #00000033' }}>
            <div className="text-center ps-4 py-2 mb-0 align-items-center" style={{ backgroundColor: '#673AB7' }}>
            <h4 className="f_Poppins text-white mb-0">My Orders</h4>
        </div>
        <div className="d-flex justify-content-between p-3" style={{ color: '#23254e' }}><Link to="../Orders"><FontAwesomeIcon icon={faArrowLeft} className="p-0"  size="xl" style={{ color: '#23254e' }} /></Link><h4 className="f_Poppins mb-0">Order { item.id } Detail</h4><FontAwesomeIcon icon={faArrowRight} className="p-0 invisible"  size="xl"/></div>
        <hr className='my-0'/>
           <OrderGeneralDetail item={item} showArrow={false}/>
           <hr className='my-0 '/>
           <div className="p-3">
           <span>Order Recipient </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>{item.id}</span>
           <FontAwesomeIcon className='ms-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span className="ms-3">Phone Number </span><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>{item.id}</span>
           </div>
           <div className="p-3">
           <span>Address </span><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>{item.id}</span>
           </div>
           {/* {this.state.items.map((item) => (
                <>
                <div className="col-3 hoverableCard d-none d-xl-block" key={item.id + "col3"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'}}>
                  <ItemCard item={item}/>
                </div>
                <div className="col-4 hoverableCard d-none d-lg-block d-xl-none" key={item.id + "col4"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                  <ItemCard item={item}/>
                </div>
                <div className="col-6 hoverableCard d-none d-md-block d-lg-none" key={item.id + "col6"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                  <ItemCard item={item}/>
                </div>
                <div className="col-12 hoverableCard d-block d-md-none" key={item.id + "col12"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                  <ItemCard item={item}/>
                </div>
                </>
                ))} */}
        </div>
    )
}