import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NumberGuessingGame from './NumberGuessingGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<NumberGuessingGame />} />
      </Routes>
    </Router>
  );
}

export default App;
