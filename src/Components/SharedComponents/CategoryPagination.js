import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { useSelector , useDispatch } from "react-redux";

function ItemImage(props){
  return(
    <div style={{ position: 'relative' }}>
      <img
      style={{ width: '100%' , height: 'auto' }}
        src={props.item.productImages.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + props.item.productImages[0].imageBody}  
        alt={props.item.name}
      ></img>
      <Link className="paginationAddToCartLink btn py-2 px-4 mt-3" style={{ position: 'absolute' , right: 0, left: 0, zIndex:2000 , bottom: 0, marginLeft: 'auto' , marginRight: 'auto', textDecoration: 'none' , color: '#fff' , borderColor: '#fff' , display: 'none' }}>Add To Cart</Link>
    </div>
  );
}

function ItemDescription(props){
  return(<div><h4 className="cnterTextAlign" style={{ wordWrap: 'break-word' }}>{props.item.name}</h4>
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
    </div></div>);
}

function PortraitCard(props){
  return(
    <div className="row">
    {props.items.map((item) => (
      <div className="col-3 hoverableCard" key={item.id} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                <div className="row text-center pt-3">
                  <ItemImage item={item}/>
                </div>
                <div className="row">
                  <ItemDescription item={item}/>
                </div>
      </div>
      ))}
    </div>

  );
}

function LandscapeCard(props){
  return(props.items.map((item) => (
    <div key={item.id} className="row hoverableCard" style={{ background: '#fff' , border: '0.5px solid #e0e0e0'}}>
      <div className="col-auto" style={ isMobile ? { width: '10rem' } : { width: '15rem' }}>
        <ItemImage   item={item}/>
      </div>
      <div className="col">
      <ItemDescription item={item}/>
      </div>
    </div>
  )));
}


class CategoryPagination extends Component {

  
  state = {
    currentCategotyId: -1,
    page: 1,
    hasMore: true,
    items: []
  };

  nextCategoryRequest = (pageSize) => {
    if(this.state.items.length  >  7){
      alert('fdf');
      axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + this.state.page + "&PageSize=" + pageSize + "&ProductCategoryId=" +
      this.props.currentCategotyId
    )
    .then((response) => {
      this.setState({
        items: this.state.items.concat(response.data.data)
      });
      if(response.data.meta.totalRows === this.state.items.length){
          this.setState({
            hasMore: false
          });
      }
    })
    .catch((error) => {});
    }
   
  }

  categoryRequest = (pageSize) => {
    axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + this.state.page + "&PageSize=" + pageSize + "&ProductCategoryId=" +
      this.props.currentCategotyId
    )
    .then((response) => {
      this.setState({
        items: response.data.data
      });
      if(response.data.meta.totalRows === this.state.items.length){
          this.setState({
            hasMore: false
          });
      }
    })
    .catch((error) => {});
  }

  componentDidMount(){
    this.categoryRequest(8);
  }



  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.currentCategotyId !== this.props.currentCategotyId){
      this.setState({
        page: 1
      });
      this.categoryRequest(8);
    }
    
  }

  render() {
    return (
      <>
      <div className="container f_Poppins my-1" style={{ height: '3rem' }}>
        <div className="row align-items-center text-center" style={{ color: 'white' , backgroundColor: '#795548' , height: '100%' }}>
          <h5 className="mb-0">Bagels</h5>
        </div> 
        </div>
      <InfiniteScroll
            style={{ marginBottom: '20px' }}
            dataLength={this.props.items.length}
            next={this.props.fetchMoreCategoryData}
            hasMore={this.props.hasMore}
            loader={
                <div className="centerTextalign parentLoader">
                <FontAwesomeIcon icon={faSpinner} className="spinner loaderIconSize"/>
                </div>
            }
            >
              <div className="container justify-content-center" style={{ boxShadow: '0 0px 21px -4px #ddd' }}>
                      <Link to="/ProductDetail" style={{ textDecoration: 'none' , color: 'black'}}>{(isMobile || this.props.isPortrate) ? <LandscapeCard items={this.props.items}/> : <PortraitCard items={this.props.items}/>} 
                      </Link>
              </div>
            </InfiniteScroll>

            {/* <InfiniteScroll
            style={{ marginBottom: '20px' }}
            dataLength={this.state.items.length}
            next={this.nextCategoryRequest(4)}
            hasMore={this.state.hasMore}
            loader={
                <div className="centerTextalign parentLoader">
                <FontAwesomeIcon icon={faSpinner} className="spinner loaderIconSize"/>
                </div>
            }
            >
              <div className="container justify-content-center" style={{ boxShadow: '0 0px 21px -4px #ddd' }}>
                      <Link to="/ProductDetail" style={{ textDecoration: 'none' , color: 'black'}}>{(isMobile || this.props.isPortrate) ? <LandscapeCard items={this.state.items}/> : <PortraitCard items={this.state.items}/>} 
                      </Link>
              </div>
            </InfiniteScroll> */}


      </>
            
    );
  }
}


const mapStateToProps = (state) => ({
  //  isPortrate: state.category.itemOrientation === "portrait" ? true : false
  currentCategotyId: state.category.currentCategotyId
})

export default connect(mapStateToProps)(CategoryPagination)
