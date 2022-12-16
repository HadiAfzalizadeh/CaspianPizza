import React, { Component } from "react";
import { HomePage } from "../SharedComponents/HomePage";
import { CategoryPage } from "./CategoryPage";
import { Header } from "./Header";
import axios from "axios";
import { ProductDetail } from "./ProductDetail";

export class DesktopApp extends Component {

  state = {
    currentMainPage: "",
    currentCategotyId: -1,
    currentCategotyPage: 3,
    megaMenuItems: [],
    categotyHasMore: true,
    categotyItems: []
  };

  componentDidMount(){
    axios.get("https://api.caspianpizza.ir/api/ProductCategory/GetAllProductCategories")
    .then(response => {
      this.setState({
        megaMenuItems: response.data.data
      });
    })
    .catch(error => {});
  }

  selectComponent() {
    switch (this.state.currentMainPage) {
      case "h":
        return <HomePage />;
      case "c":
        return <CategoryPage currentMainPage={this.state.currentMainPage} currentCategotyId={this.state.currentCategotyId} currentCategotyPage = {this.state.currentCategotyPage} categotyHasMore = {this.state.categotyHasMore} categotyItems = { this.state.categotyItems} fetchMoreCategoryData = {this.fetchMoreCategoryData}/>;
      default:
        return <HomePage />;
    }
  }

  selectCategoryId = (categotyId) => {
    this.setState({
        currentMainPage: "c",
        currentCategotyId: categotyId
    });
    axios
    .get(
      "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=1&PageSize=8&ProductCategoryId=" +
      categotyId
    )
    .then((response) => {
      this.setState({
        categotyItems: response.data.data,
        currentCategotyPage: 3,
        categotyHasMore: true
      });
      if(response.data.meta.totalRows === this.state.categotyItems.length){
          this.setState({
            categotyHasMore: false
          });
      }
    })
    .catch((error) => {});
  }

  fetchMoreCategoryData = () => {
    this.setState({
      currentCategotyPage: this.state.currentCategotyPage + 1,
    });
    axios
      .get(
        "https://api.caspianpizza.ir/api/Product/GetProductByCategory?Page=" +
        this.state.currentCategotyPage +
          "&PageSize=4&ProductCategoryId=" +
          this.state.currentCategotyId
      )
      .then((response) => {
        this.setState({
          categotyItems: this.state.categotyItems.concat(response.data.data),
        });
        if(response.data.meta.totalRows === this.state.categotyItems.length){
            this.setState({
              categotyHasMore: false
            });
        }
      })
      .catch((error) => {});
  };

  render() {
    if(this.state.megaMenuItems.length === 0){
      return null;
    }
    return (
      <>
        {/* <ProductDetail /> */}
        <Header selectCategoryId={this.selectCategoryId} megaMenuItems = { this.state.megaMenuItems }/>
        <div className="container">
          <div className="row">{this.selectComponent()}</div>
        </div>
      </>
    );
  }
}
