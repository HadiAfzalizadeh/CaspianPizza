import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { MegaMenu } from "./MegaMenu";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

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
      />
    ) : null;
  }

  render() {
    return (
      <div style={{ marginBottom: "1rem" }}>
        <Paper style={{ width: "100%", backgroundColor: "#FFC107" }}>
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <a href="/">
                  <img
                    style={{ width: "8rem", height: "auto" }}
                    src="/logo.png"
                    alt="dsd"
                  ></img>
                </a>
              </div>
              <div className="col" style={{ paddingTop: "10px" }}>
                <div className="row">
                  <div className="col-6" style={{ height: '4rem' }}>
                    <Button variant="contained">SIGN IN / REGISTER</Button>
                  </div>
                  <div className="col-6" style={{ height: '4rem' }}>
                    <nav className="rightTextAlign">
                      <Button
                        variant="contained"
                        startIcon={<FontAwesomeIcon icon={faCartShopping} />}
                      >
                        My Basket
                      </Button>
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
