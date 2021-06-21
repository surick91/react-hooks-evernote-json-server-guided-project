import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes}) {
  console.log({notes})
  return (
    <ul>
      {notes.map(noteItem => <NoteItem key ={noteItem.id} noteItem={noteItem} />)}
      console.log(noteItem)
    </ul>
  );
}

export default NoteList;
