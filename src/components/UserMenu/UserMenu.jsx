import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsSignedIn, selectAuthUserData } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

import css from './UserMenu.module.css';


const UserMenu = () => {
    const isSignedIn = useSelector(selectAuthIsSignedIn);
    const userEmail = useSelector(selectAuthUserData);
    const dispatch = useDispatch();

    const handleLogout = () => { 
        dispatch(logoutThunk());
    }

    return (
        <nav className={`${css['wrapper']} ${isSignedIn ? css.signedInWrapper : ''}`}>
            <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/'>Home</NavLink>           
            {isSignedIn ? (
                <>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/contacts'>Contacts</NavLink>
                    <div className={css.logOutWrapper}>
                        <p className={css.text}>{userEmail.email}</p>
                        <button onClick={handleLogout} className={css.button}>Log out</button>
                    </div>
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


export default UserMenu;