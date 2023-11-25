import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navebar';
import Dashboard from './component/Dashboard';
import Create from './component/Create';
import Update from './component/Update';
import test from './component/test';
window.update_id=0;

function App() {
  // console.log(window.update_id);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
