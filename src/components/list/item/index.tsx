import { Itask } from '../../../types/ITask'
import style from './Item.module.scss'

interface Props extends Itask{
   
    selectTask: (selectedTask: Itask)=> void
}

export default function Item ({task,
    time,
    selected,
    completed,
    id,
    selectTask
}: Props){
        
    return(

        <li className={`${style.item} ${selected ? style
            .selectedItem : ''} ${completed ? style.completedItem : ''}`} 
        onClick={()=> !completed && selectTask({
            task,
            time,
            selected,
            completed,
            id,

        })}>
        <h3>
        </h3>
            <span>
           {time}
            </span>
            {completed && <span className={style.concluded}
            aria-label="Task Completed"></span> }
        </li>
    )
}