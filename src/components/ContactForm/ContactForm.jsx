import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContactNew } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

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
		<div className={css.formWrapper}>
			<form onSubmit={handleSubmit(handleCreateContact)} className={css.form}>
				<div className={css.formMainContent}>
					<h2 className={css.title}>New contact form</h2>

					<input {...register('name', { required: true })} type='text' placeholder="*Name" autoFocus className={css.formInput} />
					{errors.name && <span>This field is required</span>}

					<input {...register('number', { required: true })} type='text' placeholder="*Phone number" className={css.formInput} />
					{errors.number && <span>This field is required</span>}

					<button type='submit' className={css.btn}>Add contact</button>
				</div>
				<p className={css.text}>*  -  Fields are required</p>
			</form>
		</div>
	)	
}

    
export default ContactForm;