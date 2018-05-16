import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import * as actions from '../actions';

class App extends React.Component{

  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return(
      <div>
        <Header />
         {this.props.children}
        <Footer />
      </div>
    )
  }
}
export default connect(null, actions)(App);
