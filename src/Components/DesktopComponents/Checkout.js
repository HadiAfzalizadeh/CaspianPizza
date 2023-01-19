import { Component , useEffect} from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import BasketQuantity from "../SharedComponents/BasketQuantity";
import Modal from 'react-modal';
import { useDispatch , useSelector } from "react-redux";
import { deleteFromCart } from '../../Slices/basket.slice';
import { connect } from "react-redux";
import { deleteCart , getMyCart , payForUser } from "../../Slices/basket.slice";
import { PaymentMultiStep } from "../SharedComponents/PaymentMultiStep";
import { useNavigate } from "react-router-dom";
import { setOrderDetailId } from "../../Slices/category.slice";

function PayButton(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    

    return(
        <div className="text-end my-3">
                <button className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap me-3" style={{ border: '1px solid #00796B' , color: '#00796B' }} onClick={() => {
                    dispatch(payForUser())
                    .unwrap()
                    .then(() => {
                        navigate("/MyOrders/OrderDetail");
                    })
                    .catch()
                }}>Pay Now</button>
            </div>
    )
}

class Checkout extends Component {

    render(){
        return(
            <>

                    <div className="container d-flex justify-content-between align-items-center p-2 pe-3" style={{ width: '100%'  , background: '#00BCD4' }}>
                    <h3 className="f_Poppins" style={{ color: 'white' , marginBottom: 0 , padding: '0.5rem'}}>Checkout</h3>
                    <div>
                    </div>
                 </div>
            <div className="container pt-1 pb-1" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="d-flex justify-content-between align-items-center p-3 bg-white mt-2">
                    <div className="d-flex">
                    <p className="pb-0 text-nowrap">You have booked a <span className="f_OpenSans_Bold">DELIVERY</span> slot:</p><div className="ms-5"><p className="f_OpenSans_Bold mb-0">Wednesday 4th January</p><p className="f_OpenSans_Bold  mb-0">07:00 - 11:00</p></div>
                    </div>
                    <Link to="/BookSlot" variant="text" className="f_Poppins" style={{ display: 'block' , textDecoration: 'underline' , color: '#2196F3'}}>CHANGE SLOT</Link>
                </div>
                <div className="d-flex justify-content-between align-items-center p-3 bg-white mt-2">
                <div>
                    <p>
                        Total Items
                    </p>
                    <p style={{ marginBottom: 0  }}>
                    {this.props.cartItems.length} products
                    </p>
                </div>
                <div className="text-center">
                    <p>
                    Total Price
                    </p>
                    <p style={{ marginBottom: 0 }}>
                        £{this.props.sumAmount}
                    </p>
                </div>
                <div>
                    <Link to="/Basket" className="f_Poppins" onClick={this.openDeleteBasketModal} variant="text" style={{ cursor: 'pointer' , display: 'block' , color: '#2196F3', textDecoration: 'underline'  }}>VIEW BASKET</Link>
                    {/* <div onClick={this.openVoucherBasketModal} variant="text" style={{cursor: 'pointer' , display: 'block', textDecoration: 'underline'  }}>ADD VOUCHER</div> */}
                </div>
                </div>
                <div className="p-3 bg-white mt-2">
                    <p>Choose your payment type :</p>
                    <div className="d-flex align-items-center justify-content-between">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        <label class="form-check-label" for="inlineRadio1">Credit / Debit Card</label>
                        </div>
                        <img
                                    style={{ width: '6rem' , height: 'auto' }}
                                        src="/assets/images/card.817db6d4.png"
                                        alt="Credit / Debit Card"
                                ></img>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Pay By PayPal</label>
                        </div>
                        <img
                        style={{ width: '6rem' , height: 'auto' }}
                            src="/assets/images/pp.png"
                            alt="Pay By Bank"
                    ></img>

                    </div>
                </div>
            <PayButton />
            </div>
            </>
        )
    }
}

  
const mapStateToProps = (state) => ({
    cartItems: state.basket.cartItems,
    sumAmount: state.basket.sumAmount
  })
  
  export default connect(mapStateToProps,null)(Checkout)