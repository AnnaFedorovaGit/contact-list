import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
// import css from './RegisterPage.module.css'
    

const RegisterPage = () => {
    const dispatch = useDispatch();
  
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const onSubmit = (data) => {
        // console.log(data);
        dispatch(registerThunk(data));
        reset();
    }
    // console.log(watch("example")) 
    
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>Name</span>
                <input {...register("name", { required: true })} type='text' />
                {errors.name && <span>This field is required</span>}
            </label>

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

            <button type="submit">Sign up</button>
        </form>
    )
}


export default RegisterPage;