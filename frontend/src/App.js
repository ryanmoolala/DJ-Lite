import './App.css';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/api/home" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
