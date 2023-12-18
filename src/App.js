import NavBar from './component/NavBar';
import QuestionDiv from './component/QuestionDiv';

import './App.css';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <main>
    <Routes>
      <Route path="answers/:id" element={<QuestionDiv/>} />
    </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
