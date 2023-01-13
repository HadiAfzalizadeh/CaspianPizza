import { Link } from 'react-router-dom';
import BasketQuantity from './BasketQuantity';
import { useDispatch } from "react-redux";
import { setProductDetailId } from "../../Slices/category.slice";



function ItemCard(props){

  const dispatch = useDispatch();


    return(
      <>
       <div className="noselect" style={{  textDecoration: 'none'  }}>
      <div className="row text-center px-2 py-3">
     
      <div style={{ position: 'relative' }}>
        <img
        style={{ width: '100%' }}
          src={props.item.productImages.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + props.item.productImages[0].imageBody}  
          alt={props.item.name}
        ></img>    
        </div>
       
        </div>
  
        <div className="row text-secondary">
    <div><h4 className="cnterTextAlign" style={{ wordWrap: 'break-word' }}>{props.item.name}</h4>
    <div className="text">
      {props.item.description}
    </div>
      <div className="row w-100 text-center m-0">
      <p>£{props.item.salesPrice}</p>
      </div>
      <div className="row p-3 pt-0 m-0 cursorpointer">
        <BasketQuantity productId={props.item.id}/>
      </div>
      <div className="row p-3 pt-0 m-0">
      <Link to="/ProductDetail" className="p-2 mybr-w text-nowrap me-3 w-100 text-center text-decoration-none cursorpointer" style={{ border: '1px solid #FFC107' , color: '#0288D1' }} 
      onClick={() => {
        dispatch(setProductDetailId(props.item.id));
      }}><span>View Details</span></Link>
      </div>
      </div>
      </div>
      </div>
        </>
    );
  }
  

  export default ItemCard;