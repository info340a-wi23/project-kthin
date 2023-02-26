// import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import { NavBar } from './NavBar.js';
import { AboutPage } from './AboutPage.js';
import { ItemPage } from './ItemPage.js';
//import { Category } from './Category.js';
//import { BrandList } from './BrandList.js';
import { Footer } from './Footer.js';
import { Homepage } from './Homepage.js';

function App(props) {
    //const { brandsData, categoryData } = props;
    //const { brands } = props.brands;

    return (
        <div>
            <NavBar />
            <Homepage />
            <ItemPage />
            <AboutPage />
            <Footer/>
        {/* <Brands brands={brandsData} /> */}
        {/* <Category categories={categoryData}/> */}
        </div>
    );
}

export default App;