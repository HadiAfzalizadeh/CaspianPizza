import React, { useEffect , useState  } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Slices/auth";
import { clearMessage } from "../../Slices/authMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const SignIn = () => {

let navigate = useNavigate();

const dispatch = useDispatch();

const [loading, setLoading] = useState(false);

useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const { message } = useSelector((state) => state.message);

    const signInFormik = useFormik({
		initialValues: {
		  email: '',
		  pass: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			pass: Yup.string().min(3, 'Atleast 3 chracters').required('Required')
		}),
        onchange: () => {
            alert('hello')
        },
		onSubmit: formValue => {
        setLoading(true);
        dispatch(clearMessage());
        const { email, pass } = formValue;
        dispatch(login({ email, pass }))
          .unwrap()
          .then(() => {
            navigate(-1);
            setLoading(false);
          })
          .catch(()=> {setLoading(false);});
		}
	  });

      return(
        <div className="login-wrap">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked></input><label style={{ textAlign: 'center' , width: '100%' }}  for="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up"></input><label style={{ display: 'none' }} for="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
                <form className="sign-in-htm" onSubmit={signInFormik.handleSubmit}>
                    <div className="group">
                        <label htmlFor="email" className="label">Email Address</label>
                        <input id="email" type="text" className="input" 
                        onChange={e => {
                            signInFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signInFormik.handleBlur}
                        value={signInFormik.values.email} style={{ marginBottom: '2px' }}></input>
                        {signInFormik.touched.email && signInFormik.errors.email ? (
                            <div style={{ color: '#fa837a'}}>{signInFormik.errors.email}</div>
                        ) : null}
                    </div> 
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password"
                        onChange={e => {
                            signInFormik.handleChange(e)
                            dispatch(clearMessage());
                        }}
                        onBlur={signInFormik.handleBlur}
                        value={signInFormik.values.pass} style={{ marginBottom: '2px' }}></input>
                        {signInFormik.touched.pass && signInFormik.errors.pass ? (
                            <div style={{ color: '#fa837a' }}>{signInFormik.errors.pass}</div>
                        ) : null}
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign In"></input>
                    </div>
                    {message && (
                        <div className="form-group">
                        <div className="text-center" style={{ color: '#fa837a' , width: '100%'}}>{message}</div>
                        </div>
                    )}
                    <div className="hr"></div>
                    <div className="foot-lnk">
                    <label style={{ color: 'white' }}>Don’t have an account ?
                    <Link to="../SignUp" style={{ color: 'white' }}> Create Account</Link></label>
                        <br></br>
                        <br></br>
                        <a href="#forgot" style={{ color: 'white' , textDecoration: 'none' }}>Forgot Password?</a>
                        <br></br>
                        {loading && (
                            <FontAwesomeIcon style={{  marginTop: '2rem' , color: 'white' }} icon={faSpinner} className="spinner loaderIconSize"/>
                        )}
                    </div>
                </form>
            </div>
        </div>
    </div>
      )
}

export default SignIn;