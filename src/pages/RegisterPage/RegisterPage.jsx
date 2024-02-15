import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import css from './RegisterPage.module.css'
    

const RegisterPage = () => {
    const dispatch = useDispatch();
  
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        dispatch(registerThunk(data));
        reset();
    }
    
    return (

        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <div className={css.formMainContent}>
                <h2 className={css.title}>Sign up</h2>
                <input {...register("name", { required: true })} type='text' placeholder="*Name" autoFocus className={css.input} />
                {errors.name && <span>This field is required</span>}

                <input {...register("email", { required: true })} type='email' placeholder="*Email" className={css.input} />
                {errors.email && <span>This field is required</span>}

                <input {...register("password", { required: true, minLength: 7 })} type='password' placeholder="*Password" className={css.input} />
                {errors.password && <span>This field is required</span>}

                <button type="submit" className={css.button}>Sign up</button>
            </div>
            
            <p className={css.text}>*  -  Fields are required</p>
        </form>
    )
}


export default RegisterPage;