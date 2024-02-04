import { useDispatch, useSelector } from 'react-redux'
import { addContactNew } from '../../redux/operations'
import { selectContacts } from '../../redux/selectors'

import css from './ContactForm.module.css'


 const ContactForm = () => { 
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);

	const handleCreateContact = (e) => {
		e.preventDefault();
		 
		const name = e.currentTarget.elements.name.value;
		const phone = e.currentTarget.elements.phone.value;
		// const name = e.target[0].value;
		// const phone = e.target[1].value;

		const newContact = {
			name,
			phone,
			// база данных бека сама добавляет id
			// id: nanoid(),
		}

		const isDuplicated = contacts.find((el) => el.name === name && el.phone === phone)
		if (isDuplicated) {
			return alert(`${name} is already in contacts.`)
		}
			
		dispatch(addContactNew(newContact));		 
		e.currentTarget.reset();
		// e.target[0].value = '';
		// e.target[1].value = '';	
	}
    
	return (
		<form onSubmit={handleCreateContact} className={css.form}>
			<div className={css.wrapper}>
				<label className={css.formLabel}>
					Name
				</label>
				<input type="text" name="name" className={css.formInput} required /> 
			</div>
			<div className={css.wrapper}>
				<label className={css.formLabel}>
					Phone
				</label>
				<input type="text" name="phone" className={css.formInput} required /> 
				{/* type ? add validation */}
				{/* <input type="tel" name="phone" className={css.formInput} required />  */}
			</div>
			<button type='submit' className={css.btn}>
				Add contact
			</button>
		</form>
	)	
}

    
export default ContactForm