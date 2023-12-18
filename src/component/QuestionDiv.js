import "./QuestionDiv.css";
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
          console.log(data);
           setQuestion(data.question);
           setAnswer(data.answer);
           setSubject(data.subject);
           setStandard(data.class);
           setTime(data.time);
        });

    })

    return (
        <>
        <article>
            <Breadcrumb />
            <h4><span>Question : </span>{question}</h4>
            <small>Submitted on <time>{time}</time> | Answered by <u>{author}</u></small>
            <ul>
                <li>{subject}</li>
                <li>{standard}</li>
            </ul>
            <p>{desc}</p>
            <h4><span>Answer : </span></h4>
            <p>{answer}</p>
        </article>
        </>
    )

}

export default QuestionDiv;