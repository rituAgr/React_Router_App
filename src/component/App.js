import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from "./ItemDetail";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" exact element={<Shop/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shop/:id" element={<ItemDetail/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

const Home = () => {
    return (
      <div>
          <h1>Home Page</h1>
      </div>
    );
}