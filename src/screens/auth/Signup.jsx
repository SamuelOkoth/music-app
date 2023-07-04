import './signUp.css'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
export default  function Signup() {
const navigate = useNavigate();
    const Schema = yup.object().shape({
        fullName: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
        email: yup.string().required("Email is required"),
    })
const {
    register,
    handleSubmit,
    formState:{errors},

} = useForm({
    resolver: yupResolver(Schema),
});

const SendDataToServer = (data) => {
    console.log(data);
    navigate('/Login')
}

  return (
    <div>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit(SendDataToServer)}>
          <span className="title">Sign up</span>
          <span className="subtitle">
            Create a free account with your email.
          </span>
          <div className="form-container">
            <input type="text" className="input" name='fullName' placeholder="Full Name" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="email" className="input" name='email' placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="password" className="input" name='password' placeholder="Password" {...register("password")} />
            <p>{errors.password?.message} </p> 
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account?
            <Link to="/Login" href="">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


