import React, { Component , useEffect} from "react";
import { Link  } from 'react-router-dom'
import { connect } from "react-redux";
import { setCategotyId } from "../../Slices/category.slice";

class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      selectedItems: [],
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.toggleMegaMenu(false);
    }
  }

  componentDidMount() {
    this.setState({
      selectedItems: this.setSelectedItems(null, this.props.items),
    });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  setSelectedItems(id, items) {
    var selectedItemsTemp = [];
    if (
      items.filter((item) => item.parentProductCategoryId === id).length > 0
    ) {
      selectedItemsTemp.push(
        items.filter((item) => item.parentProductCategoryId === id)[0].id
      );
      while (
        items.filter(
          (item) =>
            item.parentProductCategoryId ===
            selectedItemsTemp[selectedItemsTemp.length - 1]
        ).length > 0
      ) {
        selectedItemsTemp.push(
          items.filter(
            (item) =>
              item.parentProductCategoryId ===
              selectedItemsTemp[selectedItemsTemp.length - 1]
          )[0].id
        );
      }
    }
    return selectedItemsTemp;
  }

  itemClicked = (id) => {
    // let navigate = useNavigate();
    // const dispatch = useDispatch();
    var selectedItemsTemp = this.state.selectedItems;
    if (
      this.state.items.filter((item) => item.id === id)[0]
        .parentProductCategoryId === null
    ) {
      selectedItemsTemp.splice(0);
    } else {
      selectedItemsTemp.splice(
        selectedItemsTemp.indexOf(
          this.state.items.filter((item) => item.id === id)[0]
            .parentProductCategoryId
        ) + 1
      );
    }
    selectedItemsTemp.push(id);
    this.setState({
      selectedItems: selectedItemsTemp.concat(
        this.setSelectedItems(id, this.state.items)
      ),
    });
    if (
      this.state.items.filter((item) => item.parentProductCategoryId === id)
        .length === 0
    ) {
      this.props.toggleMegaMenu(false);
      this.props.setCategotyId(id);
      // this.props.selectCategoryId(id);
      // dispatch(getProductByCategory({page:1,pageSize:8,categotyId:9}));
    }
  };

  getItemLinkRoute = (id) => {
    return this.state.items.filter((item) => item.parentProductCategoryId === id).length === 0 ? '/CategoryMenu' : null;
  }

  mustNavigate(id){
    return (this.state.items.filter((item) => item.parentProductCategoryId === id).length === 0) ? "./CategoryPage" : null;
  }

  render() {
   
    return (
      <div ref={this.wrapperRef} className="container-lg position-absolute start-50 translate-middle-x" style={{  zIndex: 100000 , borderColor: '#B2BEB5', borderStyle: 'solid' , borderWidth:  '0 1px 1px 1px' , backgroundColor: 'white' , color: '#7c7c7c' }}>
        <div className="row bottom-border p-3">
          <div className="d-flex">
            <p className="me-3 mb-0">OFFERS</p>
            <p className="me-3 mb-0">NEW PRODUCTS</p>
            <p className="me-3 mb-0">HALAL RANGE</p>
            <p className="me-3 mb-0">OWN BRANDS</p>
          </div>
            </div>
            <div className="row">
              <div className="col right-border p-3">
                <nav>
                  {this.state.items
                    .filter((item) => item.parentProductCategoryId === null)
                    .map((item) => (
                      <Link
                      to={this.mustNavigate(item.id)}
                        key={item.id}
                        onClick={() => this.itemClicked(item.id)}
                        className="linkButton item"
                      >
                        <p className="parentItemText">{item.name}</p>
                      </Link>
                    ))}
                </nav>
              </div>
              <div className="col right-border p-3">
                <nav>
                  {this.state.items
                    .filter(
                      (item) =>
                        item.parentProductCategoryId ===
                        this.state.selectedItems[0]
                    )
                    .map((item) => (
                      <Link
                      to={this.mustNavigate(item.id)}
                        key={item.id}
                        onClick={() => this.itemClicked(item.id)}
                        className="linkButton item"
                      >
                        <p className="parentItemText">{item.name}</p>
                      </Link>
                    ))}
                </nav>
              </div>
              <div className="col right-border p-3">
                <nav>
                  {this.state.items
                    .filter(
                      (item) =>
                        item.parentProductCategoryId ===
                        this.state.selectedItems[1]
                    )
                    .map((item) => (
                      <Link
                      to={this.mustNavigate(item.id)}
                        key={item.id}
                        onClick={() => this.itemClicked(item.id)}
                        className="linkButton item"
                      >
                        <p className="parentItemText">{item.name}</p>
                      </Link>
                    ))}
                </nav>
              </div>
              <div className="col p-3">
                <nav>
                  {this.state.items
                    .filter(
                      (item) =>
                        item.parentProductCategoryId ===
                        this.state.selectedItems[2]
                    )
                    .map((item) => (
                      <Link
                      to={this.mustNavigate(item.id)}
                        key={item.id}
                        onClick={() => this.itemClicked(item.id)}
                        className="linkButton item"
                      >
                        <p className="parentItemText">{item.name}</p>
                      </Link>
                    ))}
                </nav>
              </div>
            </div>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setCategotyId: (categotyId) => dispatch(setCategotyId(categotyId))
  }
}

export default connect(null,mapDispatchToProps)(MegaMenu)