import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts, selectFilter, selectError, selectIsLoading, filteredContacts } from '../../redux/contacts/selectors';
import { fetchAll, deleteContactById } from '../../redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import css from './ContactListPage.module.css';
import contactsStopper from '../../images/contacts_stopper-image.png';
import { ReactComponent as IconPerson } from 'images/person-icon.svg';
import { ReactComponent as IconPhone } from 'images/phone-icon.svg';


const ContactListPage = () => {     
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filter = useSelector(selectFilter);
    const filteredContactsList = useSelector(filteredContacts);

    const handleDeleteContact = (contactId, contactName) => {
        dispatch(deleteContactById(contactId));
        toast.info(`"${contactName}" has been deleted from contacts.`);
    }

    useEffect(() => { 
        dispatch(fetchAll());
    }, [dispatch]) 

    return (
        <>
            {/* Check error */}
            {error && <p>{error}</p>}
            <div className={css.wrapper}>
                <div>
                    <ContactForm />
                </div>
                <div className={css.inner}>
                    <h2 className={css.title}>Contacts list</h2>

                    
                    {isLoading ? <Loader /> : (
                        <>
                            {contacts?.length === 0 ? (
                                <div className={css.imageWrapper}>
                                    <img
                                        src={contactsStopper}
                                        alt="An opened empty book"
                                        width="220"
                                        height="100"
                                    />
                                    <p className={css.text}>Contacts list is empty.</p>
                                    <p className={css.animatedText}>Start adding your contacts!</p>
                                </div>) : (

                                <>
                                    <Filter />
                                    <ul className={css.contactsList}>
                                            
                                        
                                    {(filter.length > 0 ? filteredContactsList : contacts
                                        ).map(({ id, name, number }) => (
                                        
                                        <li key={id} className={css.card}>
                                            <div className={css.cardInner}>
                                                <p className={css.contactName}><IconPerson className={css.icon} />{name}</p>
                                                <p className={css.contactNumber}><IconPhone className={css.icon} />{number}</p>
                                            </div>
                                            <button type='submit' className={css.btn} onClick={() => handleDeleteContact(id, name)}>Delete</button>
                                        </li>
                                            
                                        ))
                                    } 
                                    </ul>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>  
        </>
    )
}


export default ContactListPage;