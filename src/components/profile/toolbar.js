import React from 'react';

import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ToolBar = () => {
  return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Toolbar>
          <ToolbarTitle text="Prof. Dr. Katherine Wallace" />

        </Toolbar>
      </MuiThemeProvider>
    </div>
  );
};

export default ToolBar;
