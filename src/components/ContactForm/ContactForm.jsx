import { useDispatch, useSelector } from 'react-redux';
import { addContactNew } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { useForm } from 'react-hook-form';

import css from './ContactForm.module.css';


const ContactForm = () => { 
	const dispatch = useDispatch();
	const { register, handleSubmit, reset, formState: { errors }} = useForm();
	const contacts = useSelector(selectContacts);

	const handleCreateContact = data => {
		if (contacts && contacts.some((item) => item.name === data.name && item.number === data.number)) { 
			return alert(`${data.name} is already in contacts.`)
		}

		dispatch(addContactNew(data));
		reset();
	};
    
	return (
		<form onSubmit={handleSubmit(handleCreateContact)} className={css.form}>
			<label className={css.formLabel}>
				<span>Name:</span>
				<input {...register('name', { required: true })} type='text' className={css.formInput} />
				{errors.name && <span>This field is required</span>}
			</label>
			<label className={css.formLabel}>
				<span>Number:</span>
				<input {...register('number', { required: true })} type='text' className={css.formInput} />
				{errors.number && <span>This field is required</span>}
			</label>
			<button type='submit' className={css.btn}>Add contact</button>
		</form>
	)	
}

    
export default ContactForm;