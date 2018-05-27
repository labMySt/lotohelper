import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const withLoading = (conditionFn) => (Component) => (props) =>
    <div>
      <div className="interactions">
         {conditionFn(props) && <span>Loading...</span>}
         {props.stat && <Component {...props}/>}
      </div>
    </div>

class BetStat extends React.Component{

  render(){
    return(
      <div className="constainer">
       <AdvancedList
         stat={this.props.stat}
         errStat={this.props.errStat}
         fetchingStat={this.props.fetchingStat}/>
      </div>
    )
  }
}
const mapStateToBetStatProps = (state) => {
  return{stat: state.stat,
         errStat: state.errStat,
         fetchingStat: state.fetchingStat}
};

const loadingCondition = props =>
    props.fetchingBets;

function objToArrey(obj, func){
  var result = [];
  for(var key in obj){
    var string = key +" - " + obj[key].count;
    result.push(<div>{string}</div>);
  }
  return result;
}

const List = ({ stat }) =>
  <div className="list">
    {objToArrey(stat.ladder)}
  </div>

  const AdvancedList = compose(
  withLoading(loadingCondition)
)(List);

export default connect(mapStateToBetStatProps, actions)(BetStat);
