import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activation from './pages/Activation';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Question5 from './pages/Question5';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activation" element={<Activation />} />
      <Route path="/question-1" element={<Question1 />} />
      <Route path="/question-2" element={<Question2 />} />
      <Route path="/question-3" element={<Question3 />} />
      <Route path="/question-4" element={<Question4 />} />
      <Route path="/question-5" element={<Question5 />} />
    </Routes>
  )
}

export default App;
