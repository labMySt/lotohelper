import React from 'react';

class SingUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {email: "",
                      password: "",
                      ConfirmPassword: ""};

        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      onChangeId(e) {
        var val = e.target.value;
        this.setState({recipient_id: val});
      }
    onChangeAmount(e) {
      var val = e.target.value;
      this.setState({amount: val});
    }

    handleSubmit(e) {

    }
    render(){
    return(
      <form onSubmit={this.handleSubmit}>
                    <h3>Sing Up</h3>
                      <p>
                        <input type="email" value={this.state.email} placeholder="email" onChange={this.onChangeId}/>
                        <br />
                      <input type="text" value={this.state.password} placeholder="password" onChange={this.onChangeAmount}/>
                       <br />
                      <input type="text" value={this.state.ConfirmPassword} placeholder="confirm password" onChange={this.onChangeAmount}/>
                      </p>
                      <input type="submit" value="Confirm" />
                  </form>
    )
  }
}

export default SingUp;
