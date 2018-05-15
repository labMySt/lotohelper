import React from 'react';

class LognIn extends React.Component{
      render(){
      return(
        <div className="container">
          <div className="col-sm-6 col-sm-offset-3">
            <h1><span className="fa fa-sign-in"></span> Login</h1>
            <form action="/auth/login" method="post">
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password"/>
              </div>
             <button type="submit" className="btn btn-lg btn-info mr-2">Login</button>
           </form>
           <hr/>
           <p>Need an account? <a href="/signup">Signup</a></p>
         <p>Or go <a href="/">home</a>.</p>
         </div>
      </div>
      )
    }
  }

export default LognIn;
