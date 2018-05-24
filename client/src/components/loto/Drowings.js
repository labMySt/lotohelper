import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
class Drowings extends React.Component{

  componentDidMount() {
    this.props.fetchLotto();
  }
  render(){
      return(
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">1</th>
              <th scope="col">2</th>
              <th scope="col">3</th>
              <th scope="col">4</th>
              <th scope="col">5</th>
            </tr>
         </thead>
         <tbody>{this.props.drowings?
           this.props.drowings.map(item =>
             <tr key = {item.number.toString()}>
               <th scope="row">{item.number}</th>
               <td>{item[1]}</td>
               <td>{item[2]}</td>
               <td>{item[3]}</td>
               <td>{item[4]}</td>
               <td>{item[5]}</td>
             </tr>
           ) : <tr><td>Загрузка</td></tr>
         }
        </tbody>
      </table>
      )
  }
}


const mapStateToDrowingsProps = (state) => {
  return{drowings: state.drowings,
         errLotto: state.errLotto,
         fetchingLoto: state.fetchingLoto}
};


export default connect(mapStateToDrowingsProps, actions)(Drowings);
