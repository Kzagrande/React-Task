import style from "./Timer.module.scss"

interface Props{
    time: number | undefined
}

export default function Timer({time = 0}:Props){
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    const [minuteDez, minuteUni] = String(minutes)
    .padStart(2,'0');
    const [secondDez, secondUni] = String(seconds).padStart(2,'0');


    return(
     <>
        <span className={style.timerNumber}>{minuteDez}</span>
        <span className={style.timerNumber}>{minuteUni}</span>
        <span className={style.timerDivision}>:</span>
        <span className={style.timerNumber}>{secondDez}</span>
        <span className={style.timerNumber}>{secondUni}</span>
     </>
  
        
    )
}

