import React from 'react';
import TypesOfBets from "./TypesOfBets";
import BetStat from "./BetStat";
import Drowings from "./Drowings";
import NotesHolder from "../notes/NotesHolder";


class LotoHolder extends React.Component{
  render(){
    return(
      <div className="container">
        this is loto LotoHolder
        <TypesOfBets></TypesOfBets>
        <BetStat></BetStat>
        <Drowings>  </Drowings>
        <br/>
        <NotesHolder/>
      </div>
    )
  }
}
export default LotoHolder;
