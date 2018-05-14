import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component{

  renderContent() {
   if(!this.props.user)
       return (
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <a className="nav-link" href="/signup">Sign Up</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/lognin">logn In</a>
           </li>
         </ul>
       );
  else
       return (
         <li className="nav-item">
             <a className="nav-link" href="/auth/logout">logOut</a>
         </li>
       );
   }

  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">Loto Helper</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
              {this.renderContent()}
          </div>
        </div>
      </nav>
    )
  }
}


export default Header;
