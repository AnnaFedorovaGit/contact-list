import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContactNew } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import css from './ContactForm.module.css';


const ContactForm = () => { 
	const dispatch = useDispatch();
	const { register, handleSubmit, reset, formState: { errors }} = useForm();
	const contacts = useSelector(selectContacts);

	const handleCreateContact = (data) => {
		let duplicate = '';

		for (const item of contacts) {
			if (item.name.toLowerCase() === data.name.toLowerCase()) {
				duplicate = data.name
				break;
			}
			
			if (item.number.toLowerCase() === data.number.toLowerCase()) {
				duplicate = data.number;
				break;
			}
		}

		if (duplicate) { 
			toast.error(`"${duplicate}" is already in contacts.`);
			return;
		}

		dispatch(addContactNew(data));
		toast.success(`"${data.name}" has been added to contacts!`);
		reset();
	};
    
	return (
		<>
			<form onSubmit={handleSubmit(handleCreateContact)} className={css.form}>
				<div className={css.formMainContent}>
					<h2 className={css.title}>New contact form</h2>

					<input {...register('name', { required: true })} type='text' placeholder="*Name" autoFocus className={css.formInput} />
					{errors.name && <span className={css.errorMessage}>this field is required</span>}
					{/* pattern: new RegExp("^[a-zA-Zа-яА-ЯґєіїҐЄІЇ]+(([' -][a-zA-Zа-яА-ЯґєіїҐЄІЇ ])?[a-zA-Zа-яА-ЯґєіїҐЄІЇ]*)*$") */}

					<input {...register('number', { required: true })} type='text' placeholder="*Phone number" className={css.formInput} />
					{errors.number && <span className={css.errorMessage}>this field is required</span>}
					{/*  ??? =    +?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9} */}

					<button type='submit' className={css.btn}>Add contact</button>
				</div>
				<p className={css.text}>* - Fields are required</p>
			</form>
		</>
	)	
}

    
export default ContactForm;