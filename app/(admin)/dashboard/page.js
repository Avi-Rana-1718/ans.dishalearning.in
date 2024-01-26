import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import Link from "next/link";


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
      <>
          <h3 className="text-2xl underline decoration-[#04AA6D] decoration-2 font-medium mb-4">Dashboard</h3>
      <section className="flex">
      <div className=" p-3 rounded m-2 bg-[#f3f3f3] text-left dark:bg-[#383838]">
      <small className="text-sm block">Total questions: {obj.length}</small>
      </div>
      <Link href="/answers"><button className="bg-[#f3f3f3] dark:bg-[#383838] dark:text-[#fff]  p-3 rounded m-2 hover:underline">Go to answers <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>
      <Link href="/write"><button className="bg-[#f3f3f3] dark:bg-[#383838] dark:text-[#fff] p-3 rounded m-2 hover:underline">Submit new answer <i class="fa-solid fa-arrow-up-right-from-square"></i></button></Link>

        </section>
      </>
    )
}