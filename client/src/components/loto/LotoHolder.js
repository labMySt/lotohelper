import React from 'react';
import TypesOfBets from "./TypesOfBets";
import BetStat from "./BetStat";
import Drowings from "./Drowings";
import NotesHolder from "../notes/NotesHolder";
import "./LotoHolder";

class LotoHolder extends React.Component{
  render(){
    return(
        <div className="row">
        <div className="col"><Drowings/></div>
        <div className="col" style = {{
          height: "80vh", overflowY: "scroll"}}><Drowings/></div>

      </div>
    )
  }
}
export default LotoHolder;
