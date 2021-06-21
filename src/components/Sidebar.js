import React from "react";
import NoteList from "./NoteList";


function Sidebar({notes}) {
  //console.log({notes})
  return (
        <div className="master-detail-element sidebar">
      <NoteList notes={notes} />
      <button>New</button>
    </div>
    
  );
}

export default Sidebar;
