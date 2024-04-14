import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { TaskList } from './TaskList';
import styles from './Tasks.module.css';
import { TasksContentEmpty } from './TasksContentEmpty';
import { PlusCircle } from '@phosphor-icons/react';
export function Tasks() {
    
    const [countChecked, setCountChecked] = useState(0);
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask,setNewTask]=useState('');
    const [countTasks, setCountTasks] = useState(tasks.length);
    const [checked,setChecked]=useState(false);

    function handleNewCreateTask(event: ChangeEvent<HTMLInputElement>):void {
        setNewTask(event.target.value);
    }
    function handleCreateTask(){
        setTasks([...tasks,newTask]);
        setCountTasks((state)=>{
            return state+1
        })
    }

    function handleDeleteTask(deletedtask:string){
       const newtasklist=tasks.filter(task=>task!=deletedtask)
       setTasks(newtasklist);
       setCountTasks((state)=>{
        return state-1
    })
    setCountChecked((state)=>{
        return state-1
    })
    }

    function handleCheckedTask(isChecked:boolean){
        setChecked(isChecked);
        if(!isChecked){
            setChecked(checked);
            setCountChecked((state)=>{
                return state-1
            })
        }else{
            setChecked(!checked);
            setCountChecked((state)=>{
                return state+1
            })
        }
        console.log(countChecked)

    }
    function tests(){
        console.log(tasks)
    }

    return (
        <div className={styles.tasks__layout}>
            <section className={styles.inputForm__layout}>
                <input placeholder='Adicione uma nova tarefa' onChange={handleNewCreateTask}/>
                <button onClick={handleCreateTask}>Criar <PlusCircle weight='bold' size={16} /></button>
            </section>
            <div className={styles.tasks__information}>
                <div>
                    <span className={styles.tasks__information_created}>Tarefas criadas</span>
                    <span className={styles.tasks__information_badge}>{countTasks}</span>
                </div>
                <div>
                    <span className={styles.tasks__information_finished}>Concluídas</span>
                    <span className={styles.tasks__information_badge}>{countChecked > 0 ? `
                    ${countChecked} de ${countTasks}`  : 0 }</span>
                </div>
            </div>
            {tasks.map(task => (
                <TaskList onCheckedTask={handleCheckedTask} content={task} key={task} onDeletedTask={handleDeleteTask} />
            ))}
        </div>
    )
}