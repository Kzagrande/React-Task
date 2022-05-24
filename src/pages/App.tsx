import React,{useState} from 'react';
import Cronometer from '../components/cronometer';
import Form from '../components/form';
import List from '../components/list';
import { Itask } from '../types/ITask';
import style from  './App.module.scss'

;
function App() {
  const [tasks,setTasks] = useState<Itask[]>([]);
  const [selected,setSelected] = useState<Itask>();

  function selectTask(selectedTask:Itask){
    setSelected(selectedTask);
    setTasks(oldTasks =>oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function finishTask(){
    if(selected){
      setSelected(undefined);
      setTasks(oldTasks =>oldTasks.map(task =>{
        if(task.id === selected.id){
          return{
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
      tasks={tasks}
      selectTask = {selectTask}
      />
      <Cronometer 
      selected={selected}
      finishTask={finishTask}
      />
    </div>
  );
}

export default App;
