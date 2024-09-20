import { Link } from "react-router-dom";
import logIn from "../../assets/images/login/login.svg"
import useAuth from "../../hook/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
   const {createUser}=useAuth()
    // const {createUser}=useContext(AuthContext);

    const handleSignUpButton=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
         
       createUser(email,password)
       .then(result=>{
        const user=result.user;
        console.log(user)
       }) 
       .catch(error=>console.log(error))

    }
    return (
        <div>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row gap-8">
    <div className="">
      
      <img src={logIn} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUpButton} className="card-body">
        <h1 className="text-5xl font-bold text-center mb-5">Registration!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
      <p className="text-center mb-4">already have an account <Link to="/signIn" className="text-orange-500 font-bold">sign in</Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;
