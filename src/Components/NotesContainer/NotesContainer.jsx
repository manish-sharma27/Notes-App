import React from 'react'
import Notes from '../Notes/Notes'
import "./NotesContainer.css"
const NotesContainer = (props) => {

  const reverseArr=(arr)=>{
    const array=[];

    for(let i=arr.length-1;i>=0;i--){
      array.push(arr[i])
    }
    return array;
  }

  const note=reverseArr(props.note)
  return (
    <div className='note-container'>
        <h2>Notes</h2>
      <div className='note-container-notes custom-scroll'>
        {
          note.length >0 ?
          note.map((item)=>(
            <Notes key={item.id} note={item}
             deleteNote={props.deleteNote}

             updateText={props.updateText}
            />
          )):
          
          (<h3>No Notes Present</h3>)
        }

      </div>
    </div>
  )
}

export default NotesContainer
