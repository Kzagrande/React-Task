
import { Itask } from "../../types/ITask";
import Item from "./item";
import style from './List.module.scss'

interface Props{
    tasks: Itask[]
    selectTask: (selectedTask: Itask)=> void
}

function List ({tasks,selectTask}:Props){

    return(
        <aside className={style.taskList}>
            <h2 >Studies of the day</h2>
            <ul>
                {tasks.map((item,index)=>(
                    <Item 
                    selectTask={selectTask}
                    key={index}
                    {...item}
                    />
                ))}
            
            </ul>
        </aside>
    )
}

export default List
