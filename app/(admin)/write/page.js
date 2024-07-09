"use client"

import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

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

    const [str, setStr] = useState(null);

    
    function display() {
        setStr(document.querySelector("textarea").value);
    }

    function bold() {
        let textarea = document.querySelector("textarea");
        let currPos = textarea.selectionStart;
        let textBefore = str.slice(0,currPos);
        let textAfter = str.slice(currPos, textarea.length);
        let finalText = textBefore + "<b></b>" + textAfter;
        setStr(finalText);
        textarea.value = finalText;
        }
    function sup() {
        let textarea = document.querySelector("textarea");
        let currPos = textarea.selectionStart;
        let textBefore = str.slice(0,currPos);
        let textAfter = str.slice(currPos, textarea.length);
        let finalText = textBefore + "<sup></sup>" + textAfter;
        setStr(finalText);
        textarea.value = finalText;
        }
    function sub() {
        let textarea = document.querySelector("textarea");
        let currPos = textarea.selectionStart;
        let textBefore = str.slice(0,currPos);
        let textAfter = str.slice(currPos, textarea.length);
        let finalText = textBefore + "<sub></sub>" + textAfter;
        setStr(finalText);
        textarea.value = finalText;
        }
    function block() {
        let textarea = document.querySelector("textarea");
        let currPos = textarea.selectionStart;
        let textBefore = str.slice(0,currPos);
        let textAfter = str.slice(currPos, textarea.length);
        let finalText = textBefore + "<code></code>" + textAfter;
        setStr(finalText);
        textarea.value = finalText;
        }
        function nextline() {
            let textarea = document.querySelector("textarea");
            let currPos = textarea.selectionStart;
            let textBefore = str.slice(0,currPos);
            let textAfter = str.slice(currPos, textarea.length);
            let finalText = textBefore + "<br />" + textAfter;
            setStr(finalText);
            textarea.value = finalText;
            }

        function post() {
            const db = getDatabase();
            set(ref(db, 'data/' + ((document.querySelector("#one").value).replace(/[^A-Z0-9]/ig, "")).toLowerCase()), {
             question: document.querySelector("#one").value,
              timestamp: Date.now(),
              subject:  document.getElementById("subject").value,
              class: document.getElementById("class").value,
              answer: document.querySelector("#ans").value,
              chapter: document.querySelector("#chp").value
            }).then(()=>{
                alert("Posted");
                document.querySelector("#one").value=null;
                document.getElementById("subject").value=null;
                document.getElementById("class").value=null;
                document.querySelector("#ans").value=null;
                document.querySelector("#chp").value=null;
            }).catch(err=>{
                alert(err);
            })
   
        }

    return (
        <>
        <div>
    <h3 className="text-2xl underline decoration-[#04AA6D] decoration-2 font-medium mb-4">Post question</h3>

        <label htmlFor="one" className="block">Question</label>
        <input id="one" className="border-solid border-2 border-neutral-500 rounded p-1 w-full dark:bg-[#121212]" placeholder="Enter question" />
        <br />
        <label htmlFor="subject" className="block">Subject</label>
          <select className="border-solid border-2 border-neutral-500 rounded p-1 dark:bg-[#121212]" id="subject">
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>Maths</option>
              <option>Science</option>
          </select>
        <br />
        <label htmlFor="class" className="block">Class</label>
          <select id="class" className="border-solid border-2 border-neutral-500 rounded p-1 dark:bg-[#121212]">
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
          </select>
        <br />
        <label htmlFor="chp" className="block">Chapter</label>
            <input id="chp" type="text"  className="border-solid border-2 border-neutral-500 rounded p-1 w-full dark:bg-[#121212]" placeholder="Enter chapter name" />
        <br />
        <br />
        <div className="md:flex p-0">
            <div className="md:w-1/2 border-solid border-2 border-stone-900">
            <button className="p-1 m-0.5 text-white bg-slate-700" onClick={bold}>Bold</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={sup}>Super</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={sub}>Sub</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={block}>Code</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={nextline}>Br</button>

            <textarea id="ans" className="w-full p-1 dark:bg-[#404040]" rows={10} onChange={display}></textarea>
            </div>
            <div className="md:w-1/2 p-2 border-solid border-2 border-stone-900 border-l-0 breaks-words" dangerouslySetInnerHTML={{__html: str}}></div>
            <br />
        </div>
        <button className="py-1.5 px-3 rounded m-0.5 text-white bg-slate-700" onClick={post}>Post</button>
        </div>
        </>
    )
}
