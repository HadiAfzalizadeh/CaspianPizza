import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthSuccessPage = () => {

    const { message } = useSelector((state) => state.message);

    return(
        <div className="container text-light text-center align-items-center mt-5">
                <div className="row">
                <div><FontAwesomeIcon className="mb-4" style={{ color: 'white' , fontSize: '50px' , color: '#4CAF50' }} icon={faCheck} /></div>
                <h1 className="mb-4">Success</h1>
                </div>
                <p className="mb-4">{message}</p>
                <div className="group">
                    <Link to="../SignIn" type="button" className="button text-center" style={{ textDecoration: 'none' }}>Sign In</Link>
                </div>
        </div>
    )
}

export default AuthSuccessPage;