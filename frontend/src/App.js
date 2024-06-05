import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/api/home" element={<HomePage/>} />
        <Route path="/api/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
