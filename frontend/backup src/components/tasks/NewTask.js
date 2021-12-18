import classes from "./NewTask.module.css";
import React, {useState} from "react";

import Card from "../UI/Card";

const NewTask = (props) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const titleHandler = (event) =>{
        setTitle(event.target.value)
    }

    const descriptionHandler = event =>{
        setDescription(event.target.value)
    }

  const newTaskHandler = (event) => {
    event.preventDefault();
    const id = Math.random().toFixed(2)
    if (title != null){
        if (title.trim().length > 0){
            props.onAdd(
                title, description, id
            )
        }
    }
  };

  return (
    <Card>
      <form onSubmit={newTaskHandler}>
        <div className={classes.title}>
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={titleHandler}
          />
        </div>
        <div className={classes.description}>
          <textarea
            name=""
            id="description"
            col="5em"
            rows="5"
            placeholder="Beauty is in the details!"
            onChange={descriptionHandler}
          ></textarea>
        </div>
        <div className={classes.submit}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </Card>
  );
};

export default NewTask;
