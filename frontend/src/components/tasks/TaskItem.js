import React from "react";

import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  const deleteHandler = (event) => {
    const id = event.target.parentElement.parentElement.parentElement.id;
    props.onDelete(id);
  };

  const completeHandler = (event) => {
    const id = event.target.parentElement.parentElement.parentElement.id;
    props.onComplete(id);
  };

  return (
    <div className={classes.task} id={props.id}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.commands}>
        <div className={classes.complete}>
          <button onClick={completeHandler}>Complete</button>
        </div>
        <div className={classes.delete}>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
