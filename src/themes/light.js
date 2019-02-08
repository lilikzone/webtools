import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ThemeLight = getMuiTheme({
  palette: {
    primary1Color: '#f0c',
    primary2Color: '#0097a7',
    primary3Color: '#757575',
    accent1Color: '#ff4081',
    accent2Color: '#f50057',
    accent3Color: '#ff80ab',
    textColor: 'rgba(255, 255, 255, 1)',
    secondaryTextColor: 'rgba(255, 255, 255, 0.7)',
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    disabledColor: 'rgba(255, 255, 255, 0.3)',
    pickerHeaderColor: 'rgba(255, 255, 255, 0.12)',
    clockCircleColor: 'rgba(255, 255, 255, 0.12)',
  },
  appBar: {
    height: 54,
  },
  drawer: {
    width: 230,
  },
});

export default ThemeLight;
