import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginThunk } from '../../redux/auth/operations';

import css from './LoginPage.module.css';


const LoginPage = () => {
    const dispatch = useDispatch();

    const validationSchema = yup.object().shape({
        email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
        password: yup.string().min(7).required(),
    });
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: { email: "", password: "" }
    });

    const onSubmit = (data) => {
        dispatch(loginThunk(data));
        reset();
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <div className={css.formMainContent}>
                <h2 className={css.title}>Sign in</h2>
                <input {...register("email")} type='text' placeholder="*Email" autoFocus className={css.input} />
                {errors.email && <span className={css.errorMessage}>please enter a valid email address</span>}
                
                <input {...register("password")} type='password' placeholder="*Password" className={css.input} />
                {errors.password && <span className={css.errorMessage}>{errors.password.message}</span>}

                <button type="submit" className={css.button}>Sign in</button>
            </div>
            <p className={css.text}>* - Fields are required</p>
        </form>
    )
}


export default LoginPage;