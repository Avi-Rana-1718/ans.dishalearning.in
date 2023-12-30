import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
import Breadcrumb from "@/components/Breadcrumb";

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


export async function generateMetadata(props) {
  let obj;
  const dbRef = ref(getDatabase());

await get(child(dbRef, `data/${props.params.id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    obj = {
      title: data.question + " | Answers - Disha Learning"  
    }
  } else {
    obj = {
      title: data.question + " | Answers - Disha Learning"  
    }
  }
}).catch((error) => {
  console.error(error);
});

  return obj;

}

export default async function Page(props) {

  let obj;
  const dbRef = ref(getDatabase());

await get(child(dbRef, `data/${props.params.id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    obj = {
      question: data.question,
      answer: data.answer,
      subject: data.subject,
      standard: data.class,
      author: "Vandana Rana",
      time: (new Date(data.timestamp).getDate() + "/" + new Date(data.timestamp).getMonth() + "/" + new Date(data.timestamp).getFullYear())
    }
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});




   return (
<article>
      <Breadcrumb />
    <h4 className="mt-2 text-xl"><span className="font-medium text-[#04AA6D] text-xl">Question : </span><span dangerouslySetInnerHTML={{__html: obj.question}}></span></h4>
    <small className="my-1.5">Submitted on <time>{obj.time}</time> | Answered by <u>{obj.author}</u></small>
    <ul className="flex">
        <li className="text-sm bg-[#F3F6FC] py-1 px-1.5 rounded-2xl shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] m-1">{obj.subject}</li>
        <li className="text-sm bg-[#F3F6FC] py-1 px-1.5 rounded-2xl shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] m-1">{obj.standard}</li>
    </ul>
    <h4 className="mt-4"><span className="text-[#04AA6D] font-medium text-xl">Answer : </span></h4>
    <p className="p-2.5" dangerouslySetInnerHTML={{__html: obj.answer}}></p>
</article>
   )
}