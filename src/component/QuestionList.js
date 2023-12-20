import { useEffect, useState } from "react";
import Listitem from "./Listitem";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";

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

const db = getDatabase();

function QuestionList() {

    const [listData, setData] = useState([]);

    useEffect(()=>{
        const data = ref(db, 'data');
        onValue(data, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
            setData(data)
        });

    })

    return (
        <>
        {(()=>{
            let arr=[];
            if(listData!=null) {
                Object.keys(listData).map(key=>{
                   return arr.push(<Listitem title={listData[key].question} url={"/answers/" + key} />);
                })
        }
            return arr;
        })()
        }
        </>
    )
}

export default QuestionList;