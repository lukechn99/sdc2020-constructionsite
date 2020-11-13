import React, {Component} from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Dialog from 'react-bootstrap-dialog';
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(cell, row, rowIndex) {
        this.dialog.show({
            // show diagnostics here
            body: 'Loading...',
            /* if we want the user to confirm looking at detailed info */
            // actions: [
            //     Dialog.CancelAction(),
            //     Dialog.OKAction(() => {
            //         // show data, render onto table
            //     })
            // ]
        })
    }

    render() {
        const { cell, row, rowIndex } = this.props;
        return (
            <React.Fragment>
                <button
                    bsStyle = "primary"
                    onClick = {() => this.handleClick(cell, row, rowIndex)}
                >Show Info</button>
                <Dialog ref={(el) => { this.dialog = el }} />
            </React.Fragment>
        )
    }
}

class Dashboard extends React.Component {	
    Equipment(cell, row, enumObject, rowIndex) {
        return (
            <Equipment cell={cell} row={row} rowIndex={rowIndex} />
        )
    }
    render() {
        return (
            <BootstrapTable data={ null }>
                <TableHeaderColumn dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn
                    dataField='sessionDetails'
                    dataFormat={this.cellButton.bind(this)}></TableHeaderColumn>
            </BootstrapTable>
        )
    }
    // render() {
    //   let selectRowProp = this.props.isManager ? {mode: 'checkbox'} : { }
    //   return (
    //     <BootstrapTable data={ null } 
    //               selectRow={ selectRowProp } 
    //               deleteRow={ this.props.isManager ? true : false } 
    //               insertRow={ this.props.isManager ? true : false } 
    //               options={ options }
    //               tablecontainerClass='table table-striped'
    //               >
    //     {/* id must be unique, look into customizing the insert modal so that id is auto-generated
    //       http://allenfang.github.io/react-bootstrap-table/custom.html#insertmodal*/}
    //         <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>
    //         <TableHeaderColumn dataField='Date' editable={{type: 'date',}}>Service Date</TableHeaderColumn>
    //         <TableHeaderColumn dataField='VIN'> Vehicle Identification Number</TableHeaderColumn>
    //         <TableHeaderColumn dataField='Location'>Location Serviced</TableHeaderColumn>
    //         <TableHeaderColumn dataField='Observations'>Observations</TableHeaderColumn>
    //         <TableHeaderColumn dataField='Operator'>Operator</TableHeaderColumn>
    //     </BootstrapTable>
    //   );
    // }
}
  
  export default Dashboard;
  