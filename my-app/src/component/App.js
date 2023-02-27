// import React, { useState } from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';

//import { Routes, Route, Router } from 'react-router-dom';
//import { getAuth } from 'firebase/auth';

import { NavBar } from './NavBar.js';
import { AboutPage } from './AboutPage.js';
import { ItemPage } from './ItemPage.js';
import { Category } from './Category.js';
import { BrandList } from './BrandList.js';
import { Footer } from './Footer.js';
import { HomePage } from './HomePage.js';

export default function App(props) {
    
    // return (
    //     //<Router>
    //         <div className="page-content">
    //             <NavBar/>
    //             <div className="route-choice">
    //                 <Routes>
    //                     <Route path="/home" element={<HomePage /> } />
    //                     <Route path="/item" element={<ItemPage /> } />
    //                     <Route path="/about" element={<AboutPage /> } />
    //                 </Routes>
    //             </div>
    //             <Footer />
    //         </div>
    //     //</Router>
    // );

        return (
        //<Router>
            <div className="page-content">
                <NavBar/>
                <div className="route-choice">
                    <HomePage /> 
                    <ItemPage /> 
                    <AboutPage /> 
                </div>
                <Footer />
            </div>
        //</Router>
    );
}


