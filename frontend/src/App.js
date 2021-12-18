import React, { useState } from "react";
import axios from "axios";

import Header from "./components/UI/Header";
import NewTask from "./components/tasks/NewTask";
import TaskList from "./components/tasks/TaskList";

function App(props) {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState(true);

  React.useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get("/api/todos/")
      .then((res) => setTaskList(res.data))
      .catch((err) => console.log(err));
  };

  const addTaskHandler = (title, description, id) => {
    const item = {
      id: id,
      title: title,
      description: description,
      completed: false,
    };

    axios.post("/api/todos/", item).then(() => refreshList());
  };

  const onDeleteHandler = (id) => {
    axios.delete(`/api/todos/${id}`).then(() => refreshList());
  };

  const onCompleteHandler = (id) => {
    const item = taskList.find((obj) => {
      return obj.id == id;
    });

    axios
      .put(`/api/todos/${id}/`, {
        id: id,
        title: item.title,
        description: item.description,
        completed: true,
      })
      .then(() => refreshList())
      .catch((err) => console.log(err));
  };

  let pendingList = taskList.filter((obj) => {
    if (filter == false) {
      return obj.completed == true;
    } else {
      return obj.completed == false;
    }
  });

  const filterChangeHandler = (param) => {
    if (param == true) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };

  return (
    <React.Fragment>
      <Header filterHandler={filterChangeHandler}></Header>
      <NewTask onAdd={addTaskHandler}></NewTask>
      <TaskList
        list={pendingList}
        onDelete={onDeleteHandler}
        onComplete={onCompleteHandler}
      ></TaskList>
    </React.Fragment>
  );
}

export default App;
