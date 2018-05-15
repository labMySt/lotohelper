import React from 'react';
import axios from 'axios'
class SingUp extends React.Component{
  
    render(){
    return(
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in"></span> Signup</h1>
        <form action="/auth/signup" method="post">
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password"/>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword"/>
              </div>
              <button type="submit" className="btn btn-lg btn-info mr-2">Signup</button>
        </form>
        <hr/>
        <p>Already have an account? <a href="/lognin">Login</a></p>
        <p>Or go <a href="/">home</a>.</p>
      </div>
    </div>
    )
  }
}

export default SingUp;
