import { Trash } from '@phosphor-icons/react';
import styles from './TaskList.module.css';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

interface TaskListProps{
    content:string;
    onDeletedTask:(deletedtask:string)=>void
    onCheckedTask:(checkedTask:boolean)=>void
}

export function TaskList({content,onDeletedTask,onCheckedTask}:TaskListProps){
    const [isChecked,setIsChecked]=useState(false);
    function handleDeleteTask(){
        onDeletedTask(content);
    }
    function onCheckedTaskList(isChecked:boolean){
        setIsChecked(isChecked)
        onCheckedTask(isChecked);
    }


    return(
        <div className={styles.tasklist__layout}>
            <Checkbox isChecked={isChecked} onCheckedChange={onCheckedTaskList} />
            {isChecked ? <p className={styles.tasklist__textmarked}>{content}</p> : <p>{content}</p> }
            <Trash size={24} onClick={handleDeleteTask}/>
        </div>
    )
}