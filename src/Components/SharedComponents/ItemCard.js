import { Link } from 'react-router-dom';
import BasketQuantity from './BasketQuantity';


function ItemCard(props){
    return(
      <>
       <div className="noselect" style={{  textDecoration: 'none'  }}>
      <div className="row text-center px-2 py-3 cursorpointer">
     
      <div style={{ position: 'relative' }}>
        <img
        style={{ width: '100%' }}
          src={props.item.productImages.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + props.item.productImages[0].imageBody}  
          alt={props.item.name}
        ></img>    
        </div>
       
        </div>
  
        <div className="row cursorpointer text-secondary">
    <div><h4 className="cnterTextAlign" style={{ wordWrap: 'break-word' }}>{props.item.name}</h4>
    <div className="text">
      {props.item.description}
    </div>
      <div className="row w-100 text-center m-0">
      <p>£{props.item.salesPrice}</p>
      </div>
      <div className="row p-3 pt-0 m-0">
        <BasketQuantity productId={props.item.id}/>
      </div>
      </div>
      </div>
      </div>
        </>
    );
  }
  

  export default ItemCard;