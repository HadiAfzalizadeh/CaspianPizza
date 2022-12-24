
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Auth = () => {
	const formik = useFormik({
		initialValues: {
		  firstName: '',
		  lastName: '',
		  email: '',
		},
		validationSchema: Yup.object({
		  firstName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		  lastName: Yup.string()
			.max(20, 'Must be 20 characters or less')
			.required('Required'),
		  email: Yup.string().email('Invalid email address').required('Required'),
		}),
		onSubmit: values => {
		  alert(JSON.stringify(values, null, 2));
		},
	  });
        return(
            <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked></input><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"></input><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<form className="sign-in-htm">
				<div className="group">
					<label for="email" className="label">Email Address</label>
					<input id="email" type="text" className="input"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"></input>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
                <label for="tab-2" style={{ color: 'white' }}>Don’t have an account ?
                <span style={{ cursor: 'pointer' }}> Create Account</span></label>
                    <br></br>
                    <br></br>
					<a href="#forgot" style={{ color: 'white' , textDecoration: 'none' }}>Forgot Password?</a>
				</div>
			</form>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"></input>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"></input>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1" style={{ color: 'white' , cursor: 'pointer' }}>Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
        )
}

export default Auth;