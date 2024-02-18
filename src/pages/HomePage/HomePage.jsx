import css from './HomePage.module.css';
import contactsBook from '../../images/contacts_book-image.png';
import { ReactComponent as IconTick } from 'images/tick_square-icon.svg';


const HomePage = () => {

    return (

        <div className={css.wrapper}>
            <div className={css.inner}>
                <h1 className={css.title}>Contacts list</h1>
                <h2 className={css.subject}>About Us</h2>
                <p className={css.text}>On our website you can create a List of your contacts!</p>
                    <div className={css.textWrapper}>
                        <p>All you need is:</p>
                    <p className={css.tickedText}><IconTick className={css.icon} />register.</p>

                        <p>After register you will be provided with:</p>
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
               
                <img
                    className={css.image}
                    src={contactsBook}
                    alt="A notebook"
                    width="220"
                    height="100"
                />
            </div>
        </div>
            
    );
}


export default HomePage;