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


export default async function Page() {

  let obj;
  const dbRef = ref(getDatabase());

await get(child(dbRef, `data`)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = Object.keys(snapshot.val());
    obj = {
        length: data.length
    }
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    return (
        <h1>{obj.length} questions</h1>
    )
}