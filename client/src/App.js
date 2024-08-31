import "./App.css"
import Home from "./Pages/Home/Home.js";
import Profile from "./Pages/Profile/Profile";
import Auth from "./Pages/Auth/Auth.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
function App() {
  // const user = useSelector((state) => state.authReducer.authData)
  const [user,setuser]=useState(true);
  return (

    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />} />
        <Route path="/home" element={<Home/> } />
        <Route path="/auth" element={<Auth/>} />
      </Routes>
      
    </div>
  );
}

export default App;
