import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectError, selectIsLoading, filteredContacts } from '../../redux/contacts/selectors';
import { fetchAll, deleteContactById } from '../../redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import css from './ContactListPage.module.css';


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
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <h1>Phonebook</h1>
			<ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ul className={css.contactsList}> 
                {(filter.length > 0 ? filteredContactsList : contacts
                ).map(({ id, name, number }) => (
                    <li key={id}>
                        <p className={css.contactName}>{name}: </p>
                        <p className={css.contactNumber}>{number}</p>
                        <button type='submit' className={css.btn} onClick={() => handleDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default ContactListPage;