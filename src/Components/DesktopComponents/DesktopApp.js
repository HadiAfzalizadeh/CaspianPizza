import React, { Component } from "react";
import { HomePage } from "../SharedComponents/HomePage";
import { CategoryPage } from "./CategoryPage";
import  { Header } from "./Header";
import axios from "axios";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { ProductDetail } from "../DesktopComponents/ProductDetail"
import { Basket } from "../SharedComponents/Basket";
import BookSlot from "./BookSlot";
import  SignIn  from "../SharedComponents/SignIn";
import SignUp  from "../SharedComponents/SignUp";
import GuardedRoute from "../SharedComponents/GuardedRoute";
import { connect } from "react-redux";
import { Orders } from "./Orders";



class DesktopApp extends Component {

  state = {
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

  selectCategoryId = (categotyId) => {
    this.setState({
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
    return (
      <>
          <BrowserRouter>
          <Header selectCategoryId={this.selectCategoryId} megaMenuItems = { this.state.megaMenuItems }/>
            <Routes>
                <Route path="/">
                  <Route index element={<HomePage />}></Route>
                  <Route path="CategoryPage" element={
                  <CategoryPage />}></Route>
                    <Route path="ProductDetail" element={<ProductDetail />}></Route>
                    <Route path="Basket" element={<Basket />}></Route>
                    <Route path="BookSlot" element={<BookSlot />}></Route>
                    <Route path="Auth">
                      <Route path="SignIn" element={<GuardedRoute  component={SignIn} distance="/" auth={!this.props.isLoggedIn}/>}></Route>
                      <Route path="SignUp" element={<GuardedRoute  component={SignUp} distance="/" auth={!this.props.isLoggedIn}/>}></Route>
                    </Route>
                    <Route path="BookSlot" element={<BookSlot />}></Route>
                    <Route path="Orders" element={<GuardedRoute  component={Orders} distance="/SignIn" auth={this.props.isLoggedIn}/>}></Route>
                    <Route path="*" element={<GuardedRoute  component={HomePage} distance="/" auth={false}/>}></Route>
                </Route>
              </Routes>
          </BrowserRouter>
      </>
    );
  }
}



const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn })

export default connect(mapStateToProps)(DesktopApp)