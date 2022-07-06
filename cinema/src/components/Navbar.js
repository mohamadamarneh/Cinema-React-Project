import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';

function Navbar () {
    return ( <div>
        <h1>Navbar</h1>
    <NavLink to='/' >Home </NavLink >
    <NavLink to='/About'>About </NavLink >
    <NavLink to='/Contact'>contact </NavLink >
    </div> );
}

export default Navbar;
