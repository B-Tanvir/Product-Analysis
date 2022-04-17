// import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import {createContext, useState} from "react";

export const ReviewContext = createContext()

function App() {
  return (
      <ReviewContext.Provider value={useState([])}>
        <div className={'bg-zinc-50'}>
          <Navbar/>
          <Routes>
            <Route path={'/'} element={<Home/>}></Route>
          </Routes>
        </div>
      </ReviewContext.Provider>
  );
}

export default App;
