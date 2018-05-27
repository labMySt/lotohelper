import React from 'react';
import TypesOfBets from "./TypesOfBets";
import BetStat from "./BetStat";
import Drowings from "./Drowings";
import NotesHolder from "../notes/NotesHolder";
import "./LotoHolder";

class LotoHolder extends React.Component{
  render(){
    const styleDrowing = { height: "85vh", overflowY: "scroll" };
    const styleTypeOfBets = { height: "85vh",};
    return(
        <div className="row">
        <div className="col" style = {styleDrowing}><TypesOfBets/></div>
        <div className="col" style = {styleTypeOfBets}><BetStat/></div>
        <div className="col" style = {styleDrowing}><Drowings/></div>

      </div>
    )
  }
}
export default LotoHolder;
