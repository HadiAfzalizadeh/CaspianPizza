import { Component } from "react"
import { Button , Box , FormControl , RadioGroup , FormControlLabel , Radio ,FormLabel} from "@mui/material";
import { Paper } from "@material-ui/core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus , faMinus} from "@fortawesome/free-solid-svg-icons";

export class Basket extends Component {
    render(){
        return(
            <>
                <div className="container align-items-center p-2 text-center" style={{ width: '100%'  , background: '#00BCD4' }}>
                    <h1 className="f_Poppins" style={{ color: 'white' , marginBottom: 0}}>MyBasket</h1>
                 </div>
            <div className="container p-4" style={{ backgroundColor: '#F5F5F5' }}>
            <Button className="f_Poppins" variant="outlined">Continue shopping</Button>
            <Button style={{ marginLeft: '1rem' }} className="f_Poppins" variant="outlined">Check out now</Button>
            <Paper sx={{ display: 'flex' , marginBottom: '1rem'}}>
                <Box m={2} p={2}>
                    <div className="container d-flex align-items-center">
                    <Button variant="outlined">Book Your Slot</Button>
                    <p className="f_OpenSans_Regular" style={{ marginBottom: 0 , marginLeft: '0.5rem' }}>You have not yet booked a slot for delivery or collection.
                    Prices and availability can only be confirmed when you do.</p>
                    </div>
                </Box>
            </Paper>
            <Paper sx={{ display: 'flex' , alignItems: 'center'}}>
            <Box m={2} p={2}>
                <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <p className="f_OpenSans_Regular" style={{}}>
                        Total Items
                    </p>
                    <p className="f_OpenSans_Regular" style={{ marginBottom: 0  }}>
                        3 products
                    </p>
                </div>
                <div>
                    <p className="f_OpenSans_Regular">
                        Delivery Price
                    </p>
                    <p className="f_OpenSans_Regular">
                        £143.37
                    </p>
                    <p className="f_OpenSans_Regular" style={{ marginBottom: 0  }}>
                    including £5.85 VAT
                    </p>
                </div>
                <div>
                    <Button variant="text" style={{ display: 'block' }}>DELETE BASKET</Button>
                    <Button variant="text" style={{ display: 'block' }}>ADD VOUCHER</Button>
                </div>
                </div>
            </Box>
            </Paper>
            <Paper sx={{ display: 'flex' , marginBottom: '1rem'}}>
                <Box m={2} p={2}>
                <FormLabel className="f_OpenSans_Regular" id="demo-radio-buttons-group-label">Choose your payment type</FormLabel>
                    <div className="container text-center" sx={{ width: '100%' }}>
                    <FormControl>
                    
                        <RadioGroup sx={{ width: '100%' }}
                        row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            {/* <div className="container d-flex justify-content-between" sx={{ width: '100%' }}>
                                    <div> */}
                                    <FormControlLabel value="Bank" control={<Radio />} label="Pay By Bank"/>
                                        <img
                                            style={{ width: '6rem' , height: 'auto' }}
                                                src="/assets/images/pbb.a038413a.png"
                                                alt="Pay By Bank"
                                        ></img>
                                    {/* </div>
                                    <div> */}
                                    <FormControlLabel sx={{ ml: 0.5 }} value="Card" control={<Radio />} label="Credit / Debit Card" />
                                <img
                                    style={{ width: '6rem' , height: 'auto' }}
                                        src="/assets/images/card.817db6d4.png"
                                        alt="Pay By Bank"
                                ></img> 
                                    {/* </div>
                            </div> */}
                        </RadioGroup>
                    </FormControl>
                    </div>
                </Box>
            </Paper>
            <Paper sx={{ display: 'flex' , alignItems: 'center'}}>
                <Box m={2} p={2}>
                    <div className="contianer d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                            <img
                                style={{ width: '6rem' , height: 'auto' }}
                                    src="/assets/images/catPicTemp.jpg"
                                    alt="Pay By Bank"
                            ></img>
                            <div className="container" style={{ height: '100%' }}>
                                <div className="row align-items-center" style={{ height: '100%' }}>
                                    <h5>CHR009</h5>
                                    <p>JJ Premium Restaurant Grade Marabu (Cuban) Charcoal (not for resale) 1x10kg</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p>£116.91</p>
                                <p>+ £5.85 VAT</p>
                            </div>
                            <div>
                            <div className="input-group quantity mx-auto d-flex">
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" style={{ backgroundColor: '#FFC107' , borderRadius: 0 , border: '1px solid #FFC107'}}>
                                        <FontAwesomeIcon icon={faMinus} size="xl"/>
                                        </button>
                                    </div>
                                    <input  type="text" className="form-control  border-0 text-center" value="1"></input>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus" style={{ backgroundColor: '#FFC107' , borderRadius: 0 , border: '1px solid #FFC107'}}>
                                           <FontAwesomeIcon icon={faPlus} size="xl"/>
                                        </button>
                                    </div>
                            </div>
                            </div>
                            <div className="d-flex">
                            <p style={{ marginRight: '0.5rem' }}>Remove</p>
                            <FontAwesomeIcon icon={faXmark} size="xl"/>
                            </div>
                        </div>
                    </div>
                </Box>
            </Paper>
            <Button className="f_Poppins" variant="outlined">Continue shopping</Button>
            <Button style={{ marginLeft: '1rem' }} className="f_Poppins" variant="outlined">Check out now</Button>
            </div>
            </>
        )
    }
}