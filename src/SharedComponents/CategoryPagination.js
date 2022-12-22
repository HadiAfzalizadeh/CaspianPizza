import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from 'react-device-detect';

function ItemImage(props){
  return(
    <div>
      <img
      style={{ width: '100%' , height: 'auto' }}
        src={props.item.productImages.length === 0 ? "/assets/images/catPicTemp.jpg" : "data:image/png;base64, " + props.item.productImages[0].imageBody}  
        alt={props.item.name}
      ></img>
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
      <div className="col-3 hoverableCard" key={item.id} style={{ background: '#fff' , border: '0.5px solid #e0e0e0' , cursor: 'pointer' }}>
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
    <div key={item.id} className="row hoverableCard" style={{ background: '#fff' , border: '0.5px solid #e0e0e0' , cursor: 'pointer' }}>
      <div className="col-auto" style={ isMobile ? { width: '10rem' } : { width: '15rem' }}>
        <ItemImage   item={item}/>
      </div>
      <div className="col">
      <ItemDescription item={item}/>
      </div>
    </div>
  )));
}

export class CategoryPagination extends Component {

  render() {
    return (
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
                      {(isMobile || this.props.isPortrate) ? <LandscapeCard items={this.props.items}/> : <PortraitCard items={this.props.items}/>} 
              </div>
            </InfiniteScroll>
    );
  }
}
