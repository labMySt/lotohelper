import React from 'react';
import CurrentNotes from "./CurrentNotes";
import NotesCreator from "./NotesCreator";

class NotesHolder extends React.Component{
  render(){
    return(
      <div className="container">
        this is NotesHolder
        <CurrentNotes></CurrentNotes>
        <NotesCreator></NotesCreator>
      </div>
    )
  }
}
export default NotesHolder;
