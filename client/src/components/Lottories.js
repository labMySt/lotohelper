import React from "react";
import { Link } from "react-router-dom";
import fiveFromthirtySix from '../images/5from36.png';
class Lottories extends React.Component{

  render(){
    return(
      <a href="/5from36" >
        <div className="card text-white bg-primary mb-3" style={{ width: "19rem" }}>
          <div className="card-header">5 from 36</div>
            <div className="card-body">
           </div>
           <img src={fiveFromthirtySix} alt=""/>
       </div>
     </a>
    )
  }
}

export default Lottories;
