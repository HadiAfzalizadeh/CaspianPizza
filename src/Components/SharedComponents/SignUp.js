import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useState  } from "react";
import { useDispatch , useSelector } from "react-redux";
import { clearMessage , setMessage } from "../../Slices/message.slice";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import AuthSuccessPage from './AuthSuccessPage';


const SignUp = () => {

    const [loading, setLoading] = useState(false);

    const [successPage, setsuccessPage] = useState(false);

    const dispatch = useDispatch();

    const { message } = useSelector((state) => state.message);

    const signUnFormik = useFormik({
		initialValues: {
            fullName: '',
            email: '',
            mobile: '',
            password: '',
            rePassword: '',
            address: ''
		},
        validationSchema: Yup.object({
            fullName: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
            mobile: Yup.number().typeError('Phone number is not valid').required('Required'),
			password: Yup.string().min(3, 'Atleast 3 chracters').required('Required'),
			rePassword: Yup.string().min(3, 'Atleast 3 chracters').required('Required')
                .oneOf([Yup.ref('password'), null], 'Password & Confirm Password do not match'),
            address: Yup.string().required('Required'),
		}),
		onSubmit: formValue => {
        setLoading(true);
        dispatch(clearMessage());
        const { fullName, email , mobile , password , rePassword , address } = formValue;
        axios
        .post("https://api.caspianpizza.ir/api/Users" , {
            fullName,
            email,
            mobile,
            password,
            rePassword,
            address,
            customerId : 0
        })
        .then((response) => {
            if(response.data.isSuccess === true){
                dispatch(setMessage(response.data.message));
                setLoading(false);
                setsuccessPage(true);
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch((error) => {
            const message = error.name === 'AxiosError' ? "Oops! Something went wrong" : error.message;
            dispatch(setMessage(message));
            setLoading(false);
        })
        } 
	  });
    
    return(            
        <div className="login-wrap" style={{ minHeight: '1100px' }}>
        <div className="login-html" >
            <input id="tab-1" type="radio" name="tab" className="sign-in" ></input><label style={{ display: 'none' }} for="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" checked></input><label style={{ textAlign: 'center' , width: '100%' }} for="tab-2" className="tab">Sign Up</label>
            {!successPage && (<div className="login-form mt-3">
                <form className="sign-up-htm" onSubmit={signUnFormik.handleSubmit}>
                    <div className="group">
                        <label for="fullName" className="label">Full Name</label>
                        <input id="fullName" type="text" className="input"
                        onChange={e => {
                            signUnFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signUnFormik.handleBlur}
                        value={signUnFormik.values.fullName} style={{ marginBottom: '2px' }}></input>
                        {signUnFormik.touched.fullName && signUnFormik.errors.fullName ? (
                            <div style={{ color: '#fa837a'}}>{signUnFormik.errors.fullName}</div>
                        ) : null}
                    </div>
                    <div className="group">
                        <label for="email" className="label">Email Address</label>
                        <input id="email" type="text" className="input"
                        onChange={e => {
                            signUnFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signUnFormik.handleBlur}
                        value={signUnFormik.values.email} style={{ marginBottom: '2px' }}></input>
                        {signUnFormik.touched.email && signUnFormik.errors.email ? (
                            <div style={{ color: '#fa837a'}}>{signUnFormik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="group">
                        <label for="mobile" className="label">Mobile</label>
                        <input id="mobile" type="text" className="input"
                        onChange={e => {
                            signUnFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signUnFormik.handleBlur}
                        value={signUnFormik.values.mobile} style={{ marginBottom: '2px' }}></input>
                        {signUnFormik.touched.mobile && signUnFormik.errors.mobile ? (
                            <div style={{ color: '#fa837a'}}>{signUnFormik.errors.mobile}</div>
                        ) : null}
                    </div>
                    <div className="group">
                        <label for="address" className="label">Address</label>
                        <input id="address" type="text" className="input"
                        onChange={e => {
                            signUnFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signUnFormik.handleBlur}
                        value={signUnFormik.values.address} style={{ marginBottom: '2px' }}></input>
                        {signUnFormik.touched.address && signUnFormik.errors.address ? (
                            <div style={{ color: '#fa837a'}}>{signUnFormik.errors.address}</div>
                        ) : null}
                    </div>
                    <div className="group">
                        <label for="password" className="label">Password</label>
                        <input id="password" type="password" className="input" data-type="password"
                        onChange={e => {
                            signUnFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signUnFormik.handleBlur}
                        value={signUnFormik.values.password} style={{ marginBottom: '2px' }}></input>
                        {signUnFormik.touched.password && signUnFormik.errors.password ? (
                            <div style={{ color: '#fa837a' }}>{signUnFormik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="group">
                        <label for="rePassword" className="label">Confirm Password</label>
                        <input id="rePassword" type="password" className="input" data-type="password"
                        onChange={e => {
                            signUnFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signUnFormik.handleBlur}
                        value={signUnFormik.values.rePassword} style={{ marginBottom: '2px' }}></input>
                        {signUnFormik.touched.rePassword && signUnFormik.errors.rePassword ? (
                            <div style={{ color: '#fa837a' }}>{signUnFormik.errors.rePassword}</div>
                        ) : null}
                    </div>
                    {message && (
                        <div className="form-group">
                        <div className="text-center mb-3" style={{ color: '#fa837a' , width: '100%'}}>{message}</div>
                        </div>
                    )}
                    <div className="group">
                        <button type="submit" className="button text-center" style={{ padding: '10px 10px' }}>{loading && (
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faSpinner} className="spinner loaderIconSize"/>
                        )}
                        {!loading && (
                            <p className="mb-0 py-1">Sign In</p>
                        )}</button>

                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <Link to="../SignIn"><label for="tab-1" style={{ color: 'white' , cursor: 'pointer' }}>Already Member?</label></Link>
                    </div>
                </form>
            </div>)}
            {successPage && (<div className="login-form">
                <AuthSuccessPage />
            </div>)}
            </div>
        </div>
    )
}

export default SignUp;