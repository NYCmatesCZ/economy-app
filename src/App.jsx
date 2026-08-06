import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Nav from "./components/Nav";
import { useState } from 'react';
import './App.css';
import  Historie  from "./routes/Historie.jsx";
import  Profil  from "./routes/Profil.jsx";
import  Kalkulacka  from "./routes/Kalkulacka.jsx";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <div>
          <Routes>
                <Route path="/"  element={<Profil/>}/>
                <Route path="/kalkulacka" element={<Kalkulacka />} />
                <Route path="/historie" element={<Historie />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
