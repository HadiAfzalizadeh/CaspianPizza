

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {

    return(
        <div className="mt-5" >
            <div style={{ backgroundColor: '#F5F5F5' , height: '15px' }}></div>
            <footer className="py-5 px-5" style={{ backgroundColor: '#FF5722' , color: 'white' }}>
                <div className="d-flex justify-content-around">
                <div className="me-3">
                <h4 className="f_Poppins">Contact us</h4>
                <p>Live Chat</p>
                <p>Branch Locations & Opening Hours</p>
                <p>7 Solar Way, Enfield, EN3 7XY</p>
                <p>01992 701 701</p>
            </div>
            <div className="me-3">
                <h4 className="f_Poppins">Customer Services</h4>
                <p>Frequently Asked Questions</p>
                <p>Caspian Pay By Bank FAQ</p>
                <p>Send Us A Message</p>
                <p>Vendor Self Service</p>
                <p>Terms And Conditions</p>
                <p>Policies, Reports And Certificates</p>
                <p>Export Enquiry</p>
            </div>
            <div className="me-3">
                <h4 className="f_Poppins">General</h4>
                <p>Caspian Careers</p>
                <p>Brochures</p>
                <p>Supply Us</p>
            </div>
            <div className="me-3">
                <h4 className="f_Poppins">Follow Us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>YouTube</p>
                <p>Caspian Blog</p>
            </div>
                </div>
                <p className="mb-0" style={{ fontSize: '0.8em' }}>© Caspian Food Service Ltd. All Rights Reserved.</p>
            </footer>
        </div>
    )

}