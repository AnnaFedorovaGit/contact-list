import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsSignedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

import css from './Navigation.module.css';


const Navigation = () => {
    const isSignedIn = useSelector(selectAuthIsSignedIn);
    const dispatch = useDispatch();

    const handleLogout = () => { 
        dispatch(logoutThunk());
    }

    return (
        <nav className={css.wrapper}>
            <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/'>Home</NavLink>
            
            {isSignedIn ? (
                <>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/contacts'>Contacts</NavLink>
                    <button onClick={handleLogout} className={css.button}>Log out</button>
                </>
            ) : (
                <>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/register'>Register</NavLink>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/login'>Login</NavLink>
                </>
            )}
        </nav>
    );
}


export default Navigation;