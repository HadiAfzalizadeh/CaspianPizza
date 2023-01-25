
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus , faMinus} from "@fortawesome/free-solid-svg-icons";
import { useDispatch , useSelector } from "react-redux";
import { addToCart , removeFromCart, createCart } from '../../Slices/basket.slice';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React, {  useState  } from "react";



const BasketQuantity = (props) => {

    const [loadingPlus, setLoadingPlus] = useState(false);
    const [loadingMinus, setLoadingMinus] = useState(false);
    const [loadingAdd, setloadingAdd] = useState(false);

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.basket);

    return(
        <div>
        {cartItems.find((item) => item.productId === props.productId) && (
        <div className="w-100 text-center"><div className="input-group quantity mx-auto text-nowrap">
            <div className="input-group-btn d-inline">
                <button className="btn btn-sm btn-primary btn-minus border-0 h-100" style={{ backgroundColor: '#F44336' , borderRadius: 0 }}  onClick={() => 
                     {
                        if(!loadingPlus && !loadingMinus){
                            setLoadingMinus(true);
                        const { productId } = props;
                        dispatch(removeFromCart({productId})).unwrap()
                        .then(() => {
                            setLoadingMinus(false);
                        })
                        .catch(()=> {setLoadingMinus(false);});
                        }
                    }}>
                {!loadingMinus && (<FontAwesomeIcon icon={faMinus} size="xl"/>)}
                {loadingMinus && (<FontAwesomeIcon icon={faCircleNotch} className="spinner" size="xl"/>)}
                </button>
            </div>
            <input id="bq" type="text" className="form-control border-0 text-center" value=
            {cartItems.filter((item) => item.productId === props.productId)[0].count}
             style={{  backgroundColor: '#FFC107' , height: '40px' }} disabled></input>
            <div className="input-group-btn d-inline">
                <button className="btn btn-sm btn-primary btn-plus border-0 h-100" style={{ backgroundColor: '#00796B' , borderRadius: 0 }} onClick={() => 
                     {
                        if(!loadingPlus && !loadingMinus){
                            setLoadingPlus(true);
                            const { productId } = props;
                            dispatch(addToCart({productId}))
                            .unwrap()
                            .then(() => {
                                setLoadingPlus(false);
                            })
                            .catch(()=> {setLoadingPlus(false);});
                        }
                    }}>
                {!loadingPlus && (<FontAwesomeIcon icon={faPlus} size="xl"/>)}
                {loadingPlus && (<FontAwesomeIcon icon={faCircleNotch} className="spinner"  size="xl"/>)}
                </button>
            </div>
        </div></div>)}
        {!cartItems.find((item) => item.productId === props.productId) && (
            <div className="d-flex mybr-w text-nowrap w-100 text-center justify-content-center align-items-center py-0" style={{ border: '1px solid #00796B' , color: '#00796B', height: '40px' }} onClick={() => 
                     {
                        if(!loadingAdd){
                            setloadingAdd(true);
                            const { productId } = props;
                            dispatch(createCart({productId}))
                            .unwrap()
                            .then(() => {
                                setloadingAdd(false);
                            })
                            .catch(()=> {setloadingAdd(false);});
                        }
                    }}>
                        {!loadingAdd && (<span className="f_Poppins m-0">Add To Basket</span>)}
                    {loadingAdd && (<FontAwesomeIcon style={{ color: '#00796B' }} icon={faCircleNotch} className="spinner p-0"  size="xl"/>)}
                        </div>
        )}
        </div>
        
    )
}

export default BasketQuantity;