import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NumberGuessingGame from './NumberGuessingGame';
import './App.css'; // Ensure you import the CSS file

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<NumberGuessingGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
