import { Link } from 'react-router-dom'


function ItemCard(props){
    return(
      <>
       <Link to="/ProductDetail" style={{  textDecoration: 'none'  }}>
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
      <div className="row">
        <div className="d-flex justify-content-between">
          <div>
            {props.item.tradePrice}
            </div>
        <div>
          {props.item.salesPrice}
        </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            {props.item.tradePrice}
            </div>
        <div>
          {props.item.salesPrice}
        </div>
        </div>
      </div>
      <div className="row">
        {/* <button variant="contained">ADD ITEM</button> */}
      </div></div>
      </div>
      </Link>
        </>
    );
  }
  

  export default ItemCard;