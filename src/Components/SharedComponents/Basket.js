import { Component , useEffect} from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'
import BasketQuantity from "./BasketQuantity";
import Modal from 'react-modal';
import { useDispatch , useSelector } from "react-redux";
import { deleteFromCart } from '../../Slices/basket.slice';
import { connect } from "react-redux";
import { deleteCart , getMyCart } from "../../Slices/basket.slice";

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
                         <p style={{ marginBottom: 0 }}>£{item.price}</p>
                     </div>
                         <div style={{ maxWidth: '200px' }}><BasketQuantity  productId={item.productId}/></div>
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

                
                    <div className="container d-flex justify-content-between align-items-center p-2 pe-3" style={{ width: '100%'  , background: '#00BCD4' }}>
                    <h3 className="f_Poppins" style={{ color: 'white' , marginBottom: 0 , padding: '0.5rem'}}>MyBasket</h3>
                    {this.props.cartItems.length !== 0 && (<div>
                    <Link to="/BookSlot" className="p-2 f_OpenSans_Bold bg-transparent mybr-w text-white nonedecoration mybr-w rounded">Continue</Link>
                    </div>)}
                 </div>
            
            <div className="container pt-1 pb-2" style={{ backgroundColor: '#F5F5F5' }}>
            {this.props.cartItems.length !== 0 && (<><div className="d-flex justify-content-between align-items-center p-3 bg-white mt-2">
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
                    <div onClick={this.openDeleteBasketModal} variant="text" className="f_Poppins" style={{ cursor: 'pointer' , display: 'block' , color: '#F44336', textDecoration: 'underline'  }}>DELETE BASKET</div>
                    {/* <div onClick={this.openVoucherBasketModal} variant="text" style={{cursor: 'pointer' , display: 'block', textDecoration: 'underline'  }}>ADD VOUCHER</div> */}
                </div>
                </div>
                <CartItem />
            <div className="text-end my-3">
                <Link to="/BookSlot" className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap me-3" style={{ border: '1px solid #00796B' , color: '#00796B' }}>Continue</Link>
            </div></>)}
            {this.props.cartItems.length === 0 && (<div className="p-3 bg-white mt-2 p-5 text-center"><h1 className="f_Poppins mytextsecondry">Your Basket Is Empty</h1></div>)}
            </div>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: () => dispatch(deleteCart()),
        getMyCart: () => dispatch(getMyCart())
    }
  }
  
const mapStateToProps = (state) => ({
    cartItems: state.basket.cartItems,
    sumAmount: state.basket.sumAmount
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Basket)