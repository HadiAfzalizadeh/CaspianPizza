import { Component , useEffect , useState} from "react"
import { faBullseye, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
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
import axios from "axios";
import authHeader from '../../Services/auth-header';


const collectionTimeOptions = [
    { value: '0', label: '06:00 - 06:30' },
    { value: '1', label: '06:30 - 07:00' },
    { value: '2', label: '07:00 - 07:30' },
    { value: '3', label: '07:30 - 08:00' },
    { value: '4', label: '08:00 - 08:30' },
    { value: '5', label: '08:30 - 09:00' },
    { value: '6', label: '09:00 - 09:30' },
    { value: '7', label: '09:30 - 10:00' },
    { value: '8', label: '10:00 - 10:30' },
    { value: '9', label: '10:30 - 11:00' },
    { value: '10', label: '11:00 - 11:30' },
    { value: '11', label: '11:30 - 12:00' },
    { value: '12', label: '12:00 - 12:30' },
    { value: '13', label: '12:30 - 13:00' },
    { value: '14', label: '13:00 - 13:30' },
    { value: '15', label: '13:30 - 14:00' },
    { value: '16', label: '14:00 - 14:30' },
    { value: '17', label: '14:30 - 15:00' },
    { value: '18', label: '15:00 - 15:30' },
    { value: '19', label: '15:30 - 16:00' },
    { value: '20', label: '16:00 - 16:30' },
    { value: '21', label: '16:30 - 17:00' },
    { value: '22', label: '17:00 - 17:30' },
    { value: '23', label: '17:30 - 18:00' }
  ]

  const deliveryTimeOptions = [
    { value: '24', label: '07:00 - 11:00' },
    { value: '25', label: '07:30 - 11:30' },
    { value: '26', label: '08:00 - 12:00' },
    { value: '27', label: '08:30 - 12:30' },
    { value: '28', label: '09:00 - 13:00' },
    { value: '29', label: '09:30 - 13:30' },
    { value: '30', label: '10:00 - 14:00' },
    { value: '31', label: '10:30 - 14:30' },
    { value: '32', label: '11:00 - 15:00' },
    { value: '33', label: '11:30 - 15:30' },
    { value: '34', label: '12:00 - 16:00' },
    { value: '35', label: '12:30 - 16:30' },
    { value: '36', label: '13:00 - 17:00' },
    { value: '37', label: '13:30 - 17:30' },
    { value: '38', label: '14:00 - 18:00' }
  ]

function PayButton(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    return(
        <div className="text-end my-3">
                <button className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap me-3" style={{ border: '1px solid #00796B' , color: '#00796B' }} 
                onClick={() => {
                    if(!loading){
                        setLoading(true);
                    dispatch(payForUser())
                    .unwrap()
                    .then(() => {
                        setLoading(false);
                        navigate("/MyOrders/OrderDetail");
                    })
                    .catch(()=>{setLoading(false);})
                    }
                }}
                >
                    {!loading && (<span className="f_OpenSans_Bold">Pay Now</span>)}
       {loading && (<FontAwesomeIcon style={{ color: '#303F9F' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/>)}

                    </button>
            </div>
    )
}

class Checkout extends Component {

    state = {
        bookslot: null
    }

    componentDidMount(){
        const cart = JSON.parse(localStorage.getItem("cart"));
        axios.get("https://api.caspianpizza.ir/api/BookSlot/FindBookSlotByCartId?CartId=" + cart.cartId, { headers: authHeader() })
        .then(response => {
            this.setState({
                bookslot: {
                    isDelivery: response.data.bookSlots[response.data.bookSlots.length - 1].isDelivery,
                    bookDate: response.data.bookSlots[response.data.bookSlots.length - 1].bookDate.substring(0,response.data.bookSlots[response.data.bookSlots.length - 1].bookDate.indexOf( "T" )),
                    bookTime: response.data.bookSlots[response.data.bookSlots.length - 1].bookTime
                }
            });
        })
        .catch(error => {});
    }

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
                {this.state.bookslot === null && (<div className="w-100 text-center"><FontAwesomeIcon style={{ color: '#303F9F' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/></div>)}
                {this.state.bookslot !== null && (<> <div className="d-flex">
                    <p className="pb-0 text-nowrap">You have booked a <span className="f_OpenSans_Bold">{this.state.bookslot.isDelivery === true ? "DELIVERY" : "COLLECTION"}</span> slot:</p><div className="ms-5"><p className="f_OpenSans_Bold mb-0">{this.state.bookslot.bookDate}</p><p className="f_OpenSans_Bold  mb-0">
                    {this.state.bookslot.isDelivery === false ? collectionTimeOptions.find(p => p.value === this.state.bookslot.bookTime + "").label : deliveryTimeOptions.find(p => p.value === this.state.bookslot.bookTime + "").label}
                    </p></div>
                    </div>
                    <Link to="/BookSlot" variant="text" className="f_Poppins" style={{ display: 'block' , textDecoration: 'underline' , color: '#2196F3'}}>CHANGE SLOT</Link></>)}
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