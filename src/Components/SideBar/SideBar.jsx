import React, { useState } from 'react'
import plus from '../../Images/plus.png'
import  './SideBar.css'
const SideBar = (props) => {
  const colors=['#fe9b72','#ffff00','#00ffbf','#0080ff','#bf00ff','#ff0000'];
  const [listOpen, setListOpen]=useState(false);
  return (
    <div className='sidebar'>
      <img src={plus} alt="Add"  onClick={()=>setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
        {
          colors.map((item,index)=>(
        <li  
          key={index}
           className='sidebar_list_item'
            style={{backgroundColor:item}}
            onClick={()=>props.addNote(item)}
         />
          ))
        }
      </ul>
    </div>
  )
}

export default SideBar
