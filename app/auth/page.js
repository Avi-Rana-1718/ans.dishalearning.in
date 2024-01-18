"use client"

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation'
import { useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCciV3sOwkss506-379tA5SanyezujbYNA",
    authDomain: "ans-dishalearning.firebaseapp.com",
    projectId: "ans-dishalearning",
    storageBucket: "ans-dishalearning.appspot.com",
    messagingSenderId: "82099435116",
    appId: "1:82099435116:web:f4f39e49e614a93968ca49",
    measurementId: "G-L2JJWD8DNT"
  };

  const app = initializeApp(firebaseConfig);

export default function Page() {

    const router = useRouter()

    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
          router.push(`/`);
      } else {
          console.log("Not authenticated!");
      }
    });

    function signIn() {
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }

    return (
        <>
        <h3 className="text-2xl underline decoration-[#04AA6D] decoration-2 font-medium mt-4">Authenticate</h3>
      <small className="block mb-4">Login into an existing account.</small>
        <label for="email">Email</label>
        <input id="email" className="border-solid border-2 border-neutral-500 rounded p-1 w-full dark:bg-[#121212]" placeholder="Email" onChange={(e)=>{
            setEmail(e.target.value);
        }}/>
        <label for="pass">Password</label>
        <input id="pass" className="border-solid border-2 border-neutral-500 rounded p-1 w-full dark:bg-[#121212]" placeholder="Password" onChange={(e)=>{
            setPass(e.target.value);
        }}/>
        <br />
        <button className="py-1.5 px-3 mt-2 rounded m-0.5 text-white bg-slate-700 disabled:cursor-not-allowed" onClick={signIn} disabled={(email==null)||(pass==null)}>SignIn</button>


        </>
    )
}