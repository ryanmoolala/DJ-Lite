import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/api/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
