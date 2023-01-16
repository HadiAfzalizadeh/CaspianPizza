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
        <img
        style={{ width: '100%', height:'auto'}}
          src={props.item.productImages.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + props.item.productImages[0].imageBody}  
          alt={props.item.name}
        ></img>    
        </div>
  
        <div className="row text-secondary">
      <h5 className="text-center f_Poppins mb-0 captiontext" style={{ wordWrap: 'break-word' , fontSize: '1.3em', lineHeight: '1.31em', height: '2.62em' }}>{props.item.name}</h5>
    <div className="text-center text pt-0" style={{ wordWrap: 'break-word' , fontSize: '1em', lineHeight: '1.1em', height: '3.4em' }}>
      {props.item.description}
    </div>
      <div className="row w-100 text-center m-0 my-1">
      <p className='f_Poppins mb-0'>£{props.item.salesPrice}</p>
      </div>
      <div className="row p-3 pt-0 m-0 cursorpointer">
        <BasketQuantity productId={props.item.id}/>
      </div>
      {/* <div className="row p-3 pt-0 m-0">
      <Link to="/ProductDetail" className="p-2 mybr-w text-nowrap me-3 w-100 text-center text-decoration-none cursorpointer" style={{ border: '1px solid #FFC107' , color: '#0288D1' }} 
      onClick={() => {
        dispatch(setProductDetailId(props.item.id));
      }}><span>View Details</span></Link>
      </div> */}
      </div>
      </div>
        </>
    );
  }
  

  export default ItemCard;