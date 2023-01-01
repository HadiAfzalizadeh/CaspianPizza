
import React, {useState  } from "react";

const BookSlot = () => {

    const [isDelivery, setDelivery] = useState(false);

    return(
        <>
        <div className="container align-items-center p-3 pt-4" style={{ width: '100%'  , background: '#00BCD4' }}>

            <div className="d-inline py-2 px-5 f_OpenSans_Bold" style={{ backgroundColor: '#00796B' , fontSize: '1.5rem' , color: 'white' }}>Book Delivery Slot</div>
            <div className="container w-100 bg-white d-flex justify-content-between mt-2 p-3 pb-5">
            <div className="w-50">
            <div>
            <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        <label class="form-check-label" for="inlineRadio1">DELIVERY</label>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">COLLECTION</label>
                        </div>
                        </div>
                       <p className="pt-3">Your next available slot: <span style={{ color: '#00796B' }}>Tomorrow</span></p>
                       <p>All collection slots are 30 minutes long.
Please arrive within your allocated time slot. If you arrive early, you may be asked to wait.</p>
                    </div>
                    <div>
                        <div className="row pe-1">
                            <div className="col-6">
                            <p>Day</p>
                            <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Temp"></input>
                            </div>
                            <div className="col-6">
                            <p>Time</p>
                            <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Temp"></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col">
                            <p>YOUR INFO</p>
                                <input type="text" className="form-control f_Poppins" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Delivery Phone Number (required)"></input>
                                <input type="text" className="form-control f_Poppins mt-2" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Driver instructions (optional)"></input>
                                <input type="text" className="form-control f_Poppins mt-2" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Your reference (optional)"></input>
                            </div>
                        </div>
                    </div>
            </div>
        
        </div>


        <div className="container pt-1 pb-1" style={{ backgroundColor: '#F5F5F5' }}>

        </div>
        </>
    )

}

export default BookSlot;