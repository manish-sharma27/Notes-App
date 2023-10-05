import React from "react";
import './Notes.css'
import deleteIcon from '../../Images/deleteIcon.png'

let timer=500,timeout
const Notes=(props)=>{

    const formatDate=(value)=>{

        if(!value) return "";
        const date= new Date(value);

        const monthNames=[
            'Jan',
            'feb',
            'march',
            'april',
            'May',
            'June',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
        ]

        let hrs= date.getHours();
        let amPm= hrs >12 ? "PM" : "AM";
        hrs= hrs || "12";
        // hrs= hrs ? hrs:"12";
        hrs= hrs >12 ? hrs= 24- hrs:hrs;

        let min= date.getMinutes();
        min=min<10? "0"+min:min;

        let day= date.getDate();
        const month= monthNames[date.getMonth()];

        return `${hrs}:${min} ${amPm} ${day} ${month}`;
    };

    const debounce=(func)=>{
        clearTimeout(timeout)
        timeout=setTimeout(func,timer);
    }

    const updateText=(text,id)=>{
        debounce(()=>props.updateText(text,id))
    }
    return(
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note_text" defaultValue={props.note.text}
                onChange={(event)=>updateText(event.target.value,props.note.id)}
            />
            <div className="note-footer">
            <p>{formatDate(props.note.time)} </p>
            <img src={deleteIcon} alt="Delete" 
                onClick={()=>props.deleteNote(props.note.id)}
            />
            </div>
        </div>
    );
}

export default Notes;