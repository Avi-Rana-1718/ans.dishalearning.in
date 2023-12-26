import Breadcrumb from "./Breadcrumb";
import { useEffect } from "react";
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onValue } from "firebase/database";

import {useParams} from "react-router-dom";

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
const analytics = getAnalytics(app);
const database = getDatabase();

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

const db = getDatabase();

function QuestionDiv(props) {
    
    const {id} = useParams();

    const [question, setQuestion] = useState("Undefined");
    const [author, setAuthor] = useState("Vandana Rana");
    const [time, setTime] = useState(0);
    const [answer, setAnswer] = useState("Undefined");

    const [subject, setSubject] = useState("Undefined");
    const [standard, setStandard] = useState(null);

    const [reportCount, setReport] = useState(0)

    useEffect(()=>{


        const data = ref(db, 'data/' + id);
        onValue(data, (snapshot) => {
          const data = snapshot.val();
           setQuestion(data.question);
           setAnswer(data.answer);
           setSubject(data.subject);
           setStandard(data.class);
          setTime(new Date(data.timestamp).getDate() + "/" + new Date(data.timestamp).getMonth() + "/" + new Date(data.timestamp).getFullYear());
           if(data.report===undefined) {
            setReport(0)
           } else {
            setReport(data.report);
           }
        });

    }, [id, question, answer, subject, standard, author, time])

    function reportQuestion() {
      const db = getDatabase();
            update(ref(db, 'data/' + id), {
              report: reportCount+1
            }).then(()=>{
                alert("Reported");

            }).catch(err=>{
                alert(err);
            })
    }

    document.title = question + " - Disha Learning"

    return (
        <>
        <article className="font-['Epilogue']">
            <Breadcrumb />
            <h4 className="mt-2 text-xl"><span className="font-medium text-[#04AA6D] text-xl">Question : </span>{question}</h4>
            <small className="my-1.5">Submitted on <time>{time}</time> | Answered by <u>{author}</u></small>
            <ul className="flex">
                <li className="text-sm bg-[#F3F6FC] py-1 px-1.5 rounded-2xl shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] m-1">{subject}</li>
                <li className="text-sm bg-[#F3F6FC] py-1 px-1.5 rounded-2xl shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] m-1">{standard}</li>
            </ul>
            <h4 className="mt-4"><span className="text-[#04AA6D] font-medium text-xl">Answer : </span></h4>
            <p className="p-2.5" dangerouslySetInnerHTML={{__html:answer}}></p>

            <div className="bg-[#F8D7DA] px-4 py-2 my-3 rounded">
            <h4 className="font-medium"> <i class="fa-solid fa-triangle-exclamation"></i> Incorrect answer?</h4>
            <p className="text-sm">Think the answer is wrong? Report the answer & let us know!</p>
            <button className="bg-[#58151C] text-[#fff] py-2 px-2 rounded my-3 hover:underline" onClick={reportQuestion}>Report</button>
            </div>
        </article>
        </>
    )

}

export default QuestionDiv;