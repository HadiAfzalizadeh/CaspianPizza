
import { Navigate } from "react-router-dom";


const GuardedRoute = ({ component: Component, distance, auth, ...rest }) => (
        auth === true ? <Component {...rest} /> : <Navigate to={distance} />
)


export default GuardedRoute;