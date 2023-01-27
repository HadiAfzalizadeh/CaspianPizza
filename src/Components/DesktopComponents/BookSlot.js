
import { useState , forwardRef } from 'react';
import { Formik } from 'formik';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import { Form , Field} from 'formik';
import { Link } from 'react-router-dom';
import { PaymentMultiStep } from '../SharedComponents/PaymentMultiStep';
import { Button } from 'bootstrap';
import setBookSlot from '../../Slices/category.slice';

const timeOptions = [
    { value: '1', label: '06:00 - 06:30' },
    { value: '2', label: '06:30 - 07:00' },
    { value: '3', label: '07:00 - 07:30' },
    { value: '4', label: '07:30 - 08:00' },
    { value: '5', label: '08:00 - 08:30' },
    { value: '6', label: '08:30 - 09:00' },
    { value: '7', label: '09:00 - 09:30' },
    { value: '8', label: '09:30 - 10:00' },
    { value: '9', label: '10:00 - 10:30' },
    { value: '10', label: '10:30 - 11:00' },
    { value: '11', label: '11:00 - 11:30' },
    { value: '12', label: '11:30 - 12:00' },
    { value: '13', label: '12:00 - 12:30' },
    { value: '14', label: '12:30 - 13:00' },
    { value: '15', label: '13:00 - 13:30' },
    { value: '16', label: '13:30 - 14:00' },
    { value: '17', label: '14:00 - 14:30' },
    { value: '18', label: '14:30 - 15:00' },
    { value: '19', label: '15:00 - 15:30' },
    { value: '20', label: '15:30 - 16:00' },
    { value: '21', label: '16:00 - 16:30' },
    { value: '22', label: '16:30 - 17:00' },
    { value: '23', label: '17:00 - 17:30' },
    { value: '24', label: '17:30 - 18:00' }
  ]

const BookSlot = () => {

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
            <input type="text" className="form-control f_OpenSans_Bold" onClick={onClick} ref={ref} value={value} style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Temp"></input>
    ));

    return(
        <>
        <div className="container align-items-center p-3 pt-4" style={{ width: '100%'  , background: '#00BCD4' }}>
            <Formik
                initialValues={{ bookSlotOptions: '1'  }}
                onSubmit={(values, { setSubmitting }) => {
                    setBookSlot()
                  }}
            >
                {({
         values
       }) => (
        <Form>
            <div className="d-inline py-2 px-5 f_OpenSans_Bold" style={{ backgroundColor: '#00796B' , fontSize: '1.5rem' , color: 'white' }}>Book {!values.bookSlotOptions && ("A")}{values.bookSlotOptions === '1' && ("Delivery")}{values.bookSlotOptions === '2' && ("Collection")} Slot</div>
            <div className="bg-white mt-2 p-3 pb-5">
            {values.bookSlotOptions && (<><div className="container w-100 d-flex justify-content-between">
            <div className="w-50">
            <div>
            <div class="form-check form-check-inline">
                        <Field class="form-check-input" type="radio" name="bookSlotOptions" id="inlineRadio1"
                        value="1"
                        ></Field>
                        <label class="form-check-label" for="inlineRadio1">DELIVERY</label>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div class="form-check form-check-inline">
                        <Field class="form-check-input" type="radio" name="bookSlotOptions" id="inlineRadio2"
                        value="2"></Field>
                        <label class="form-check-label" for="inlineRadio2">COLLECTION</label>
                        </div>
                        </div>
                       {/* <p className="pt-3">Your next available slot: <span style={{ color: '#00796B' }}>Tomorrow</span></p> */}
                       <p>All collection slots are 30 minutes long.
Please arrive within your allocated time slot. If you arrive early, you may be asked to wait.</p>
                    </div>
                    <div className="w-50">
                        <div className="d-flex">
                            <div className="w-50 me-1">
                            <p>Day</p>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                customInput={<ExampleCustomInput />}
                            />
                            </div>
                            <div className="w-50">
                            <p>Time</p>
                            <Select defaultValue={{ value: '1', label: '06:00 - 06:30' }} options={timeOptions} />
                            </div>
                        </div>
                        <div className="row mt-3">
                        <div className="col">
                            <p>YOUR INFO</p>
                                <input type="text" className="form-control f_OpenSans_Regular" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Delivery Phone Number (required)"></input>
                                {values.bookSlotOptions === '1' && ( <> <input type="text" className="form-control f_OpenSans_Regular mt-2" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Driver instructions (optional)"></input>
                                <input type="text" className="form-control f_OpenSans_Regular mt-2" style={{ borderRadius: 0 , backgroundColor: 'white' }} placeholder="Your reference (optional)"></input></>)}
                                <textarea className="form-control mt-2 f_OpenSans_Regular" placeholder="Description" rows="4" ></textarea>
                            </div>
                        </div>
                    </div>

            </div>
            <div className="text-center mt-4">
            <Link to="/Checkout" className="p-2 f_OpenSans_Bold bg-transparent nonedecoration mybr-w rounded w-50 mx-1 px-5" style={{ border: '1px solid #00796B' , color: '#00796B' }} type="submit">RESERVE & CHECKOUT</Link>
            </div></>)}
            </div>
        </Form>
       )}
       
            </Formik>
            
        </div>
       
        </>
    )

}

export default BookSlot;