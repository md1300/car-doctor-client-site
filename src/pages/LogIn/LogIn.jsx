import { Link, useLocation, useNavigate } from "react-router-dom";
import logIn from "../../assets/images/login/login.svg"
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import useAuth from "../../hook/useAuth";

const LogIn = () => {
  const {signIn}=useAuth()
  // const {signIn}=useContext(AuthContext)
const location=useLocation()
const navigate=useNavigate()
console.log(location)

    const handleLogInButton=e=>{
        e.preventDefault()
        const form=e.target;
     
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
          navigate(location?.state? location?.state:'/')
          console.log(result)})
        .catch(error=>console.log(error))
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-8">
    <div className="">
      
      <img src={logIn} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogInButton} className="card-body">
        <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mb-4">new to cars doctor <Link to="/signUp" className="text-orange-500 font-bold">sign up</Link> </p>
    </div>
  </div>
</div>
    );
};

export default LogIn;