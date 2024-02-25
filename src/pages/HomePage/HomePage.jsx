import { useSelector } from 'react-redux';
import { selectAuthUserData } from '../../redux/auth/selectors';

import css from './HomePage.module.css';
import { ReactComponent as IconTick } from 'images/tick_square-icon.svg';


const HomePage = () => {
    const user = useSelector(selectAuthUserData);

    return (

        <div className={css.wrapper}>
            <div className={css.inner}>
                <h1 className={css.title}>Contact list</h1>

                {!user.name ? '' :
                    <h2 className={css.subject}>Welcome, {user.name}!</h2>
                }
                    <p className={css.text}>On our website you can create a List of your contacts!</p>
                    <div className={css.textWrapper}>
                    
                    {!user.name ?
                        <>
                            <p>All you need is:</p>
                            <p className={css.tickedText}><IconTick className={css.icon} />register.</p>
                        </> : ''
                    }
                            {!user.name ?
                                <p>After register you will be provided with:</p> :
                                <p>You can use:</p>
                            }
                                    <ul>
                                        <li>
                                            <p className={css.tickedText}><IconTick className={css.icon} />a Form for adding new contacts,</p>
                                        </li>
                                        <li>
                                            <p className={css.tickedText}><IconTick className={css.icon} />List of contacts you have already added,</p>
                                        </li>
                                        <li>
                                            <p className={css.tickedText}><IconTick className={css.icon} />Searching field</p>
                                        </li>
                                    </ul>

                                    <p>Your Contacts List is not shared with third parties.</p>
                                </div>            
            </div>
        </div>
            
    );
}


export default HomePage;