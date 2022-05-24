import Button from "../Button";
import Timer from "./Timer";
import style from "./Cronometer.module.scss"
import {timeToSeconds} from "../../common/utils/time";
import { Itask } from "../../types/ITask";
import { useEffect, useState } from "react";

interface Props{
    selected: Itask | undefined,
    finishTask: ()=> void
}

export default function Cronometer({ selected,finishTask}: Props){
    const [time,setTime] = useState<number>();

    useEffect(()=>{
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
       
    },[selected]);

    function regressive(timer:number = 0){
        setTimeout(()=>{
            if(timer >0){
                setTime(timer -1);
                return regressive(timer-1);
            }
            finishTask()
            
        },1000)
    }
   
    return(
        <div className={style.cronometer}>
            <p className={style.title}>Chose a card and start the cronometer</p>
    
        <div className={style.timerWrapper}>
        <Timer time={time}/>
        </div>
        <Button onClick={()=> regressive(time)}>
            Start Now
            </Button>
            </div>
    )
}