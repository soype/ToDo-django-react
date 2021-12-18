import React from 'react';

import classes from './Header.module.css';

const Header = () => {
    return(
        <nav className={classes.navbar}>
            <div className={classes.logo}>ToDo</div>
            
        </nav>
    )
}

export default Header;

//<div className={classes.commands}>
// <ul>
                    
// <li><a href="#">My account</a></li>  
// </ul>
// </div>
// <div><button className={classes.login}>Login</button></div>