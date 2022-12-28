import { Link } from 'react-router-dom'

const SignUp = () => {

    return(            
        <div className="login-wrap">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" ></input><label style={{ display: 'none' }} for="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" checked></input><label style={{ textAlign: 'center' , width: '100%' }} for="tab-2" className="tab">Sign Up</label>
            <div className="login-form mt-3">
                <div className="sign-up-htm">
                    <div className="group">
                        <label for="user" className="label">Username</label>
                        <input id="user" type="text" className="input"></input>
                    </div>
                    <div className="group">
                        <label for="pass1" className="label">Password</label>
                        <input id="pass1" type="password" className="input" data-type="password"></input>
                    </div>
                    <div className="group">
                        <label for="pass2" className="label">Repeat Password</label>
                        <input id="pass2" type="password" className="input" data-type="password"></input>
                    </div>
                    <div className="group">
                        <label for="pass3" className="label">Email Address</label>
                        <input id="pass3" type="text" className="input"></input>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign Up"></input>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <Link to="../SignIn"><label for="tab-1" style={{ color: 'white' , cursor: 'pointer' }}>Already Member?</label></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SignUp;