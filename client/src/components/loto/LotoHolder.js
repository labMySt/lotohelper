import React from 'react';
import TypesOfBets from "./TypesOfBets";
import BetStat from "./BetStat";
import Drowings from "./Drowings";
import NotesHolder from "../notes/NotesHolder";
import "./LotoHolder";

class LotoHolder extends React.Component{
  render(){
    const  styleDrowing= { height: "85vh", width: "30vw", overflowY: "scroll" };
    return(
        <div className="row">
        <div className="col" style = {styleDrowing}><TypesOfBets/></div>
        <div className="col" style = {styleDrowing}><BetStat/></div>
        <div className="col" style = {styleDrowing} ><Drowings/></div>

      </div>
    )
  }
}
export default LotoHolder;
