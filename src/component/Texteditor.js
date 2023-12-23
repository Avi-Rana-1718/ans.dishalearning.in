import { useState } from "react";


import { getDatabase, ref, set } from "firebase/database";


function Textarea() {


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
              answer: document.querySelector("#ans").value
            }).then(()=>{
                alert("Posted");
                document.querySelector("#one").value=null;
                document.getElementById("subject").value=null;
                document.getElementById("class").value=null;
                document.querySelector("#ans").value=null;
            }).catch(err=>{
                alert(err);
            })

   
        }

    return (
        <>
        <div className="font-['Epilogue']">
    <h3 className="text-2xl underline decoration-[#04AA6D] decoration-2 font-medium mb-4">Post question</h3>

        <label for="one" className="block">Question</label>
        <input id="one" className="border-solid border-2 border-neutral-500 rounded p-1 w-full" placeholder="Enter question" />
        <br />
        <label for="subject" className="block">Subject</label>
          <select className="border-solid border-2 border-neutral-500 rounded p-1" id="subject">
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>Maths</option>
              <option disabled><br/></option>
              <option>Science</option>
          </select>
        <br />
        <label for="class" className="block">Class</label>
          <select id="class" className="border-solid border-2 border-neutral-500 rounded p-1">
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
          </select>
        <br />
        <br />
        <div className="md:flex p-0">
            <div className="md:w-1/2 border-solid border-2 border-stone-900">
            <button className="p-1 m-0.5 text-white bg-slate-700" onClick={bold}>Bold</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={sup}>Super</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={sub}>Sub</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={block}>Code</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={nextline}>Br</button>

            <textarea id="ans" className="w-full p-1" rows={10} onChange={display}></textarea>
            </div>
            <div className="md:w-1/2 p-2 border-solid border-2 border-stone-900 border-l-0 breaks-words" dangerouslySetInnerHTML={{__html: str}}></div>
            <br />
        </div>
        <button className="py-1.5 px-3 rounded m-0.5 text-white bg-slate-700" onClick={post}>Post</button>
        </div>
        </>
    )
}

export default Textarea;