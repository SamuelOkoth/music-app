import { loginEndpoint } from "../../spotify";
import "./login.css";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { apiDomain } from "../../utils";
export default function Login() {
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    fullName: yup.string().required("full name is required"),
    password: yup.string().required("password is required"),
  })

  const {
    register,
    handleSubmit,
    formState: {errors}, 

  } = useForm ({
    resolver:yupResolver(Schema)
  });

  const SendDataToServer =  async (data) => {
  
    
  
    const response = await fetch (`${apiDomain}auth/login`,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        
        "Content-Type": "application/json",
      },
    })
     if(response.status === 200){
      alert("loged in successfully")
      navigate('/Player')
     } else {
        alert("Error authenticating");
       }
      
}


  return (
    <div className="login-page">
      
    <form className="form" onSubmit={handleSubmit(SendDataToServer)}>
       <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="text" name="fullName" placeholder="Enter Username" {...register("fullName")}/>
          <p>{errors.fullName?.message}</p>
      </div>
      <div class="input-container">
          <input type="password" name="password" placeholder="Enter password" {...register("password")}/>
          <p>{errors.password?.message}</p>
        </div>
         <button type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to="/Signup">Sign up</Link>
      </p>
   </form>

    </div>
  );
}
