import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';

const styles = {
  navigation: {
    fontSize: 15,
    fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingBottom: 15,
    display: 'block',
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20,
  },

  clear: {
    clear: 'both',
  },
  paper: {
    padding: 10,
    minHeight: 150,
    marginBottom: 20,
  },
  divider: {
    marginBottom: 20,
  },
  raisedButton: {
    marginRight: 10,
    marginBottom: 10,
    marginTop: 25,
  },
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  flatIconButton: {
    margin: 12,
  },
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  floatingAction: {
    marginRight: 20,
  },
  width200: {
    width: 200,
  },
  paper_default: {
    padding: 10,
    minHeight: 150,
    marginBottom: 20,
    boxShadow: 'auto',
  },
  title_default: {
    fontSize: 15,
    fontWeight: typography.fontWeightBold,
    marginBottom: 10,
    opacity: 0.7,

  },
  saveButton: {
    backgroundColor: '#5cb85c !important',
  },
};

export default styles;
