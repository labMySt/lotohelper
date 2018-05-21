import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
class Drowings extends React.Component{

  componentWillMount() {
    this.props.fetchLotto();
  }

  render(){
   console.log(this.props.drowings);
    return(
      <div>
         <div class="col">
         <BootstrapTable data = {this.props.drowings} trClassName={{color: 'red'}}>
           <TableHeaderColumn isKey dataField='number' >
             number
           </TableHeaderColumn>
           <TableHeaderColumn dataField='1'>
             1
           </TableHeaderColumn>
           <TableHeaderColumn dataField='2'>
             2
           </TableHeaderColumn>
           <TableHeaderColumn dataField='3'>
             3
           </TableHeaderColumn>
           <TableHeaderColumn dataField='4'>
             4
           </TableHeaderColumn>
           <TableHeaderColumn dataField='5'>
             5
           </TableHeaderColumn>
           <TableHeaderColumn dataField='6'>
             6
           </TableHeaderColumn>
         </BootstrapTable>
       </div>
     </div>
    )
  }
}

const mapStateToDrowingsProps = (state) => {
  return{drowings: state.drowings,
         errLotto: state.errLotto,
         fetchingLoto: state.fetchingLoto}
};


export default connect(mapStateToDrowingsProps, actions)(Drowings);
