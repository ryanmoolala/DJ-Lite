import './App.css';
import IndexPage from './Components/IndexPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/api/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
