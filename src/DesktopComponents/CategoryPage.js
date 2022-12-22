import { Component } from "react"
import { CategoryPagination } from "../SharedComponents/CategoryPagination"
import { Accordion } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList , faGrip} from "@fortawesome/free-solid-svg-icons"

export class CategoryPage extends Component {

    state={
        isPortrate: true
    }

    render(){
        return(
            <div className="container">
                <div className="row align-items-center" style={{ width: '100%' , height: '3rem' , background: '#00BCD4'  }}>
                    <div className="container d-flex justify-content-between f_Poppins" style={{ color: 'white' }}>
                        <div>
                            Home / Food 
                        </div>
                        <div>
                            Bagels
                        </div>
                        <div className="d-flex">
                            <div className="p-1">4 Products Found</div>
                            <FontAwesomeIcon className="p-1" icon={faList} onClick={() =>{this.setState({isPortrate: false})}} size="xl"/>
                            <FontAwesomeIcon className="p-1" icon={faGrip} onClick={() =>{this.setState({isPortrate: true})}} size="xl"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-3">
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
        <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="price-all"></input>
                            <label className="custom-control-label" for="price-all">All Price</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1"></input>
                            <label className="custom-control-label" for="price-1">$0 - $100</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2"></input>
                            <label className="custom-control-label" for="price-2">$100 - $200</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3"></input>
                            <label className="custom-control-label" for="price-3">$200 - $300</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4"></input>
                            <label className="custom-control-label" for="price-4">$300 - $400</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="price-5"></input>
                            <label className="custom-control-label" for="price-5">$400 - $500</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Features</Accordion.Header>
        <Accordion.Body>
        <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" checked id="price-all"></input>
                            <label className="custom-control-label" for="price-all">All Price</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1"></input>
                            <label className="custom-control-label" for="price-1">$0 - $100</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2"></input>
                            <label className="custom-control-label" for="price-2">$100 - $200</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3"></input>
                            <label className="custom-control-label" for="price-3">$200 - $300</label>
                            <span className="badge border font-weight-normal">246</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4"></input>
                            <label className="custom-control-label" for="price-4">$300 - $400</label>
                            <span className="badge border font-weight-normal">145</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                            <input type="checkbox" className="custom-control-input" id="price-5"></input>
                            <label className="custom-control-label" for="price-5">$400 - $500</label>
                            <span className="badge border font-weight-normal">168</span>
                        </div>
                    </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                <div className="col-9">
                    <CategoryPagination  
                    currentCategotyId={this.props.currentCategotyId }
                    currentCategotyPage = {this.props.currentCategotyPage }
                    hasMore = {this.props.categotyHasMore } 
                    items = { this.props.categotyItems }
                    fetchMoreCategoryData = {this.props.fetchMoreCategoryData}
                    isPortrate = {this.state.isPortrate}/>    
                </div>
                </div>
            </div>
        )
    }
}