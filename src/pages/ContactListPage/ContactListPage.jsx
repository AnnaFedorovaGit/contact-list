import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectError, selectIsLoading, filteredContacts } from '../../redux/contacts/selectors';
import { fetchAll, deleteContactById } from '../../redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import css from './ContactListPage.module.css';
import { ReactComponent as IconPerson } from 'images/person-icon.svg'
import { ReactComponent as IconPhone } from 'images/phone-icon.svg'


const ContactListPage = () => {     
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filter = useSelector(selectFilter);
    const filteredContactsList = useSelector(filteredContacts);

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContactById(contactId))
    }

    useEffect(() => { 
        dispatch(fetchAll());
    }, [dispatch]) 

    return (
        <>
            {error && <ErrorMessage message={error} />}
            <div className={css.wrapper}>
                <div>
                    {/* <h1>Phonebook</h1> */}
                    <ContactForm />
                </div>
                <div className={css.inner}>
                    <h2 className={css.title}>Contacts list</h2>
                    <Filter />
                    {isLoading && <Loader />}
                    <ul className={css.contactsList}> 
                        {(filter.length > 0 ? filteredContactsList : contacts
                        ).map(({ id, name, number }) => (
                            <li key={id} className={css.card}>
                                <div className={css.cardInner}>
                                    <p className={css.contactName}><IconPerson className={css.icon} /> {name}</p>
                                    <p className={css.contactNumber}> <IconPhone className={css.icon} /> {number}</p>
                                </div>
                                <button type='submit' className={css.btn} onClick={() => handleDeleteContact(id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>  
        </>
    )
}


export default ContactListPage;