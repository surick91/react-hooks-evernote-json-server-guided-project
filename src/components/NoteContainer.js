import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

const API = "http://localhost:3000/notes"




function NoteContainer() {
  const [notes, setNotes] = useState([])

  useEffect(()=> {
  fetch(API)
  .then(res => res.json())
  .then(noteData => setNotes(noteData))
  //console.log(notes)
    
  },[])
  
  return (
   
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes}/>
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
