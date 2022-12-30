import { Component } from "react"
import { Button , Box , FormControl , RadioGroup , FormControlLabel , Radio ,FormLabel} from "@mui/material";
import { Paper } from "@material-ui/core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus , faMinus} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import BasketQuantity from "./BasketQuantity";

export class Basket extends Component {
    render(){
        return(
            <>
                <div className="container d-flex justify-content-between align-items-center p-2 pe-3" style={{ width: '100%'  , background: '#00BCD4' }}>
                    <h3 className="f_Poppins" style={{ color: 'white' , marginBottom: 0 , padding: '0.5rem'}}>MyBasket</h3>
                    <div>
                    <Link className="p-2 f_OpenSans_Bold bg-transparent mybr-w text-white nonedecoration mybr-w rounded">Continue shopping</Link>
                    <Link style={{ marginLeft: '1rem' }} className="p-2 f_OpenSans_Bold bg-transparent mybr-w text-white nonedecoration mybr-w rounded" >Check out now</Link>
                    </div>
                 </div>
            <div className="container pt-1" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="container d-flex align-items-center p-3 bg-white mt-2">
                    <Link className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded text-nowrap" style={{ border: '1px solid #00796B' , color: '#00796B' }}>Book Your Slot</Link>
                    <p style={{ marginBottom: 0 , marginLeft: '0.5rem' }}>You have not yet booked a slot for delivery or collection.
                    Prices and availability can only be confirmed when you do.</p>
                    </div>
                <div className="container d-flex justify-content-between align-items-center p-3 bg-white mt-2">
                <div>
                    <p>
                        Total Items
                    </p>
                    <p style={{ marginBottom: 0  }}>
                        3 products
                    </p>
                </div>
                <div className="text-center">
                    <p>
                        Delivery Price
                    </p>
                    <p style={{ marginBottom: 0 }}>
                        £143.37
                    </p>
                    <p style={{ marginBottom: 0  }}>
                    including £5.85 VAT
                    </p>
                </div>
                <div>
                    <Button variant="text" style={{ display: 'block' , color: '#F44336' }}>DELETE BASKET</Button>
                    <Button variant="text" style={{ display: 'block' }}>ADD VOUCHER</Button>
                </div>
                </div>
                <div className="container p-3 bg-white mt-2">
                    <p>Choose your payment type :</p>
                    <div className="d-flex align-items-center justify-content-between">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        <label class="form-check-label" for="inlineRadio1">Credit / Debit Card</label>
                        </div>
                        <img
                                    style={{ width: '6rem' , height: 'auto' }}
                                        src="/assets/images/card.817db6d4.png"
                                        alt="Credit / Debit Card"
                                ></img>
                    </div>
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Pay By Bank</label>
                        </div>
                        <img
                        style={{ width: '6rem' , height: 'auto' }}
                            src="/assets/images/pbb.a038413a.png"
                            alt="Pay By Bank"
                    ></img>

                    </div>
                </div>
                <div className="container d-flex align-items-center justify-content-between p-3 bg-white mt-2">
                <div className="d-flex w-50 justify-content-between align-items-center">
                            <img
                                style={{ width: '6rem' , height: '6rem' }}
                                    src="/assets/images/catPicTemp.jpg"
                                    alt="Pay By Bank"
                            ></img>
                            <div className="container" style={{ height: '100%' }}>
                                <div className="row align-items-center" style={{ height: '100%' }}>
                                    <h5>CHR009</h5>
                                    <p style={{ fontSize: '13px' }}>JJ Premium Restaurant Grade Marabu (Cuban) Charcoal (not for resale) 1x10kg</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex w-50 text-center justify-content-between align-items-center">
                            <div style={{ fontSize: '15px' }}>
                                <p style={{ marginBottom: 0 }}>£116.91</p>
                                <p>+ £5.85 VAT</p>
                            </div>
                            <div>
                            <BasketQuantity />
                            </div>
                            <div className="d-flex align-items-center ms-2">
                            <p style={{ marginRight: '0.5rem' , marginBottom: 0 }} className="d-none d-lg-block">Remove</p>
                            <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: '#F44336' }}/>
                            </div>
                        </div>
                </div>
            <div className="text-end">
                <Button className="f_Poppins" variant="outlined">Continue shopping</Button>
                <Button style={{ marginLeft: '1rem' }} className="f_Poppins" variant="outlined">Check out now</Button>
            </div>
            </div>
            </>
        )
    }
}