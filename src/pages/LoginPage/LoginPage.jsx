import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginThunk } from '../../redux/auth/operations';

import css from './LoginPage.module.css';


const LoginPage = () => {
    const dispatch = useDispatch();
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(loginThunk(data));
        reset();
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <div className={css.formMainContent}>
                <h2 className={css.title}>Sign in</h2>
                <input {...register("email", { required: true })} type='email' placeholder="*Email" autoFocus className={css.input} />
                {errors.email && <span>This field is required</span>}
                
                <input {...register("password", { required: true, minLength: 7 })} type='password' placeholder="*Password" className={css.input}/>
                {errors.password && <span>This field is required</span>}

                <button type="submit" className={css.button}>Sign in</button>
            </div>
            <p className={css.text}>*  -  Fields are required</p>
        </form>
    )
}


export default LoginPage;