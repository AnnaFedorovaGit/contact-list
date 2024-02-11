import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginThunk } from '../../redux/auth/operations';

// import css from './LoginPage.module.css'


const LoginPage = () => {
    const dispatch = useDispatch();
  
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        dispatch(loginThunk(data));
        reset();
    }
    
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>Email</span>
                <input {...register("email", { required: true })} type='email' />
                {errors.email && <span>This field is required</span>}
            </label>

            <label>
                <span>Password</span>
                <input {...register("password", { required: true, minLength: 7 })} type='password' />
                {errors.password && <span>This field is required</span>}
            </label>

            <button type="submit">Sign in</button>
        </form>
    )
}


export default LoginPage;