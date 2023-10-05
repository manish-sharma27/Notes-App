import { useEffect, useState } from 'react';
import './App.css';
import NotesContainer from './Components/NotesContainer/NotesContainer';
import SideBar from './Components/SideBar/SideBar';

function App() {
  const [note, setNote]=useState(JSON.parse(localStorage.getItem('notesapp'))||[]);
const addNote=(color)=>{
  const tempNote=[...note];

  tempNote.push(
    {
      id:Date.now()+""+Math.floor(Math.random()*78),
      text:'',
      time:Date.now(),
      color,
    }
  );
  setNote(tempNote);
};
 const deleteNote=(id)=>{
  const tempNote=[...note];

  const index= tempNote.findIndex((item)=>item.id===id);

  if(index<0) return;
  tempNote.splice(index,1);
  setNote(tempNote)
 };

 const updateText=(text,id)=>{
  const tempNote=[...note];

  const index= tempNote.findIndex((item)=>item.id===id);

  if(index<0) return;
  tempNote[index].text=text;
  setNote(tempNote);

 }
 useEffect(()=>{
  localStorage.setItem('notesapp', JSON.stringify(note))
 },[note])
  return (
    <div className='app'>
      <SideBar addNote={addNote} />
      <NotesContainer note={note} 
      deleteNote={deleteNote}
      updateText={updateText}
      />
    </div>
  );
}

export default App;
