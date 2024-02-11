import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, redirectTo = '/login' }) => {
    const isAsignedIn = useSelector(selectAuthIsSignedIn);

    return isAsignedIn ? children : <Navigate to={redirectTo} replace />;
};


export default PrivateRoute;