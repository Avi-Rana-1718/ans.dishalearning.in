import Breadcrumb from "./Breadcrumb";
import { useEffect } from "react";
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";

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
    const [desc, setDesc] = useState(null);
    const [author, setAuthor] = useState("Vandana Rana");
    const [time, setTime] = useState("18/12/2023");
    const [answer, setAnswer] = useState("Undefined");

    const [subject, setSubject] = useState("Undefined");
    const [standard, setStandard] = useState(null);

    useEffect(()=>{


        const data = ref(db, 'data/' + id);
        onValue(data, (snapshot) => {
          const data = snapshot.val();
           setQuestion(data.question);
           setAnswer(data.answer);
           setSubject(data.subject);
           setStandard(data.class);
           setTime(Date(data.time));
        });

        document.title = question + " - Disha Learning"

    })

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
            <p>{desc}</p>
            <h4 className="mt-4"><span className="text-[#04AA6D] font-medium text-xl">Answer : </span></h4>
            <p className="p-2.5" dangerouslySetInnerHTML={{__html:answer}}></p>
        </article>
        </>
    )

}

export default QuestionDiv;