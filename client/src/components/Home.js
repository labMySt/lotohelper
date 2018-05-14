import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
      <div className="landing">
      <div className=" text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 mr-4">Loto Helper</h1>
            <a href = "/lognin" className="btn btn-lg btn-info mr-2" >Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
