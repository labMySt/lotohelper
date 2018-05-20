import React  from 'react';
import NotFound from './NotFound';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class User extends React.Component {
  renderContent() {
    if(!this.props.user)
        return( <NotFound /> );
    return(
          <div>
            <h1>This is personal page</h1>
          <a href="/lottories" className="btn btn-lg btn-info mr-2">Go to lottories</a>
          </div>
        );
    }
  render() {
    return (
    <div>
      {this.renderContent()}
    </div>
    );
  }
}

const mapStateToUserProps = (state) => {
  return{user: state.user}
};

export default connect(mapStateToUserProps)(User);
