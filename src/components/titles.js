import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {typography} from 'material-ui/styles';

const style = {

  title: {
    width: '100%',
    height: 45,
    borderBottom: 'solid 1px #ddd',


  },
  header: {
    color: '#A5ABAF',
    fontWeight: typography.fontWeightMedium,
    fontSize: 24,
    paddingLeft: 20,
    textAlign: 'left',
    paddingTop: 5,
  },
};
const PaperTitle = (props) => (
  <div style={style.title}>
    <h5 style={style.header}>{props.title}</h5>
  </div>

);

export default muiThemeable()(PaperTitle);
