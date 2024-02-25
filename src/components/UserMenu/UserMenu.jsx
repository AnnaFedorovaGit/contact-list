import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsSignedIn, selectAuthUserData } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

import css from './UserMenu.module.css';


const UserMenu = () => {
    const isSignedIn = useSelector(selectAuthIsSignedIn);
    const userData = useSelector(selectAuthUserData);
    const dispatch = useDispatch();

    const handleLogout = () => { 
        dispatch(logoutThunk());
    }

    const userNameAbbreviation = (name) => {
        let output = '';

        if (name) {
            const array = name.split(' '); // создаем масив из слов по разделителю "пробел"
            if (array.length > 1) {  // если в масиве больше 1 элемента
                output = `${array[0][0]}${array[1][0]}`; // из первого слова берем 1 букву и из второго - одну букву
            } else if (name.length >= 2) {  // если 1 или меньше слов и длина слова больше или равно 2м буквам 
                output = `${name.slice(0, 2)}`;  // берем первые 2 буквы 
            } else if (name.length > 0) {  // если колличество букв в слове больше нуля но меньше 2х  
                output = `${name.slice(0, 1)}`;  // берем только 1 букву
            }
        }

        return output.toUpperCase();
    }

    return (
        <nav className={`${css['wrapper']} ${isSignedIn ? css.signedInWrapper : ''}`}>
            <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/'>Home</NavLink>           
            {isSignedIn ? (
                <>
                    <NavLink className={({ isActive }) => `${css['headerLink']} ${isActive ? css.active : ''}`} to='/contacts'>Contacts</NavLink>
                    <div className={css.logOutWrapper}>
                        <p className={css.text}>{userNameAbbreviation(userData.name)}</p>
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