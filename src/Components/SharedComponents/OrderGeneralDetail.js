import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faRotate,
  faAngleRight,
  faCircle,
  faCheck,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import React, { useState , useRef } from 'react';
import axios from "axios";
import authHeader from '../../Services/auth-header';
import { useDispatch } from "react-redux";
import { setOrderDetailId } from "../../Slices/basket.slice";
import { ReCreateOrder } from "../../Slices/basket.slice";


function ReOrderButton(props){
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    return(
      <div className="py-1 me-3 f_OpenSans_Bold bg-transparent nonedecoration rounded text-nowrap d-inline px-5" style={{ border: '1px solid #303F9F' , color: '#303F9F' }} onClick={() => 
        {                   
           if(!loading){
            setloading(true);
            const { itemId } = props;
        dispatch(ReCreateOrder({ orderId: itemId }))
        .unwrap()
        .then(() => {
          setloading(false);
          navigate("/Basket");
        })
        .catch(()=>{setloading(false);})
        }
       }}>
         {!loading && (<span className="f_OpenSans_Bold">Reorder Now</span>)}
       {loading && (<FontAwesomeIcon style={{ color: '#303F9F' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/>)}
         </div>
    )
  
  }

export const OrderGeneralDetail = (props) => {

  const quantityRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

    return(
        <div className='row p-3' style={props.selectable ? {  cursor: 'pointer'} : {}} onClick={(event) => {
          if(!quantityRef.current.contains(event.target)){
            dispatch(setOrderDetailId(props.itemId));
          navigate("../OrderDetail");
          }
        }}>
            <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
            {props.item.orderState === 0 && (<><FontAwesomeIcon style={{ backgroundColor: '#00b7eb' , borderRadius: '50%' }} icon={faRotate} className='spinner p-1 text-white' sixe="xl"/>
            <h6 className='f_Poppins ms-2 mb-0' style={{ color: '#23254e' }}>In Process</h6></>)}
            {props.item.orderState === 2 && (<><FontAwesomeIcon style={{ backgroundColor: '#4CAF50 ' , borderRadius: '50%' }} icon={faCheck} className='p-1 text-white'/>
            <h6 className='f_Poppins ms-2 mb-0' style={{ color: '#23254e' }}>Delivered</h6></>)}
            {props.item.orderState === 1 && (<><FontAwesomeIcon style={{ backgroundColor: '#FF5722 ' , borderRadius: '50%' , aspectRatio: '1/1'}} icon={faXmark} className='p-1 text-white'/>
            <h6 className='f_Poppins ms-2 mb-0' style={{ color: '#23254e' }}>Cancelled</h6></>)}
            </div>
            { props.showArrow && (<FontAwesomeIcon icon={faAngleRight} style={{ color: '#23254e' }} className="me-3" size="sm"/>)}
            </div>
            <p className='mb-2 mt-3 f_OpenSans_Regular text-secondary'><span className='p-2 f_Poppins' style={{ color: '#23254e' }}>{props.item.insertTime.substring(0,props.item.insertTime.indexOf( "T" ))} {props.item.insertTime.substring(props.item.insertTime.indexOf( "T" )+1,props.item.insertTime.indexOf( "." ))}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span>Order ID </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>{props.item.id !== undefined ? props.item.id : props.item.orderId}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span>Payment ID </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>{props.item.paymentId}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span>Total Price </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>£{props.item.totalPrice}</span>{props.item.totalPrice !== props.item.totalPriceWithoutDiscount && (<><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span>Your Profit </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>£{props.item.totalPrice - props.item.totalPriceWithoutDiscount}</span><FontAwesomeIcon className='me-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/><span>Price Without Discount </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>£{props.item.totalPriceWithoutDiscount}</span></>)}</p>
            <div ref={quantityRef} className='text-end w-100'>
            <ReOrderButton itemId={props.itemId}/>
              </div>
          </div>
    )
}