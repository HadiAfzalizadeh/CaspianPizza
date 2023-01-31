import React, { Component } from "react";
import { HomePage } from "../SharedComponents/HomePage";
import { CategoryPage } from "./CategoryPage";
import  { Header } from "./Header";
import axios from "axios";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ProductDetail from "../DesktopComponents/ProductDetail"
import  Basket  from "../SharedComponents/Basket";
import BookSlot from "./BookSlot";
import  SignIn  from "../SharedComponents/SignIn";
import SignUp  from "../SharedComponents/SignUp";
import GuardedRoute from "../SharedComponents/GuardedRoute";
import { connect } from "react-redux";
import { Orders } from "./Orders";
import  OrderDetail from "./OrderDetail";
import Checkout from "./Checkout";
import { Footer } from "./Footer";
import CategoryService from "../../Services/category.service";




class DesktopApp extends Component {

  state = {
    currentCategotyId: -1,
    currentCategotyPage: 3,
    megaMenuItems: [],
    categotyHasMore: true,
    categotyItems: []
  };

  async componentDidMount(){
    axios.get("https://api.caspianpizza.ir/api/ProductCategory/GetAllProductCategories")
    .then(response => {
      this.setState({
        megaMenuItems: response.data.data
      });
    })
    .catch(error => {});
  }


  render() {
    return (
      <>
          <BrowserRouter>
          <Header selectCategoryId={this.selectCategoryId} megaMenuItems = { this.state.megaMenuItems }/>
            <Routes>
                <Route path="/">
                  <Route index element={<HomePage />}></Route>
                  <Route path="CategoryPage" element={<CategoryPage />}></Route>
                    <Route path="ProductDetail" element={<ProductDetail />}></Route>
                    <Route path="Basket" element={<Basket />}></Route>
                    <Route path="Checkout" element={<GuardedRoute  component={Checkout} distance="/" auth={this.props.isLoggedIn}/>}></Route>
                    <Route path="Auth">
                      <Route path="SignIn" element={<GuardedRoute  component={SignIn} distance="/" auth={!this.props.isLoggedIn}/>}></Route>
                      <Route path="SignUp" element={<GuardedRoute  component={SignUp} distance="/" auth={!this.props.isLoggedIn}/>}></Route>
                    </Route>
                    <Route path="BookSlot" element={<GuardedRoute  component={BookSlot} distance="/" auth={this.props.isLoggedIn}/>}></Route>
                    <Route path="MyOrders">
                    <Route path="Orders" element={<GuardedRoute  component={Orders} distance="/SignIn" auth={this.props.isLoggedIn}/>}></Route>
                    <Route path="OrderDetail" element={<GuardedRoute  component={OrderDetail} distance="/SignIn" auth={this.props.isLoggedIn}/>}></Route>
                    </Route>
                    <Route path="*" element={<GuardedRoute  component={HomePage} distance="/" auth={false}/>}></Route>
                </Route>
              </Routes>
              <Footer />
          </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ isLoggedIn: state.auth.isLoggedIn })

export default connect(mapStateToProps)(DesktopApp)