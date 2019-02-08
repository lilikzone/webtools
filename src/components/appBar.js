import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';

const style = {
  appBar: {
    zIndex: 999,
    paddingTop: 0,
    paddingBottom: 0,
  },
  title: {
    fontSize: 16,
  },
};
const AppBarExampleIcon = (props) => (
  <AppBar
    style={{
      ...style.appBar,
    }} titleStyle={
      style.title
    }
    data-background-color={props.muiTheme.appBar.color}
    title={props.title}
    iconElementRight={<IconButton>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <FontIcon className="material-icons">{props.icon}</FontIcon></IconButton>}
  />

);

export default muiThemeable()(AppBarExampleIcon);
