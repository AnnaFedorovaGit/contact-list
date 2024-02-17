import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { registerThunk } from "../../redux/auth/operations";

import css from './RegisterPage.module.css';
    

const RegisterPage = () => {
    const dispatch = useDispatch();
    
    const validationSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().matches(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
        // email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
        password: yup.string().min(7).required(),
    });
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: { name: "", email: "", password: "" }
    });

    const onSubmit = (data) => {
        dispatch(registerThunk(data));
        toast.success('Registration is successful!');
        reset();
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <div className={css.formMainContent}>
                <h2 className={css.title}>Sign up</h2>
                <input {...register("name")} type='text' placeholder="*Name" autoFocus className={css.input} />
                {errors.name && <span className={css.errorMessage}>{errors.name.message}</span>}

                <input {...register("email")} type='text' placeholder="*Email" className={css.input} />
                {errors.email && <span className={css.errorMessage}>please enter a valid email address</span>}

                <input {...register("password")} type='password' placeholder="*Password" className={css.input} />
                {errors.password && <span className={css.errorMessage}>{errors.password.message}</span>}

                <button type="submit" className={css.button}>Sign up</button>
            </div>
            
            <p className={css.text}>* - Fields are required</p>
        </form>
    )
}


export default RegisterPage;