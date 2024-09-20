import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext=createContext()
const auth=getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

   const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

   const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut =()=>{
    signOut(auth)
   }

   useEffect(()=>{
 const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        const loggedEmail=currentUser?.email || user?.email;
        const loggedUser={email:loggedEmail};
        setUser(currentUser)
        console.log('current user', currentUser)
        setLoading(false)
        // if user is exit then issue a token 
        if(currentUser){
           
            axios.post('https://cars-doctors-server-site.vercel.app/jwt',loggedUser, {withCredentials:true})
            .then(res=>{
                console.log('token response :', res.data)
            })
        }
        else{
           axios.post('https://cars-doctors-server-site.vercel.app/logOut',loggedUser,{withCredentials:true})
           .then(res=>console.log(res.data))
        }
    })
    return ()=>{
       return unSubscribe()
    }
   },[])

    const authInfo={
      user,
      loading,
      createUser,
      signIn,
      logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;