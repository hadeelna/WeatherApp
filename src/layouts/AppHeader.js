import React from 'react';

import { Link }from 'react-router-dom';
import Styles from'./AppHeader.module.css';

export const AppHeader=()=>{
    return(
      
        <header className={Styles.header} >
            Weather Dashboard
            <nav>
                <ul>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/SearchLocations">search Locations</Link></li>
                    <li><Link to="/Savedlocations">show saved Locations</Link></li>
                </ul>
            </nav>
        </header>  
    )
}
export default AppHeader