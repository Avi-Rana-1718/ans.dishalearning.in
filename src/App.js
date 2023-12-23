import NavBar from './component/NavBar';
import QuestionDiv from './component/QuestionDiv';
import QuestionList from './component/QuestionList';
import Texteditor from "./component/Texteditor";
import Footer from './component/Footer';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './component/Main';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <main className="bg-white min-h-screen m-3 md:!mx-[25vw] shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] p-4 rounded-[5px]">
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/answers" element={<QuestionList/>} />
      <Route path="answers/:id" element={<QuestionDiv/>} />
      <Route path="/write" element={<Texteditor />} />
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
