import styles from './TasksContentEmpty.module.css';
import IconClipBoard from './../assets/Clipboard.svg';
export function TasksContentEmpty(){
    return(
        <main className={styles.tasks__content}>
                <img src={IconClipBoard} alt="" />
                <p className={styles.tasks__content_textOne}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
    )
}