

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
            <div className="d-flex justify-content-around pt-5 px-5" style={{ backgroundColor: '#FF5722' , color: 'white' }}>
                {/* <div><h4 className="f_Poppins text-center">CONTACT US</h4>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-3" style={{ color: 'white' }} icon={faLocationDot}/>
                    <p className="text-center text-nowrap mb-0">Address : Loram Ipusm</p>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-3" style={{ color: 'white' }} icon={faPhone}/>
                    <p className="text-center text-nowrap mb-0">Call : +01 1234567890</p>
                </div>
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon className="me-3" style={{ color: 'white' }} icon={faEnvelope}/>
                    <p className="text-center text-nowrap mb-0">Email : mail@domain.com</p>
                </div>
                <p className="invisible">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                </div>
                <div className="px-5">
                    <h2 className="f_Poppins text-center">CASPIAN PIZZA</h2>
                    <p className="text-center pb-5" style={{ borderBottom: '1px solid white' }}>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                    <div className="text-center pb-5">2045 All Rights Reserved. By CASPIAN PIZZA</div>
                </div>
                <div>
                    <h4 className="f_Poppins text-center">BEST PRODUCTS</h4>
                    <p className="text-center">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p></div> */}
            <div>
                <h4 className="f_Poppins text-center">Contact us</h4>
                <p>Live Chat</p>
                <p>Branch Locations & Opening Hours</p>
                <p>7 Solar Way, Enfield, EN3 7XY</p>
                <p>01992 701 701</p>
            </div>
            <div>
                <h4 className="f_Poppins text-center">Customer Services</h4>
                <p>Frequently Asked Questions</p>
                <p>JJ Pay By Bank FAQ</p>
                <p>Send Us A Message</p>
                <p>Vendor Self Service</p>
                <p>Terms And Conditions</p>
                <p>Policies, Reports And Certificates</p>
                <p>Export Enquiry</p>
            </div>
            <div>
                <h4 className="f_Poppins text-center">General</h4>
                <p>JJ Careers</p>
                <p>Brochures</p>
                <p>Supply Us</p>
            </div>
            <div>
                <h4 className="f_Poppins text-center">Follow Us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>YouTube</p>
                <p>JJ Blog</p>
            </div>
            </div>
        </div>
    )

}