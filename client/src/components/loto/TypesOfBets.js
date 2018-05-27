import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const withLoading = (conditionFn) => (Component) => (props) =>
    <div>
      <div className="interactions">
         {conditionFn(props) && <span>Loading...</span>}
         {props.bets && <Component {...props}/>}
      </div>
    </div>

class TypeOfBets extends React.Component{

  componentDidMount() {
    this.props.fetchBets();
  }


  render(){
    return(
      <div className="constainer">
       <AdvancedList
         bets={this.props.bets}
         errBets={this.props.errBets}
         fetchingBets={this.props.fetchingBets}
         fetchStat={this.props.fetchStat}
      />
      </div>
    )
  }
}
const mapStateToTypeOfBetsProps = (state) => {
  return{bets: state.bets,
         errBets: state.errBets,
         fetchingBets: state.fetchingBets}
};

const loadingCondition = props =>
    props.fetchingBets;

const List = ({ bets, fetchStat }) =>
  <div className="list">
    {bets.map(item =>
      <div className="list-row" key={item.name}>
      <div class="list-group-item list-group-item-action" onClick={()=>{fetchStat(item.log)}}>{item.name}</div>
    </div>)}
  </div>

  const AdvancedList = compose(
  withLoading(loadingCondition)
)(List);

export default connect(mapStateToTypeOfBetsProps, actions)(TypeOfBets);
