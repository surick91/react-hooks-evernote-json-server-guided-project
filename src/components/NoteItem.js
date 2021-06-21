import React from "react";

function shortenData(data) {
let strArray = data.split(" ")
strArray.slice(0,8).join(" ")
return strArray


}

function NoteItem({noteItem}) {
  console.log({noteItem})

   
  return (
    <li>
      <h2>{noteItem.title}</h2>
      <p>{shortenData(noteItem.body)}</p>
    </li>
  );
}

export default NoteItem;
