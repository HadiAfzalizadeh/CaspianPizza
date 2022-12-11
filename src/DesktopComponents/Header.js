import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Component } from "react"
import { MegaMenu } from "./MegaMenu"

export class Header extends Component {

    state = {
        openMenu: false
    };

    toggleMegaMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        });
    }

    showMegaMenu(){
        return (this.state.openMenu === true ? <MegaMenu /> : null)
    }

    render(){
        return(       
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="linkButton">SIGN IN / REGISTER</div>
                        </div>
                        <div className="col-6">
                            <nav className="rightTextAlign">
                                <div className="linkButton inlineDisplay" id = "basketbtn">
                                    <FontAwesomeIcon id="basketIcon" icon={faCartShopping} className="inlineDisplay"/>
                                    <p className="inlineDisplay">My Basket</p>
                                </div>
                                <div className="linkButton inlineDisplay">
                                    Checkout
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <nav className="centerTextalign">
                                <div onClick={this.toggleMegaMenu} className="linkButton inlineDisplay margin-right">BROWSE & SHOP</div>
                                <div className="linkButton inlineDisplay margin-right">OFFERS</div>
                                <div className="linkButton inlineDisplay margin-right">BOOK SLOT</div>
                            </nav>
                        </div>
                        <div className="col-4">
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search" 
                            aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button"><FontAwesomeIcon 
                                    icon={faMagnifyingGlass} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="MegaMenuParent">
                        {this.showMegaMenu()}
                    </div>
                </div>
            </>
        )
    }
}