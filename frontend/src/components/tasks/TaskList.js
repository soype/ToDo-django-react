import React from 'react';

import TaskItem from './TaskItem';

import classes from './TaskList.module.css';


const TaskList = props => {

    const onDeleteHandler = (id) => {
        props.onDelete(id)
    }

    const onCompleteHandler = (id) => {
        props.onComplete(id)
    }


    
    return (
        <ul className={classes['goal-list']}>
            {props.list.map((task, index) => (
                <TaskItem
                key={index}
                id={task.id}
                title={task.title}
                description={task.description}
                onDelete={onDeleteHandler}
                onComplete={onCompleteHandler}
                ></TaskItem>
            ))}
        </ul>
    )
}

export default TaskList