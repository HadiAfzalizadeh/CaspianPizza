import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import  MegaMenu  from "./MegaMenu";
import { Button } from "@mui/material";

import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../../Slices/auth.slice";
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
// import animate from 'css-animation';


function ShowSignInOrSignOut() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  if(isLoggedIn){
    return(
    // <Button onClick={() => dispatch(logout())} variant="contained">Log Out</Button>
    <div className="cursorpointer position-relative h-100 m-0 d-inline-block">
    <div className="container p-0 f_Poppins align-self-center h-100" style={{ display: 'contents' }}><FontAwesomeIcon style={{ marginRight: '5px' , color: 'white' }} icon={ faRightToBracket }/>My Account</div>
    <div className="position-absolute top-100 p-2" style={{ zIndex: 1000000 , backgroundColor: '#00796B' }}>dsfd</div>
    {/* <div className="position-absolute">dasdas</div> */}
    </div>
    )
  }else{
    return(
      <Link to="/Auth/SignIn" className="f_Poppins" style={{ color: '#FFEB3B' , textDecoration: 'none', whiteSpace: 'nowrap' }}><FontAwesomeIcon style={{ marginRight: '5px' , color: 'white'}} icon={ faRightToBracket }/>Sign In / Register</Link>
    )
  }
}

export class Header extends Component {
  state = {
    openMenu: false,
  };

  toggleMegaMenu = () => {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  };

  showMegaMenu() {
    return this.state.openMenu === true ? (
      <div className="position-relative">
      <MegaMenu
        className = ""
          selectCategoryId={this.props.selectCategoryId}
          items={this.props.megaMenuItems}
          toggleMegaMenu = {this.toggleMegaMenu}
        />
      </div>
    ) : null;
  }

  render() {
    return (
      <div className="container-fluid noselect mb-2" style={{ backgroundColor: '#FFC107' }}>
        <div className="row" style={{ backgroundColor: '#795548' }}>
          <div className="col-sm-3 align-self-center text-center p-0 d-none d-sm-block">
              <Link to="/">
                  <img
                    style={{ maxWidth:'139px', height: "auto" }}
                    src="/logo.png"
                    alt="logo"></img>
                </Link>
          </div>
          <div className="col-sm-9" >
            <div className="row align-items-center" style={{ backgroundColor: '#00796B' ,  height: '2.5rem'}}>
              <div className="col h-100">
                <ShowSignInOrSignOut />
              </div>
              <div className="col text-center f_Poppins d-none d-xl-block" style={{ color: 'white' , whiteSpace: 'nowrap' }}>Welcome to Caspian Pizza online store</div>
              <div className="col text-end">
                <div className="d-inline-flex align-items-center pe-5">
                  <Link to="/Basket" style={{backgroundColor:'#FFC107' , color: '#00796B' , textDecoration: 'none' , borderRadius: '5px', whiteSpace: 'nowrap'}} className="px-2 py-1 me-1 d-flex align-items-center"><FontAwesomeIcon className="py-1" style={{  marginRight: '5px'}} icon={ faCartShopping } color="white"/><p className="mb-0 f_Poppins d-none d-md-block">My Basket</p></Link>
                  <Link className="f_Poppins px-2 py-1" style={{ color: '#FFEB3B' , textDecoration: 'none' , border: '1px solid #FFC107' , borderRadius: '5px' , whiteSpace: 'nowrap'}}>Checkout</Link>
                </div>
              </div>
            </div>
            <div className="row align-items-center" style={{  height: '5rem' , background: '#FFC107'}}>
            <div className="row">
              <div className="col-auto d-block d-sm-none" style={{ backgroundColor: '#795548' }}>
              <Link to="/">
                      <img
                      className="m-2"
                        style={{ width:'80px' , height: 'auto' }}
                        src="/logo.png"
                        alt="logo"></img>
                    </Link>
              </div>
              <div className="col align-self-center d-xl-none">
                <div className="row text-center d-block d-sm-none">
                <p className="text-nowrap f_Poppins" style={{ color: '#00796B' }}>Welcome to Caspian Pizza online store</p>
                </div>
                <div className="row">
                <div className="mx-auto d-flex align-items-center text-center" style={{width: '100%'}}>
                <div className="input-group">
                      <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Search"></input>
                      <div className="input-group-append">
                          <button style={{ borderRadius: 0 , backgroundColor: '#00796B' , borderColor: 'none' }} className="btn btn-primary px-3"><FontAwesomeIcon icon={ faMagnifyingGlass } style={{ color: 'white' }}/></button>
                      </div>
                  </div>
                  <p className="f_Poppins me-2 d-none d-sm-block mb-0" style={{ color: '#00796B' , fontSize: '15px' }}>Welcome to Caspian Pizza online store</p>
              </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center d-none d-sm-block text-center">
              <div className="d-flex justify-content-center" style={{ color: '#303F9F' }}>
                  <div className="f_Poppins " onClick={this.toggleMegaMenu} style={{ color: '#00796B' , cursor: 'pointer' , marginRight: '1rem' , whiteSpace: 'nowrap'}}>Browse & Shop</div>
                  <Link className="f_Poppins" style={{ color: '#00796B' , marginRight: '1rem' ,textDecoration: 'none' , whiteSpace: 'nowrap'}}>Offers</Link>
                  <Link className="f_Poppins" style={{ color: '#00796B' , textDecoration: 'none' , whiteSpace: 'nowrap'}}>Book Slot</Link>
              </div>
              </div>
              <div className="col-4 pe-4 d-none d-sm-block">

            <div className="mx-auto d-none d-xl-block" style={{width: '100%'}}>
                <div className="input-group">
                    <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: 'white'}} placeholder="Search"></input>
                    <div className="input-group-append">
                        <button style={{ borderRadius: 0 , backgroundColor: '#00796B' , borderColor: 'none' }} className="btn btn-primary px-3"><FontAwesomeIcon icon={ faMagnifyingGlass } style={{ color: 'white' }}/></button>
                    </div>
                </div>
            </div>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-block d-sm-none" style={{ backgroundColor: '#FFC107' }}>
        <div className="d-flex mt-3 justify-content-center">
                  <div className="f_Poppins " onClick={this.toggleMegaMenu} style={{ color: '#00796B', cursor: 'pointer' , marginRight: '1rem'}}>Browse & Shop</div>
                  <Link className="f_Poppins" style={{ color: '#00796B' , marginRight: '1rem' ,textDecoration: 'none' }}>Offers</Link>
                  <Link className="f_Poppins" style={{ color: '#00796B' , textDecoration: 'none' }}>Book Slot</Link>
              </div>
        </div>
        <div className="row">
          {this.showMegaMenu()}
        </div>
      </div>
    );
  }
}
