import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import axios from "axios";
import ItemCard from "./ItemCard";
import { getProductByCategory } from "../../Slices/category.slice";




class CategoryPagination extends Component {

  render() {
    return (
      <>
            <InfiniteScroll
            className="pb-5"
            dataLength={this.props.categoryItems.length}
            next={() => this.props.getProductByCategory(0)}
            hasMore={this.props.categoryItems.length < 30}
            loader={
                <div className="centerTextalign parentLoader">
                <FontAwesomeIcon icon={faSpinner} className="spinner loaderIconSize"/>
                </div>
            }
            >
          <div className="container" style={{ boxShadow: '0 0px 21px -4px #ddd' }}>
            <div className="row justify-content-center h-100" style={{ borderRight: '1px solid #e0e0e0' , borderBottom: '1px solid #e0e0e0' , borderLeft: '1px solid #e0e0e0'}}  >
              {this.props.categoryItems.map((item) => (
                <>
                <div className="col-3 hoverableCard d-none d-xl-block" key={item.id + "col3"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'}}>
                  <ItemCard item={item}/>
                </div>
                <div className="col-4 hoverableCard d-none d-lg-block d-xl-none" key={item.id + "col4"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                  <ItemCard item={item}/>
                </div>
                <div className="col-6 hoverableCard d-none d-md-block d-lg-none" key={item.id + "col6"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                  <ItemCard item={item}/>
                </div>
                <div className="col-12 hoverableCard d-block d-md-none" key={item.id + "col12"} style={{ background: '#fff' , border: '0.5px solid #e0e0e0'  }}>
                  <ItemCard item={item}/>
                </div>
                </>
                ))}
              </div>
              </div>
            </InfiniteScroll>
      </>
            
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductByCategory: (categoryId) => dispatch(getProductByCategory({ categoryId }))
  }
}

const mapStateToProps = (state) => ({
  categoryItems: state.category.categoryItems,
  hasMore: state.category.hasMore
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPagination)
