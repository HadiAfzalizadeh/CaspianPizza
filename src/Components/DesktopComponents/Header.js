import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../../Slices/auth";



function SignInOrLogout() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
    if(isLoggedIn){
  return(
      <Button onClick={() => dispatch(logout())} variant="contained">Log Out</Button>)
    }else{
      return(
      <Link to="Auth/SignIn" variant="contained">
        <Button variant="contained">SIGN IN / REGISTER</Button>
        </Link>)
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
      <MegaMenu
        selectCategoryId={this.props.selectCategoryId}
        items={this.props.megaMenuItems}
        toggleMegaMenu = {this.toggleMegaMenu}
      />
    ) : null;
  }



  render() {
    return (
      // <div className="container-fluid" style={{ position: 'fixed' , top: 0 , borderBottom: '1px solid black'}}>
      //   <div className="row">
      //     <div className="col-sm-2 text-center p-0 d-none d-sm-block" style={{ backgroundColor: '#795548' , maxHeight:'7.5rem' }}>
      //         <Link to="/">
      //             <img
      //               style={{ maxWidth:'7.5rem', height: "auto" }}
      //               src="/logo.png"
      //               alt="logo"></img>
      //           </Link>
      //     </div>
      //     <div className="col-sm-10">
      //       <div className="row align-items-center" style={{ backgroundColor: '#D32F2F' ,  height: '2.5rem'}}>
      //         <div className="col">
      //           <Link className="f_Poppins" style={{ color: '#FFEB3B' , textDecoration: 'none' }}><FontAwesomeIcon style={{ marginRight: '5px' , color: 'white'}} icon={ faRightToBracket }/>Sign In / Register</Link>
      //         </div>
      //         <div className="col text-end">
      //           <div className="d-inline-flex align-items-center pe-5">
      //             <Link className="f_Poppins" style={{backgroundColor:'#03A9F4' , color: '#FFEB3B' , textDecoration: 'none' }}><FontAwesomeIcon style={{  marginRight: '5px'}} icon={ faCartShopping }/>Basket</Link>
      //             <Link className="f_Poppins" style={{ color: '#FFEB3B' , textDecoration: 'none'}}><FontAwesomeIcon style={{  marginRight: '5px'}} icon={ faRightToBracket }/>Checkout</Link>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row align-items-center" style={{  height: '5rem'}}>
      //         <div className="col-auto d-block d-sm-none" style={{ backgroundColor: '#795548' }}>
      //           <Link to="/">
      //               <img
      //                 style={{ width:'4.25rem' , height: 'auto' }}
      //                 src="/logo.png"
      //                 alt="logo"></img>
      //             </Link>
      //         </div>
      //         <div className="col align-self-end">
      //         <nav className="navbar navbar-expand">
      //         <div className="collapse navbar-collapse text-center">
      //           <div className="navbar-nav">
      //             <div className="nav-item nav-link active f_Poppins" style={{ color: '#424750', cursor: 'pointer'}}>Browse & Shop</div>
      //             <Link className="nav-item nav-link f_Poppins" style={{ color: '#424750' }}>Offers</Link>
      //             <Link className="nav-item nav-link f_Poppins" style={{ color: '#424750' }}>Book Slot</Link>
      //           </div>
      //         </div>
      //       </nav>
      //         </div>
      //         <div className="col-4 pe-5">

      //       <div className="mx-auto" style={{width: '100%'}}>
      //           <div className="input-group">
      //               <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: '#FFF9C460'}} placeholder="Search"></input>
      //               <div className="input-group-append">
      //                   <button style={{ borderRadius: 0 , backgroundColor: '#F57C00' , borderColor: 'none' }} className="btn btn-primary px-3"><FontAwesomeIcon icon={ faMagnifyingGlass } style={{ color: '#FFEB3B' }}/></button>
      //               </div>
      //           </div>
      //       </div>

      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      
/* <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
                <a href="" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 className="m-0 display-3 text-primary">Klean</h1>
                </a>
            </div>
            <div className="col-lg-9">
                <div className="row bg-dark d-none d-lg-flex">
                    <div className="col-lg-7 text-left text-white">
                        <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
                            <i className="fa fa-envelope text-primary mr-2"></i>
                            <small>info@example.com</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                            <small>+012 345 6789</small>
                        </div>
                    </div>
                    <div className="col-lg-5 text-right">
                        <div className="d-inline-flex align-items-center pr-2">
                            <a className="text-primary p-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-primary p-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-primary p-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-primary p-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-primary p-2" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand bg-white navbar-light p-0">
                    <a href="" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary">Klean</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="index.html" className="nav-item nav-link">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="project.html" className="nav-item nav-link">Project</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="blog.html" className="dropdown-item">Latest Blog</a>
                                    <a href="single.html" className="dropdown-item active">Blog Detail</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href="" className="btn btn-primary mr-3 d-none d-lg-block">Get A Quote</a>
                    </div>
                </nav>
            </div>
        </div>
    </div> */


      <div style={{ marginBottom: "1rem" }}>
        <Paper style={{ width: "100%", backgroundColor: "#FFC107" }}>
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <a href="/">
                  <img
                    style={{ width: "8rem", height: "auto" }}
                    src="/logo.png"
                    alt="logo"
                  ></img>
                </a>
              </div>
              <div className="col" style={{ paddingTop: "10px" }}>
                <div className="row">
                  <div className="col-6" style={{ height: '4rem' }}>
                    


                    <SignInOrLogout />
                  </div>
                  <div className="col-6" style={{ height: '4rem' }}>
                    <nav className="rightTextAlign">
                      <Link to="Basket"
                        variant="contained"
                        
                      >
                        <Button variant="contained" startIcon={<FontAwesomeIcon icon={faCartShopping} />}>My Basket</Button>
                      </Link>
                      {/* <div className="linkButton inlineDisplay">Checkout</div> */}
                      <Button variant="contained">Checkout</Button>
                    </nav>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8" style={{ height: '4rem' }}>
                    <Paper>
                        <nav id="menuParent" style={{ padding: '1rem'}}>
                        <div
                            onClick={this.toggleMegaMenu}
                            className="linkButton inlineDisplay margin-right"
                        >
                            BROWSE & SHOP
                        </div>
                        <div className="linkButton inlineDisplay margin-right">
                            OFFERS
                        </div>
                        <div className="linkButton inlineDisplay margin-right">
                            BOOK SLOT
                        </div>
                        </nav>
                    </Paper>
                  </div>
                  <div className="col-4" style={{ height: '4rem' }}>
                    <div className="input-group mb-3">
                      <Paper
                        component="form"
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          width: 400,
                        }}
                      >
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search" }}
                        />
                        <IconButton
                          type="button"
                          sx={{ p: "10px" }}
                          aria-label="search"
                        >
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </IconButton>
                      </Paper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="MegaMenuParent" style={{ position: 'relative' }}>
              {this.showMegaMenu()}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
