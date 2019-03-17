import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {white} from 'material-ui/styles/colors';

const style = {

  button: {
    padding: 0,
    marginLeft: 0,
    position: 'absolute',
    top: 0,
    right: 20,
  },
  menuButton: {
    marginLeft: 0,
    padding: 0,
  },
};

export default class RightDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({
    open: !this.state.open,
  });

  render() {
    return (
      <div>

        <IconButton style={style.menuButton} onTouchTap={this.handleToggle}>
          <Menu color={white} />
        </IconButton>
        <Drawer
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          width={200}
          openSecondary={true}
          open={this.state.open}
        >
          <AppBar title="AppBar" />
        </Drawer>
      </div>
    );
  }
}
