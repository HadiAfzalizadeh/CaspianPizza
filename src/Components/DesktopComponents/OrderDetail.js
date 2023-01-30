import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from 'react';
import authHeader from '../../Services/auth-header';
import { OrderGeneralDetail } from '../SharedComponents/OrderGeneralDetail';
import { Link } from 'react-router-dom'
import ItemCard from "../SharedComponents/ItemCard";
import { Component } from "react";
import { connect } from "react-redux";


class OrderDetail extends Component {

  state= {
    item: null,
  }

  componentDidMount() {
    axios.get('https://api.caspianpizza.ir/api/OrderDetail/FindOrderDetailByOrderIdForUser/' + this.props.OrderDetailId  , { headers: authHeader() })
        .then((response) => {
          this.setState({
            item: response.data.data
          });
        })
        .catch((error) => {});
}
      
render() {
      if(this.state.item === null){
            return null;
      }

    return(
      <>
        <div className='container px-0' style={{ border: '1px solid #00000033' }}>
        <div className="ps-4 py-2 mb-0 align-items-center">
            <h4 className="f_Poppins mb-3 mt-3 ms-3" style={{ color: '#23254e' }}>My Orders</h4>
        </div>
        <div className="d-flex justify-content-between p-3" style={{ color: '#23254e' }}><Link to="../Orders"><FontAwesomeIcon icon={faArrowLeft} className="p-0"  size="xl" style={{ color: '#23254e' }} /></Link><h4 className="f_Poppins mb-0">Order { this.state.item.orderId } Detail</h4><FontAwesomeIcon icon={faArrowRight} className="p-0 invisible"  size="xl"/></div>
           <OrderGeneralDetail item={this.state.item} itemId={this.state.item.orderId} isDetail={true}/>
           <hr className='my-0 '/>
           <div className="p-3">
           <span>Order Recipient </span><span className='me-2 f_OpenSans_Bold' style={{ color: '#23254e' }}>{this.state.item.fullName}</span>
           <FontAwesomeIcon className='ms-2' style={{ color: '#9e9fb1', fontSize: '0.5rem' }} icon={faCircle}/>
           <span className="ms-3">Phone Number </span><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>{this.state.item.phone}</span>
           </div>
           <div className="p-3">
           <span>Address </span><span className='f_OpenSans_Bold' style={{ color: '#23254e' }}>{this.state.item.address}</span>
           </div>
           </div>
           <div className='container my-3'>
           <div className="row justify-content-center text-center">
           {this.state.item.orderDetailItems.map((item) => (
                <>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-8 hoverableCard" key={item.orderId + "col2"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'}}>
                  <ItemCard item={item.product} itemId ={item.product.productId} Order={{count: item.count, price: item.price}} />
                </div>
                </>
                ))}
                </div>
                </div>
    
        </>
    )
           }
}


const mapStateToProps = (state) => ({
  OrderDetailId: state.basket.OrderDetailId
})

export default connect(mapStateToProps)(OrderDetail)