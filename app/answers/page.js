"use client"

import { useEffect, useState } from "react";
import Listitem from "@/components/Listitem";

import { initializeApp } from "firebase/app";
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
const database = getDatabase();

const db = getDatabase();


export default function Answers() {

const [listData, setData] = useState([]);

    useEffect(()=>{
        const data = ref(db, 'data');
        onValue(data, (snapshot) => {
          const data = snapshot.val();
            setData(data)
        });

    },[listData])

    return (
        <>
        <h4 className="text-xl font-bold my-2">Questions</h4>
        {(()=>{
            let arr=[];
            if(listData!=null) {
                Object.keys(listData).map(key=>{
                   return arr.push(<Listitem title={listData[key].question} url={"/answers/" + key} tag={listData[key].subject} />);
                })
        }
            return arr;
        })()
        }
        </>
    )
}