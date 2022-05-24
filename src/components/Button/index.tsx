import React from 'react';
import style from './Button.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: ()=> void,
    children?: React.ReactNode
}

function Button({onClick, type, children}: Props){
    return(
        <button onClick={onClick} 
        type={type} 
        className={style.Button}>
        {children}
    </button>
    )
}


class Button1 extends React.Component <any,{
    type?: "button" | "submit" | "reset" | undefined
    onClick?: ()=> void
}> {
    render(){
        const{type = "button, " ,onClick} = this.props;
        return(
            <button onClick={onClick} 
            type={type} 
            className={style.Button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;