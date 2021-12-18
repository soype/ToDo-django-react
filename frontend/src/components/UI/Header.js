import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {

    const pendingHandler = () =>{
        props.filterHandler(true)
    };

    const completeHandler = () =>{
        props.filterHandler(false)
    };

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>ToDo</div>
      <div className={classes.commands}>
        <button className={classes.pending} onClick={pendingHandler}>Pending</button>
        <button className={classes.completed} onClick={completeHandler}>Completed</button>
      </div>
      <div>
        <button className={classes.login} onClick={() => {console.log("Coming soon!")}}>Login</button>
      </div>
    </nav>
  );
};

export default Header;
