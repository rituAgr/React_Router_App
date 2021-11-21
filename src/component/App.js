import React from "react";
// import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';

function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
