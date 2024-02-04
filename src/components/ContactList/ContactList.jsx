import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts, selectFilter, selectError, selectIsLoading, filteredContacts } from '../../redux/selectors'
import { fetchAll, deleteContactById } from '../../redux/operations'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'

import css from './ContactList.module.css'


const ContactList = () => {     
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
            <ul className={css.contactsList}> 
                {(filter.length > 0 ? filteredContactsList : contacts
                ).map(({ id, name, phone }) => (
                    <li key={id}>
                        <p className={css.contactName}>{name}: </p>
                        <p className={css.contactNumber}>{phone}</p>
                        <button type='submit' className={css.btn} onClick={() => handleDeleteContact(id)}>Delete</button>
                        {/* <button type='button' className={css.btn} onClick={() => dispatch(deleteContactById(id))}>Delete</button> */}
                    </li>
                ))
                }
            </ul>
        </>
    )
}


export default ContactList
