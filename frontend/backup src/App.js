import React, { useState } from "react";
import axios from 'axios';

import Header from "./components/UI/Header";
import NewTask from "./components/tasks/NewTask";
import TaskList from "./components/tasks/TaskList";

function App(props) {
  const [taskList, setTaskList] = useState([]);

  // React.useEffect(() => {
  //   refreshList()
  // }, []);

  // const refreshList = () => {
  //   axios
  //     .get('/api/todos/')
  //     .then((res) => setTaskList({ taskList: res.data}))
  //     .catch((err) => console.log(err))
  // };

  const addTaskHandler = (title, description, id) => {
    let newTaskList = taskList.concat({
      title: title,
      description: description,
      key: id,
    });
    setTaskList(newTaskList);
  };

  const onDeleteHandler = (id) => {
    
    const newList = taskList.filter(obj => {
      return obj.key !== id
    })
    setTaskList(newList)
  }
  

  return (
    <React.Fragment>
      <Header></Header>
      <NewTask onAdd={addTaskHandler}></NewTask>
      <TaskList list={taskList} onDelete={onDeleteHandler}></TaskList>
    </React.Fragment>
  );
}

export default App;