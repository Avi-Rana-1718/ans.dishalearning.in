import NavBar from './component/NavBar';
import QuestionDiv from './component/QuestionDiv';
import QuestionList from './component/QuestionList';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <main className="bg-white max-h-full mx-3 md:!mx-[25vw] shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] h-full p-4 rounded-[5px]">
    <Routes>
      <Route path="/" element={<QuestionList/>} />
      <Route path="answers/:id" element={<QuestionDiv/>} />
    </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
