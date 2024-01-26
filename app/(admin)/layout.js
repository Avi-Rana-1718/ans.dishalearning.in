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

export default function ShopLayout({ children, params }) {

  const [authState, setAuthState] = useState("Checking")

    const router = useRouter();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Authenticated!");
        setAuthState(user.email)
      } else {
        router.push(`/auth`);
      }
    });

    return (
    <section>
      <div className="px-4 py-2 my-3 rounded bg-[#f3f3f3] text-left dark:bg-[#383838]">
    <small className="text-sm"><i class="fa-solid fa-user-gear"></i> Authenticated: </small>
    <span>{authState!="Checking"?authState:"Not authenicated"}</span>
      </div>
      
      {children}
    </section>
    )
  }