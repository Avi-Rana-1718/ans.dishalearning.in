import Listitem from '@/components/Listitem';
import Link from 'next/link'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

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


export default async function Home() {

  let blogData;
  const dbRef = ref(getDatabase());

await get(child(dbRef, `blog`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    blogData=data;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

  return (
    <header className="text-center p-1">
    <h2 className="font-bold text-3xl pt-3">Answers to all your questions</h2>
    <small className="text-sm block m-1">Approved answers to all questions!</small>
    <Link href="/answers"><button className="bg-[#04AA6D] text-[#fff] py-2 px-4 rounded-3xl m-3 hover:underline">Go to Answers</button></Link>

    <div className="text-left">
      <h3 className="text-xl pt-3">Blog</h3>
      {(()=>{
            let arr=[];
            if(blogData!=null) {
                Object.keys(blogData).map(key=>{
                   return arr.push(<Listitem title={blogData[key].title} url={"/blog/" + key} tag={null} />);
                })
        }
            return arr;
        })()
        }
    </div>

    <div className="px-4 py-2 my-3 rounded bg-[#f3f3f3] text-left dark:bg-[#383838]">
    <small className="text-sm"><i class="fa-solid fa-square-up-right"></i> Head to main website</small>
    <a href="/"><h3 className=" text-lg hover:underline" disabled>Disha Learning</h3></a>
    <a href="/"><button className="bg-[#454545] text-[#fff] py-2 px-2 rounded my-3 hover:underline" disabled>Unavailable <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
    </div>
</header>

  )
}