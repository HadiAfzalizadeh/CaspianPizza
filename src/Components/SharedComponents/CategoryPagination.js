import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import axios from "axios";
import ItemCard from "./ItemCard";




class CategoryPagination extends Component {

  
  state = {
    currentCategotyId: -1,
    page: 3,
    hasMore: true,
    items: []
  };

  componentDidMount(){
    axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + 1 + "&PageSize=" + 8 + "&ProductCategoryId=" +
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

  
  componentDidUpdate(prevProps) {
    if(prevProps.currentCategotyId !== this.props.currentCategotyId ) {
      this.setState({
        items: [],
        hasMore: true,
        currentCategotyId: -1,
         page: 3,
      });
      axios
      .get(
        "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + 1 + "&PageSize=" + 8 + "&ProductCategoryId=" +
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
  }

  render() {
    return (
      <>
            <InfiniteScroll
            className="pb-5"
            dataLength={this.state.items.length}
            next={() => {
                axios.get(
                  "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" + this.state.page + "&PageSize=" + 4 + "&ProductCategoryId=" +
                  this.props.currentCategotyId).then((response) => {
                  this.setState({
                    items: this.state.items.concat(response.data.data),
                    page: this.state.page + 1
                  });
                  if(response.data.meta.totalRows === this.state.items.length){
                      this.setState({
                        hasMore: false
                      });
                  }
                }).catch((error) => {})  
              }
            }
            hasMore={this.state.hasMore}
            loader={
                <div className="centerTextalign parentLoader">
                <FontAwesomeIcon icon={faSpinner} className="spinner loaderIconSize"/>
                </div>
            }
            >
          <div className="container" style={{ boxShadow: '0 0px 21px -4px #ddd' }}>
            <div className="row justify-content-center h-100" style={{ borderRight: '1px solid #e0e0e0' , borderBottom: '1px solid #e0e0e0' , borderLeft: '1px solid #e0e0e0'}}  >
              {this.state.items.map((item) => (
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


const mapStateToProps = (state) => ({
  //  isPortrate: state.category.itemOrientation === "portrait" ? true : false
  currentCategotyId: state.category.currentCategotyId
})

export default connect(mapStateToProps)(CategoryPagination)
