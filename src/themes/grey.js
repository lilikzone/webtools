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

const ThemeGrey = getMuiTheme({
  spacing: spacing,
  // fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#616161',
    primary2Color: '#8e8e8e',
    primary3Color: '#373737',
    accent1Color: '#fff176',
    accent2Color: '#ffffa8',
    accent3Color: '#cabf45',
    primaryTextColor: '#fff',
    secondaryTextColor: '#000000',
    alternateTextColor: '#fff',
    // canvasColor: grey500,
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

export default ThemeGrey;
