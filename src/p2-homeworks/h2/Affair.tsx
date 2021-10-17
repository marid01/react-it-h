import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.affair}>
           <div className={s.item}>{props.affair.name}</div>
           <div className={priorityClass}>[{props.affair.priority}]</div>

            <button onClick={deleteCallback} className={s.item + ' ' + s.button}>X</button>
        </div>
    )
}

export default Affair
