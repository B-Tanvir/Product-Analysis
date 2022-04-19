// import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import {createContext, useState} from "react";
import Reviews from "./Reviews/Reviews";
import NotFound from "./components/NotFound/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";

export const ReviewContext = createContext()

function App() {
  return (
      <ReviewContext.Provider value={useState([])}>
        <div className={'bg-zinc-50'}>
          <Navbar/>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
              <Route path={'/reviews'} element={<Reviews/>}/>
              <Route path={'/dashboard'} element={<Dashboard/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'/blogs'} element={<Blogs/>}/>
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>
        </div>
      </ReviewContext.Provider>
  );
}

export default App;
