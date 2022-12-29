import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux";
import { logout } from "../../Slices/auth.slice";



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
      <div className="container-fluid" style={{ backgroundColor: '#FFC107' }}>
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
              <div className="col">
                <Link className="f_Poppins" style={{ color: '#FFEB3B' , textDecoration: 'none', whiteSpace: 'nowrap' }}><FontAwesomeIcon style={{ marginRight: '5px' , color: 'white'}} icon={ faRightToBracket }/>Sign In / Register</Link>
              </div>
              <div className="col text-end">
                <div className="d-inline-flex align-items-center pe-5">
                  <Link className="f_Poppins px-2 py-1 me-1" style={{backgroundColor:'#FFC107' , color: '#00796B' , textDecoration: 'none' , borderRadius: '5px', whiteSpace: 'nowrap'}}><FontAwesomeIcon style={{  marginRight: '5px'}} icon={ faCartShopping } color="white"/>My Basket</Link>
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
                        style={{ width:'100px' , height: 'auto' }}
                        src="/logo.png"
                        alt="logo"></img>
                    </Link>
              </div>
              <div className="col align-self-center d-xl-none">
              <div className="mx-auto" style={{width: '100%'}}>
                  <div className="input-group">
                      <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Search"></input>
                      <div className="input-group-append">
                          <button style={{ borderRadius: 0 , backgroundColor: '#00796B' , borderColor: 'none' }} className="btn btn-primary px-3"><FontAwesomeIcon icon={ faMagnifyingGlass } style={{ color: 'white' }}/></button>
                      </div>
                  </div>
              </div>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center d-none d-sm-block">
              <div className="d-flex" style={{ color: '#303F9F' }}>
                  <div className="f_Poppins " style={{ color: '#00796B' , cursor: 'pointer' , marginRight: '1rem' , whiteSpace: 'nowrap'}}>Browse & Shop</div>
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
        <div className="d-flex mt-3">
                  <div className="f_Poppins " style={{ color: '#00796B', cursor: 'pointer' , marginRight: '1rem'}}>Browse & Shop</div>
                  <Link className="f_Poppins" style={{ color: '#00796B' , marginRight: '1rem' ,textDecoration: 'none' }}>Offers</Link>
                  <Link className="f_Poppins" style={{ color: '#00796B' , textDecoration: 'none' }}>Book Slot</Link>
              </div>
        </div>
      </div>
      
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


      // <div style={{ marginBottom: "1rem" }}>
      //   <Paper style={{ width: "100%", backgroundColor: "#FFC107" }}>
      //     <div className="container">
      //       <div className="row">
      //         <div className="col-auto">
      //           <a href="/">
      //             <img
      //               style={{ width: "8rem", height: "auto" }}
      //               src="/logo.png"
      //               alt="logo"
      //             ></img>
      //           </a>
      //         </div>
      //         <div className="col" style={{ paddingTop: "10px" }}>
      //           <div className="row">
      //             <div className="col-6" style={{ height: '4rem' }}>
                    


      //               <SignInOrLogout />
      //             </div>
      //             <div className="col-6" style={{ height: '4rem' }}>
      //               <nav className="rightTextAlign">
      //                 <Link to="Basket"
      //                   variant="contained"
                        
      //                 >
      //                   <Button variant="contained" startIcon={<FontAwesomeIcon icon={faCartShopping} />}>My Basket</Button>
      //                 </Link>
      //                 {/* <div className="linkButton inlineDisplay">Checkout</div> */}
      //                 <Button variant="contained">Checkout</Button>
      //               </nav>
      //             </div>
      //           </div>
      //           <div className="row">
      //             <div className="col-8" style={{ height: '4rem' }}>
      //               <Paper>
      //                   <nav id="menuParent" style={{ padding: '1rem'}}>
      //                   <div
      //                       onClick={this.toggleMegaMenu}
      //                       className="linkButton inlineDisplay margin-right"
      //                   >
      //                       BROWSE & SHOP
      //                   </div>
      //                   <div className="linkButton inlineDisplay margin-right">
      //                       OFFERS
      //                   </div>
      //                   <div className="linkButton inlineDisplay margin-right">
      //                       BOOK SLOT
      //                   </div>
      //                   </nav>
      //               </Paper>
      //             </div>
      //             <div className="col-4" style={{ height: '4rem' }}>
      //               <div className="input-group mb-3">
      //                 <Paper
      //                   component="form"
      //                   sx={{
      //                     p: "2px 4px",
      //                     display: "flex",
      //                     alignItems: "center",
      //                     width: 400,
      //                   }}
      //                 >
      //                   <InputBase
      //                     sx={{ ml: 1, flex: 1 }}
      //                     placeholder="Search"
      //                     inputProps={{ "aria-label": "search" }}
      //                   />
      //                   <IconButton
      //                     type="button"
      //                     sx={{ p: "10px" }}
      //                     aria-label="search"
      //                   >
      //                     <FontAwesomeIcon icon={faMagnifyingGlass} />
      //                   </IconButton>
      //                 </Paper>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="row" id="MegaMenuParent" style={{ position: 'relative' }}>
      //         {this.showMegaMenu()}
      //       </div>
      //     </div>
      //   </Paper>
      // </div>
    );
  }
}
