import React from "react";
import {Link} from 'react-router-dom'
const Nabar=()=>{
    return <nav className="navbar navbar-black bg-dark navbar-expand-lg">
    <Link to="/home" className="navbar-brand"></Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="color:white">
                <h1>hello world</h1>
                </li>

            </ul>
        </div>        
    </nav>
}
export default Nabar;
