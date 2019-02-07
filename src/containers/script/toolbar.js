import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const styles = {

  toolbar: {
    marginBottom: 20,
  },
};
const style = {
  marginRight: 5,
  marginLeft: 5,
};

export class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <div className="displayNone">
          <Toolbar style={styles.toolbar}>
            <ToolbarGroup firstChild={true} >
              <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="All Broadcasts" />
                <MenuItem value={2} primaryText="All Voice" />
                <MenuItem value={3} primaryText="All Text" />
                <MenuItem value={4} primaryText="Complete Voice" />
                <MenuItem value={5} primaryText="Complete Text" />
                <MenuItem value={6} primaryText="Active Voice" />
                <MenuItem value={7} primaryText="Active Text" />
              </DropDownMenu>
            </ToolbarGroup>

            <ToolbarGroup>
              <ToolbarTitle text="Options" />
              <FontIcon className="muidocs-icon-custom-sort" />
              <ToolbarSeparator />
              <RaisedButton label="Create Broadcast" primary={true} />
              <IconMenu
                iconButtonElement={<IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>}
              >
                <MenuItem primaryText="Download" />
                <MenuItem primaryText="More Info" />
              </IconMenu>
            </ToolbarGroup>
          </Toolbar>
        </div>
        <div className="displayNone">
          <Toolbar style={styles.toolbar}>
            <ToolbarTitle text="Mare Admin" />
            <ToolbarGroup>


              <FontIcon className="muidocs-icon-custom-sort" />
              <ToolbarSeparator />
              <RaisedButton label="Download Now" secondary={true} />
              <IconMenu
                iconButtonElement={<IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>}
              >
                <MenuItem value={1} primaryText="Home" />
                <MenuItem value={2} primaryText="News" />
                <MenuItem value={3} primaryText="About" />
                <MenuItem value={4} primaryText="Portfolio" />
              </IconMenu>
            </ToolbarGroup>
          </Toolbar>
        </div>
        <Toolbar style={styles.toolbar}>
          <ToolbarTitle text="Material" />
          <ToolbarGroup>


            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            <FloatingActionButton mini={true} style={style}>
              <FontIcon className="material-icons" > accessible </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style}>
              <FontIcon className="material-icons" > room </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style}>
              <FontIcon className="material-icons" > redeem </FontIcon>
            </FloatingActionButton>


          </ToolbarGroup>
        </Toolbar>

      </div>
    );
  }
}


const ToolbarPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Toolbar</h3>
  <Row>
    <Col xs={12} md={12} lg={12}>

      <Paper >
        <PaperBase title="Simple example">
          <Subheader /><br />An example Toolbar demonstrating the use of the available sub-components, and including a number of other Material-UI components, such as Drop Down Menu, Font Icon, Icon Menu and Raised Button .<br /><br />
          <ToolbarExamplesSimple />

        </PaperBase>
      </Paper>
    </Col>
  </Row>
</div>;

export default ToolbarPage;
