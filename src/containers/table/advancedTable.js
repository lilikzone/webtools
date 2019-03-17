import React from 'react';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import './tableStyle.js';
import Paper from 'material-ui/Paper';

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  }, {
    name: 'Randal White',
    status: 'Unemployed',
  }, {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  }, {
    name: 'Steve Brown',
    status: 'Employed',
  }, {
    name: 'Joyce Whitten',
    status: 'Employed',
  }, {
    name: 'Samuel Roberts',
    status: 'Employed',
  }, {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

export default class AdvancedTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  handleToggle(event, toggled) {
    this.setState({[event.target.name]: toggled});
  }
  handleChange(event) {
    this.setState({height: event.target.value});
  }
  render() {
    return (
      <div>
        <h3>Table Properties</h3>
        <div className="row">

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2">
            <Toggle

              name="fixedHeader"
              label="Fixed Header"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.fixedHeader}
            />

            <Toggle

              name="fixedFooter"
              label="Fixed Footer"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.fixedFooter}
            />

          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 ">
            <Toggle

              name="selectable"
              label="Selectable"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.selectable}
            /><Toggle
              name="multiSelectable"
              label="Multi-Selectable"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.multiSelectable}
              />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3  ">
            <Toggle
              name="enableSelectAll"
              label="Enable Select All"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.enableSelectAll}
            />
            <Toggle
              name="deselectOnClickaway"
              label="Deselect On Clickaway"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.deselectOnClickaway}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3  ">
            <Toggle
              name="stripedRows"
              label="Stripe Rows"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.stripedRows}
            />
            <Toggle
              name="showRowHover"
              label="Show Row Hover"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.showRowHover}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-1 m-b-15 ">
            <Toggle
              name="showCheckboxes"
              label="Show Checkboxes"
              onToggle={this.handleToggle.bind(this)}
              defaultToggled={this.state.showCheckboxes}
            /></div>

        </div>
        <Paper>
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn
                  colSpan="3"
                  tooltip="Super Header"
                  style={{
                    textAlign: 'center',
                  }}
                >
                                Super Header
                            </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map((row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{index}</TableRowColumn>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
                        ))}
            </TableBody>
            <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
              <TableRow>
                <TableRowColumn>ID</TableRowColumn>
                <TableRowColumn>Name</TableRowColumn>
                <TableRowColumn>Status</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn
                  colSpan="3"
                  style={{
                    textAlign: 'center',
                  }}
                >
                                Super Footer
                            </TableRowColumn>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    );
  }
}
