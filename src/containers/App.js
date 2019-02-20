import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import BlueTheme from '../themes/blue';
import LightTheme from '../themes/light';
import GreyTheme from '../themes/grey';
import TealTheme from '../themes/teal';

import {Scrollbars} from 'react-custom-scrollbars';
import Data from '../data';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LocalizedStrings from 'react-localization';
import strings from '../lang/lang.js';
import Loading from 'react-loading-spinner';
import Footer from '../components/footer';

import './ui/spin.scss';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: true,
      lang: 'en',
      themeID: 1,
      defaultLoading: false,
      defaultLoadingContent: 'Loading..',
      pageOptions: '',
      page_type: '',
    };
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
      if (!(nextProps.width === LARGE) & this.state.page_type == 'boxed') {
        var styles_b = this.state.pageOptions;
        styles_b.header = {paddingLeft: '0'};
        this.setState({pageOptions: styles_b});
      } else if (nextProps.width === LARGE) {
        try {
          var styles_b = this.state.pageOptions;
          styles_b.header = {paddingLeft: 236};
          this.setState({pageOptions: styles_b});
        } catch (err) {
          console.log('error');
        }
      }
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
    if (!this.state.navDrawerOpen) {
      if (this.state.pageOptions != undefined) {
        var styles_b = this.state.pageOptions;
        styles_b.header = {paddingLeft: 236};
        this.setState({pageOptions: styles_b});
      }
    } else {
      if (this.state.pageOptions != null) {
        var styles_b = this.state.pageOptions;
        styles_b.header = {paddingLeft: '0'};
        this.setState({pageOptions: styles_b});
      }
    }
  }

  setMuiTheme(thmID, e) {
    if (thmID == 2) {
      this.setState({theme: BlueTheme});
      this.setState({themeID: 1});
    } else if (thmID == 1) {
      this.setState({theme: TealTheme});
      this.setState({themeID: 2});
    } else if (thmID == 3) {
      this.setState({theme: GreyTheme});
      this.setState({themeID: 3});
    } else if (thmID == 4) {
      this.setState({theme: PurpleTheme});
      this.setState({themeID: 4});
    }
  }

  setLanguages(lang, e) {
    strings.setLanguage(lang);
    this.setState({});
  }


  setOptions(type, e) {
    const styles_boxed = {
      app: {width: '80%', margin: '0 auto', backgroundColor: '#FAFAFA'},
      header: {paddingLeft: !this.state.navDrawerOpen ? 0 : '236px', width: '100%', content: 'boxed', position: 'relative'},
      menu: {
        left: 'auto', position: 'absolute',
      },
      container: {
        paddingLeft: '10',
      },
    };

    const styles_wide = {
      app: {width: 'auto', margin: '0 auto'},
      header: {
        paddingLeft: this.state.navDrawerOpen ? 236 : 0,

      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: this.state.navDrawerOpen && this.props.width !== SMALL ?
          this.state.paddingLeftDrawerOpen :
          0,
      },
    };


    if (type == 'boxed') {
      this.setState({pageOptions: styles_boxed, page_type: 'boxed'});
    } else if (type == 'wide') {
      this.setState({pageOptions: styles_wide, page_type: 'wide'});
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({defaultLoading: false});
    }, 300);

    if (window.innerWidth < 800) {
      setTimeout(() => {
        this.setState({navDrawerOpen: false});
      }, 100);
    }
  }

  componentWillMount() {
    this.setState({defaultLoading: true});
  }
  render() {
    const {navDrawerOpen, pageOptions} = this.state;
    let {theme, themeID} = this.state;
    const paddingLeftDrawerOpen = 236;
    if (themeID == 1) {
      theme = BlueTheme;
    }
    const ChosenTheme = getMuiTheme(theme);

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? 236 : 0,
        backgroundColor: '#fff',
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ?
          paddingLeftDrawerOpen :
          0,
      },
    };

    this.setState.pageOptions = styles;

    return (

      <MuiThemeProvider muiTheme={ChosenTheme} >
        <div style={this.state.pageOptions.app}>

          <Scrollbars universal={true}>
            <div >
              <Header
                styles={this.state.pageOptions.header ? this.state.pageOptions.header : styles.header} handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                setLanguages={this.setLanguages.bind(this)} setOptions={this.setOptions.bind(this)} setMuiTheme={this.setMuiTheme.bind(this)}
              />
              <LeftDrawer
                style_={this.state.pageOptions.menu}
                navDrawerOpen={navDrawerOpen}
                menus={Data.menus}
                username={'Marry Doe'}
              />
              <Loading isLoading={this.state.defaultLoading} loadingClassName="spinner">
                <div style={styles.container}>

                  <div className="base" >
                    {this.props.children}
                  </div>
                  <div className="footer"><Footer /></div>
                </div>
              </Loading>
            </div>

          </Scrollbars>
        </div>
      </MuiThemeProvider>

    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
};

export default withWidth()(App);
