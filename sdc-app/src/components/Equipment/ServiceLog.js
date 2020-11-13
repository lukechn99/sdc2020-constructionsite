import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {
    BootstrapTable, TableHeaderColumn
  } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

function onAfterInsertRow(row) {
  let newRowStr = '';

  for (const prop in row) {
    newRowStr += prop + ': ' + row[prop] + ' \n';
  }
}

const options = {
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};


const selectRowProp = {
  mode: 'checkbox'
};

class ServiceLog extends React.Component {
  constructor(props) {
	super(props);
	this.nextId = 0;
  }	
  render() {
    let selectRowProp = this.props.isManager ? {mode: 'checkbox'} : { }
    return (
      <BootstrapTable data={ null } 
				selectRow={ selectRowProp } 
				deleteRow={ this.props.isManager ? true : false } 
				insertRow={ this.props.isManager ? true : false } 
				options={ options }
				tablecontainerClass='table table-striped'
				>
	  {/* id must be unique, look into customizing the insert modal so that id is auto-generated
		http://allenfang.github.io/react-bootstrap-table/custom.html#insertmodal*/}
          <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
          <TableHeaderColumn  dataField='Date' editable={{type: 'date',}}>Service Date</TableHeaderColumn>
          <TableHeaderColumn  dataField='VIN'> Vehicle Identification Number</TableHeaderColumn>
          <TableHeaderColumn dataField='Location'>Location Serviced</TableHeaderColumn>
          <TableHeaderColumn dataField='Observations'>Observations</TableHeaderColumn>
          <TableHeaderColumn dataField='Operator'>Operator</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default ServiceLog;

