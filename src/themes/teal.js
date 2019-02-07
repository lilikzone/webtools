import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500,
  cyan700,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
  blue600,
  teal500,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

const ThemeTeal = getMuiTheme({
  spacing: spacing,
  // fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#009688',
    primary2Color: '#512DA8',
    primary3Color: '#D1C4E9',
    accent1Color: '#009688',
    accent2Color: '#f50057',
    accent3Color: '#ff80ab',
    primaryTextColor: '#212121',
    secondaryTextColor: '#757575',
    alternateTextColor: '#fff',
    canvasColor: '#fff',
    borderColor: '#bdbdbd',
    disabledColor: '#BDBDBD',
    pickerHeaderColor: '#E91E63',
    clockCircleColor: '#fff',
  },
  raisedButton: {
    fontSize: 12,
  },
  appBar: {
    height: 54,
  },
  drawer: {
    width: 230,
    left: 150,
  },
});

export default ThemeTeal;
