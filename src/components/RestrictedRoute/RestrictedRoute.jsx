import { useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
    const isAsignedIn = useSelector(selectAuthIsSignedIn);

    return isAsignedIn ? <Navigate to={redirectTo} replace /> : children;
};


export default RestrictedRoute;