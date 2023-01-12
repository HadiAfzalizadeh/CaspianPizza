import { Component , useEffect} from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import BasketQuantity from "./BasketQuantity";
import Modal from 'react-modal';
import { useDispatch , useSelector } from "react-redux";
import { deleteFromCart } from '../../Slices/basket.slice';
import { connect } from "react-redux";
import { deleteCart } from "../../Slices/basket.slice";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function CartItem(){

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.basket);

    return(
            <>
            {cartItems.map((item) => (  
                     <div className="d-flex align-items-center justify-content-between p-3 bg-white mt-2">
         <div className="d-flex w-50 justify-content-between align-items-center">
                     <img
                         style={{ width: '6rem' , height: '6rem' }}
                             src={item.imageBody.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + item.imageBody} 
                             alt="Pay By Bank"
                     ></img>
                     <div className="container" style={{ height: '100%' }}>
                         <div className="row align-items-center" style={{ height: '100%' }}>
                             <h5>{item.product.name}</h5>
                             <p className="text" style={{ fontSize: '13px' }}>{item.product.description}</p>
                         </div>
                     </div>
                 </div>
                 <div className="d-flex w-50 text-center justify-content-between align-items-center">
                     <div className="d-none d-md-block w-25" style={{ fontSize: '15px' }}>
                         <p style={{ marginBottom: 0 }}>£{item.price}</p>
                     </div>
                     <div>
                         <div>
                         <div className="d-md-none d-sm-block" style={{ fontSize: '15px' }}>
                         <p style={{ marginBottom: 0 }}>£116.91</p>
                         <p>+ £5.85 VAT</p>
                     </div>
                         <BasketQuantity productId={item.productId}/>
                         </div>
                     </div>
                     <div className="d-flex align-items-center ms-2 cursorpointer" onClick={() => 
                     {
                        const { productId } = item;
                        dispatch(deleteFromCart({productId}));
                    }}>
                     <p style={{ marginRight: '0.5rem' , marginBottom: 0 }} className="d-none d-lg-block">Remove</p>
                     <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: '#F44336' }}/>
                     </div>
                 </div>
         </div>
                    ))}
            </>
    )
}

class Basket extends Component {

    state={
        deletebasketmodalIsOpen: false,
        vouchermodalIsOpen: false
    }

    openDeleteBasketModal = () => {
        this.setState({
            deletebasketmodalIsOpen: true
          });

    }
    
    yesDeleteBasketModal = () => {
        this.props.deleteCart();
        this.setState({
            deletebasketmodalIsOpen: false
        })
      }

      closeDeleteBasketModal = () => {
        this.setState({
            deletebasketmodalIsOpen: false
        })
      }

      openVoucherBasketModal = () => {
        this.setState({
            vouchermodalIsOpen: true
        })
        }

        closeVoucherBasketModal = () => {
            this.setState({
                vouchermodalIsOpen: false
              });
        }

    render(){
        return(
            <>
      <Modal
        isOpen={this.state.deletebasketmodalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        className="Modal p-5"
        overlayClassName="Overlay"
      >
        <div className="row"><p>Are You Sure You Want To Delete Basket?</p></div>

        <div className="text-center"><button className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap me-3" style={{ border: '1px solid #F44336' , color: '#F44336' }} onClick={this.yesDeleteBasketModal}>YES</button>
                <button className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap" style={{ border: '1px solid #00796B' , color: '#00796B' }} onClick={this.closeDeleteBasketModal}>NO</button></div>
      </Modal>
      <Modal
        isOpen={this.state.vouchermodalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
       
        <button onClick={this.closeVoucherBasketModal}>Yes</button>
        <button onClick={this.closeVoucherBasketModal}>No</button>
        <div>I am a modal</div>
      </Modal>

                {this.props.cartItems.length !== 0 && (
                    <><div className="container d-flex justify-content-between align-items-center p-2 pe-3" style={{ width: '100%'  , background: '#00BCD4' }}>
                    <h3 className="f_Poppins" style={{ color: 'white' , marginBottom: 0 , padding: '0.5rem'}}>MyBasket</h3>
                    <div>
                    <Link className="p-2 f_OpenSans_Bold bg-transparent mybr-w text-white nonedecoration mybr-w rounded">Continue shopping</Link>
                    <Link style={{ marginLeft: '1rem' }} className="p-2 f_OpenSans_Bold bg-transparent mybr-w text-white nonedecoration mybr-w rounded" >Check out now</Link>
                    </div>
                 </div>
            <div className="container pt-1 pb-1" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="d-flex justify-content-between align-items-center p-3 bg-white mt-2">
                    <div className="d-flex">
                    <p className="pb-0 text-nowrap">You have booked a <span className="f_OpenSans_Bold">DELIVERY</span> slot:</p><div className="ms-5"><p className="f_OpenSans_Bold mb-0">Wednesday 4th January</p><p className="f_OpenSans_Bold  mb-0">07:00 - 11:00</p ><p className="f_OpenSans_Bold  mb-0">at Doncaster Branch</p></div>
                    </div>
                    <Link variant="text" style={{ display: 'block' , textDecoration: 'underline' }}>CHANGE SLOT</Link>
                </div>
                <div className="d-flex justify-content-between align-items-center p-3 bg-white mt-2">
                    <div className="d-flex align-items-center">
                    <div><Link to="../BookSlot" className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap" style={{ border: '1px solid #00796B' , color: '#00796B' }}>Book Your Slot</Link></div>
                    <p style={{ marginBottom: 0 , marginLeft: '0.5rem' }}>You have not yet booked a slot for delivery or collection.
                    Prices and availability can only be confirmed when you do.</p>
                    <p style={{ marginBottom: 0 , marginLeft: '0.5rem' }}>Your COLLECTION slot for Monday 2nd January has now expired. Please book a new slot.</p>
                    </div>
                    <Link to="../BookSlot" className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap" style={{ border: '1px solid #FF5722' , color: '#FF5722' }}>Book a new slot</Link>
                    </div>
                <div className="d-flex justify-content-between align-items-center p-3 bg-white mt-2">
                <div>
                    <p>
                        Total Items
                    </p>
                    <p style={{ marginBottom: 0  }}>
                        3 products
                    </p>
                </div>
                <div className="text-center">
                    <p>
                        Delivery Price
                    </p>
                    <p style={{ marginBottom: 0 }}>
                        £143.37
                    </p>
                    <p style={{ marginBottom: 0  }}>
                    including £5.85 VAT
                    </p>
                </div>
                <div>
                    <div onClick={this.openDeleteBasketModal} variant="text" style={{ cursor: 'pointer' , display: 'block' , color: '#F44336', textDecoration: 'underline'  }}>DELETE BASKET</div>
                    <div onClick={this.openVoucherBasketModal} variant="text" style={{cursor: 'pointer' , display: 'block', textDecoration: 'underline'  }}>ADD VOUCHER</div>
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
                        <label class="form-check-label" for="inlineRadio2">Pay By Bank</label>
                        </div>
                        <img
                        style={{ width: '6rem' , height: 'auto' }}
                            src="/assets/images/pbb.a038413a.png"
                            alt="Pay By Bank"
                    ></img>

                    </div>
                </div>
                <CartItem />
            <div className="text-end my-3">
                <Link className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap me-3" style={{ border: '1px solid #00796B' , color: '#00796B' }}>Continue shopping</Link>
                <Link className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap" style={{ border: '1px solid #00796B' , color: '#00796B' }}>Check out now</Link>
            </div>
            </div></>
                
            )}
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (categotyId) => dispatch(deleteCart(categotyId))
    }
  }
  
const mapStateToProps = (state) => ({
    cartItems: state.basket.cartItems
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Basket)