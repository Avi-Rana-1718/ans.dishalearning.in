import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";
import Breadcrumb from "@/components/Breadcrumb";
import { Open_Sans } from 'next/font/google'
 
const opensans = Open_Sans({ subsets: ['latin'] })

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

await get(child(dbRef, `blog/${props.params.id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    obj = {
      title: data.title + " | Answers - Disha Learning"  
    }
  } else {
    obj = {
      title: "Answers - Disha Learning"  
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

await get(child(dbRef, `blog/${props.params.id}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val()
    obj = {
      title: data.title,
      content: data.content,
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
      <Breadcrumb url="/" place="Blog"/>
    <h4 className="mt-2 text-xl" dangerouslySetInnerHTML={{__html: obj.title}}></h4>
    <small className="my-1.5">Posted on <time>{obj.time}</time></small>
    <p className={opensans.className} dangerouslySetInnerHTML={{__html: obj.content}}></p>
</article>
   )
}