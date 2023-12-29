import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, onValue } from "firebase/database";

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

  export function generateMetadata(props) {

    let question;
    let author="Vandana Rana";
    let time=0;
    let answer;
    let subject;
    let standard;
    let reportCount=0;

        const data = ref(db, 'data/' + props.params.id);

        onValue(data, (snapshot) => {
          const data = snapshot.val();
           question=data.question;
           answer=data.answer;
           subject=data.subject;
           standard=data.class;
            time = (new Date(data.timestamp).getDate() + "/" + new Date(data.timestamp).getMonth() + "/" + new Date(data.timestamp).getFullYear());
        });

    return {
      title: question + " | Answers - Disha Learning"
    }

  }

export default function Page (props) {

    let question;
    let author="Vandana Rana";
    let time=0;
    let answer;
    let subject;
    let standard;
    let reportCount=0;

        const data = ref(db, 'data/' + props.params.id);

        onValue(data, (snapshot) => {
          const data = snapshot.val();
           question=data.question;
           answer=data.answer;
           subject=data.subject;
           standard=data.class;
            time = (new Date(data.timestamp).getDate() + "/" + new Date(data.timestamp).getMonth() + "/" + new Date(data.timestamp).getFullYear());
           if(data.report===undefined) {
            reportCount=0;
           } else {
            reportCount=data.report;
           }
        });

    function reportQuestion() {
      const db = getDatabase();
            update(ref(db, 'data/' + props.params.id), {
              report: reportCount+1
            }).then(()=>{
              
                alert("Reported");

            }).catch(err=>{
                alert(err);
            })
    }

    let markup = {__html: answer}

   return (
    <article>
    {/* <Breadcrumb /> */}
    <h4 className="mt-2 text-xl"><span className="font-medium text-[#04AA6D] text-xl">Question : </span>{question}</h4>
    <small className="my-1.5">Submitted on <time>{time}</time> | Answered by <u>{author}</u></small>
    <ul className="flex">
        <li className="text-sm bg-[#F3F6FC] py-1 px-1.5 rounded-2xl shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] m-1">{subject}</li>
        <li className="text-sm bg-[#F3F6FC] py-1 px-1.5 rounded-2xl shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] m-1">{standard}</li>
    </ul>
    <h4 className="mt-4"><span className="text-[#04AA6D] font-medium text-xl">Answer : </span></h4>
    <p className="p-2.5">{answer}</p>

    {/* <div className="bg-[#F8D7DA] px-4 py-2 my-3 rounded">
    <h4 className="font-medium">Incorrect answer?</h4>
    <p className="text-sm">Think the answer is wrong? Report the answer & let us know!</p>
    <button className="bg-[#58151C] text-[#fff] py-2 px-2 rounded my-3 hover:underline" onClick={reportQuestion}>Report</button>
    </div> */}

</article>
   )
}