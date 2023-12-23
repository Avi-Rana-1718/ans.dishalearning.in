import { useEffect, useState } from "react";


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

        function post() {
            const db = getDatabase();
            set(ref(db, 'data/' + ((document.querySelector("#one").value).replace(/[^A-Z0-9]/ig, "")).toLowerCase()), {
             question: document.querySelector("#one").value,
              timestamp: Date.now(),
              subject:  document.querySelector("#two").value,
              class: document.querySelector("#three").value,
              answer: document.querySelector("#ans").value
            }).catch(err=>{
                throw err;
            })

   
        }

    return (
        <>
        <input id="one" className="border-solid border-2 border-stone-900 m-1 p-0.5" placeholder="Enter question" />
        <br />
        <input id="two" className="border-solid border-2 border-stone-900 m-1 p-0.5" placeholder="subject" />
        <br />
        <input id="three" className="border-solid border-2 border-stone-900 m-1 p-0.5" placeholder="class" />
        <br />
        <div className="md:flex p-0">
            <div className="md:w-1/2 border-solid border-2 border-stone-900">
            <button className="p-1 m-0.5 text-white bg-slate-700" onClick={bold}>Bold</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={sup}>Super</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={sub}>Sub</button>
            <button className="p-1 m-0.5 text-white bg-slate-700"onClick={block}>Code</button>

            <textarea id="ans" className="w-full p-1" rows={10} onChange={display}></textarea>
            </div>
            <div className="md:w-1/2 p-2 border-solid border-2 border-stone-900 border-l-0" dangerouslySetInnerHTML={{__html: str}}></div>
            <br />
        </div>
        <button className="p-1 m-0.5 text-white bg-slate-700" onClick={post}>Post</button>
        </>
    )
}

export default Textarea;