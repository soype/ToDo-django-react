import React from 'react';

import TaskItem from './TaskItem';

import classes from './TaskList.module.css';


const TaskList = props => {

    const onDeleteHandler = (id) => {
        props.onDelete(id)
    }


    
    return (
        <ul className={classes['goal-list']}>
            {props.list.map((task, index) => (
                <TaskItem
                key={index}
                id={task.key}
                title={task.title}
                description={task.description}
                onDelete={onDeleteHandler}
                ></TaskItem>
            ))}
        </ul>
    )
}

export default TaskList