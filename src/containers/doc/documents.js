import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PaperBase from '../../components/PaperBase';
import {Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Highlight from 'react-highlight';
import './documents.scss';
import '../../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import Message from '../../components/ui/messages/messages';
import SvgIco from '../../components/svg_ico';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Slider from 'material-ui/Slider';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';


import MessagesIcon from 'material-ui/svg-icons/communication/message';
import ReactMaterialUiNotifications from 'react-materialui-notifications';
import moment from 'moment';
import {deepOrange500} from 'material-ui/styles/colors';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import {Tabs, Tab} from 'material-ui/Tabs';
import AutoComplete from 'material-ui/AutoComplete';
import LineChart from '../../components/charts/g2Charts/line';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  toggle: {
    width: 120,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export class AutoCompleteExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
        />
      </div>
    );
  }
}

export default class DialogExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
      open_modal: false,
      count: 0,
    };
    this.timer = undefined;
  }

  handleTouchTap() {
    this.setState({open: true});
  }

  handleRequestClose() {
    this.setState({open: false});
  }


  handleOpen() {
    this.setState({open_modal: true});
  }
  handleClose() {
    this.setState({open_modal: false});
  }

  showNotification() {
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: 'Some message to be displayed  ',
      icon: <MessagesIcon />,
      iconBadgeColor: deepOrange500,
      overflowText: 'joe@gmail.com',
      timestamp: moment().format('h:mm A'),
    });
    // update notifications count
    this.setState({
      count: ++this.state.count,
    });
  }


  render() {
    const actions = [<FlatButton
      label="Cancel" primary={true}
      onTouchTap={this.handleClose}
                     />, <FlatButton
                       label="Submit" primary={true}
                       keyboardFocused={true}
                       onTouchTap={this.handleClose}
                         />,
    ];

    return (
      <div className="doc">
        <h3 style={globalStyles.navigation}>Documents</h3>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Paper >
              <PaperBase title="Documents">
                <br />
                <h3>Getting Started</h3>
                <br />

                <p>Mare Admin(React Material Admin) is a JavaScript application that consists of  react,  react-router  and a number of libraries to help you get up and running quickly. Once you open the zip file, you can run it in the project and extend and extend anything you want.</p>

                <Message
                  zdepth={1}
                  color="info"
                  header="Warning"
                  message="*** ALL THE IMAGES THAT APPEAR IN THE PREVIEW ARE NOT IN THE DOWNLOAD"
                />

                <h3>Requirements</h3><br />
                <h3>-Node JS</h3>
                <Message
                  zdepth={1}
                  color="info"
                  header="Informational Notes"
                  message="*** You need to setup node.js"
                />

                Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.<br /> <br />
                <a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>

                <br /> <br /> <br />

                <h3>-Node Packaged Modules(npm)</h3>
                <br />

                <p>  npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.</p>
                <br />
                <h3>Mare Admin Install</h3>

                <br />
                1. install npm
                <Highlight className="">
                  <div>
                    cd mareAdmin
                        <br />
                    npm install
                    </div>
                </Highlight>
                <br />
                2. To develop applications and run them on your computer.(debug mode)
                <Highlight className="">
                  <div>
                    cd mareAdmin
                        <br />
                    npm start
                    </div>
                </Highlight>
                <br />
                Open http://localhost:3000 with your browser
                <br />
                <br />
                <br />
                <h3>Publish</h3>

                To publish the application on your website.
                <Highlight className="">
                  <div>
                    npm run build
                    </div>
                </Highlight>
                <br />
                "dist" folder copy to ftp or your publish folder
                <br />
                "assets" folder copy to ftp  or your publish folder
                <br />
                <br />
                <br />

                <h3>Mare Admin File Tree</h3>

                <Highlight className="text">
                  {` 
    
    ├── dist                   # Build folder
    ├── src                    # Source directory 
        ├── assets             # Static  images, icons, etc...
        ├── components         # UI components
            └── charts         # Include Charts Components
            └── dashboard      # Include Dashboards Components
            └── profile        # Include profile page Components
            └── semanticui     # Include Semantic-Ui Components          
            └── appBar.js           # Layout App Bar Component
            └── Header.js           # Layout Header Component
            └── ico.js              # Svg icon tool Component
            └── iconedtextField.js  # icon text component
            └── LeftDrawer.js       # Layout Left Drawer component(avatar,logo etc. area)
            └── menuListItem.js     # Side Menu Component
            └── PageBase.js         # Page Base Component
            └── PaperBase.js        # Paper Base Component
            └── RightDrawer.js      # Layout Right Drawer component(settings,theme,langauge etc. area)
            └── svg_ico.js          # Svg font icon tool component
            └── svg_ico.scss        # Svg font icon tool component css
            └── UserTable.js        # User table component 
        ├── containers         # Pages
        ├── App.js             # Main(index) App js file
        ├── lang               # Layout Langauage folder
        ├── themes             # Layout themes folder
        ├── data.js            # sample data file
        ├── index.js           # Entry js file
        ├── index.ejs          # Entry ejs file
        ├── routes.js          # Menus Router configuration
        ├── style.js           # Global style file 
        ├── style.scss         # Global style file
        ├── webpack-public-path.js # web pack cong file 
    ├── tools                  # webpack tool folder 
    ├── .editorconfig          # editorconfig file 
    ├── webpack.config.js      # webpack config file
    ├── proxy.config.js        # mock service config
    └── package.json           # npm package manager file 
    `}

                </Highlight>
                <br />

                <br />
                <h3>Main Html Page (Index.ejs)</h3>

                <br />

                <Highlight className="html">
                  {`<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, height=device-height, minimum-scale=1.0, initial-scale=1.0, user-scalable=0">
  <title>Mare React Material Admin Template</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src="./assets/js/iconfont.js"></script>
</head>

<body>
  <div id="app"></div>

  <!--  Roboto font -->
  <script>
    var WebFontConfig = {
      google: {
        families: ['Roboto:400,300,500:latin']
      }
    };
    (function () {
      var wf = document.createElement('script');
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();

  </script>
  

</body>

</html>
`}
                </Highlight>

                <br />
                <h3>Webpack</h3>
                webpack takes modules with dependencies and generates static assets representing those modules.

<br /><br />

                <h3>Build Custom Theme</h3><br /><br />
                Create your custom  theme config or themes folder edit
<br />
                For Example<br /><br />
                <Highlight className="javascript">
                  {`import getMuiTheme from 'material-ui/styles/getMuiTheme';

const ThemeLight = getMuiTheme({
  "palette": {
    "primary1Color": "#0097a7",
    "primary2Color": "#0097a7",
    "primary3Color": "#757575",
    "accent1Color": "#ff4081",
    "accent2Color": "#f50057",
    "accent3Color": "#ff80ab",
    "textColor": "rgba(255, 255, 255, 1)",
    "secondaryTextColor": "rgba(255, 255, 255, 0.7)",
    "alternateTextColor": "#303030",
    "canvasColor": "#303030",
    "borderColor": "rgba(255, 255, 255, 0.3)",
    "disabledColor": "rgba(255, 255, 255, 0.3)",
    "pickerHeaderColor": "rgba(255, 255, 255, 0.12)",
    "clockCircleColor": "rgba(255, 255, 255, 0.12)"
  },
  appBar: {
    height: 50
  },
  drawer: {
    width: 230
  }
});

export default ThemeLight;
`}
                </Highlight>

                <h3>Custom Components Create </h3>
                <br />
                <Highlight className="javascript">
                  {`var React = require('react');
import './semantic-button.less';

var SemanticButton = function statelessFunctionComponentClass(props) {
    return (
      <button onClick={props.onClick} className={ui button {props.type}}>{props.text}</button>
  );
};
 
module.exports = SemanticButton;
`}
                </Highlight>
                <br /><br />

                <br />
                <h3>Change Application Langauage * </h3>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <br />

                *There is only language application in the menu. You can improve yourself.
                <br />
                <br />
                <p>For change application lagauage  from langs/lang.js</p>
                <Highlight className="react">
                  {`import LocalizedStrings from 'react-localization';
import en_lang from './en.js';
import ch_lang from './ch.js';
import sp_lang from './sp.js';
import in_lang from './in.js';
import tr_lang from './tr.js';

let strings = new LocalizedStrings({
    en: en_lang ,
    tr: tr_lang,
    ch: ch_lang,
    sp: sp_lang,
    in: in_lang,
});

export default strings;
`}
                </Highlight>

                Sample english language file(lang/en.js)
<br />
                <Highlight className="javascript">
                  {`let eng_lang = {
        menu: {
            dashboard: "Dashboard",
            dashboard1: "Dashboard 1",
            dashboard2: "Dashboard 2",
            dashboard3: "Dashboard 3",
            uikit: "UI Kit",
            typography: "Typography",
            buttons:"Buttons",
            icons:"Icons",
            cards:"Cards",
            menus:"Menu",
             ..
             ..
             ..
            documents:"Documents",
        }
}

export default eng_lang
`}
                </Highlight>


                <br />

                Language use for component


                <br />
                <Highlight className="react">
                  {'import strings from \'../lang/lang.js\'; '}
                </Highlight>

                <Highlight className="react">
                  {`<ListItem
              primaryText={strings.menu.dashboard}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[ 
              <ListItem key = {1} primaryText = {strings.menu.dashboard1}  containerElement={<Link to={"dashboard"}/>}/>,
              <ListItem key = {2} primaryText = {strings.menu.dashboard2} containerElement={<Link to={"dashboard_2"}/>}/>,
              <ListItem key = {3} primaryText = {strings.menu.dashboard3} containerElement={<Link to={"dashboard_3"}/>}/>
            ]}/>         
`}
                </Highlight>


                <h3>Router</h3>
                <br />
                <br />

                <p>Router page structure /routes.js</p>
                <Highlight className="react">
                  {`<Route>
      <Route path="login" component={LoginPage} />
      <Route path="lock" component={lockPage} />
      <Route path="404" component={NotFoundPage404} />
      <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />

      <Route path="dashboard" component={Dashboard} />
      <Route path="dashboard_2" component={Dashboard_2} />
      <Route path="dashboard_3" component={Dashboard_3} />

      <Route path="typography" component={TypographyPage} />
      <Route path="button" component={ButtonPage} />
      <Route path="icon" component={iconPage} />
      <Route path="card" component={CardPage} />
      <Route path="menus" component={MenuPage} />
      <Route path="messages" component={MessagePage} />
      <Route path="list" component={ListPage} />
      <Route path="box" component={BoxPage} />
      <Route path="grid" component={GridPage} />
      <Route path="color" component={colorPage} />

      <Route path="modal" component={Modal} />
      <Route path="alert" component={Alert} />
      <Route path="notification" component={Notification} />
      <Route path="popover" component={Popover} />
      <Route path="badge" component={Badge} />
      <Route path="tabs" component={Tabs} />
      <Route path="toolbar" component={Toolbar} />
      <Route path="chip" component={Chip} />
      <Route path="slider" component={Slider} />
      <Route path="stepper" component={Stepper} />
      <Route path="subheader" component={Subheader} />
      <Route path="datePicker" component={DatePicker} />

      <Route path="form" component={FormPage} />
      <Route path="formValidation" component={FormValidation} />
      <Route path="formElements" component={FormElements} />

      <Route path="table" component={TablePage} />
      <Route path="advancedTable" component={advancedTable} />
      <Route path="dataTable" component={dataTablePage} />

      <Route path="chart1" component={ChartPage_1} />
      <Route path="chart2" component={ChartPage_2} />
      <Route path="chart3" component={ChartPage_3} />

      <Route path="profile" component={profilePage} />
      <Route path="price" component={pricePage} />
      <Route path="products" component={productsPage} />

      <Route path="documents" component={Documents} />


      <Route path="*" component={NotFoundPage404} />
      <Route path="assets"  />
    </Route>
  </Route>
 `}
                </Highlight>
                <br /><br />


                <h3>Aplication Menu</h3>
                <br /><br />
                /components/menuListItem.js
 <Highlight className="HTML">
   {`<List>
            <ListItem
              primaryText={strings.menu.dashboard}
              leftIcon={<FontIcon className = "material-icons"> dashboard </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[ 
              <ListItem key = {1} primaryText = {strings.menu.dashboard1}  containerElement={<Link to={"dashboard"}/>}/>,
              <ListItem key = {2} primaryText = {strings.menu.dashboard2} containerElement={<Link to={"dashboard_2"}/>}/>,
              <ListItem key = {3} primaryText = {strings.menu.dashboard3} containerElement={<Link to={"dashboard_3"}/>}/>
            ]}/>
            <ListItem
              primaryText={strings.menu.uikit}
              leftIcon={<FontIcon className = "material-icons"> extension </FontIcon>}
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[ 
              <ListItem key = {1} primaryText = {strings.menu.typography} containerElement={<Link to={"typography"}/>}/>,
              <ListItem key = {2} primaryText = {strings.menu.buttons} containerElement={<Link to={"button"}/>} />,
              <ListItem key = {3} primaryText = {strings.menu.icons}  containerElement={<Link to={"icon"}/>}/>,
              <ListItem key = {4} primaryText = {strings.menu.cards}  containerElement={<Link to={"card"}/>}/>,
              <ListItem key = {5} primaryText = {strings.menu.menus}  containerElement={<Link to={"menu"}/>}/>,
              <ListItem key = {6} primaryText = {strings.menu.lists}  containerElement={<Link to={"list"}/>}/>,
              <ListItem key = {7} primaryText = {strings.menu.boxes} containerElement={<Link to={"box"}/>}/>,
              <ListItem key = {8} primaryText = {strings.menu.grid}  containerElement={<Link to={"grid"}/>}/>,
              <ListItem key = {9} primaryText = {strings.menu.colors} containerElement={<Link to={"color"}/>} />,
              <ListItem key = {10} primaryText = {strings.menu.messages} containerElement={<Link to={"messages"}/>}/>              
            ]}/>
          </List>
         <ListItem  
          leftIcon={<FontIcon className = "material-icons"> live_help </FontIcon>}
          key = {1} primaryText = {strings.menu.documents} containerElement={<Link to={"documents"}/>} />                
`}
 </Highlight>


                <br /><br />
                <h3>Create your custom page</h3>
                <br /><br />
                1. Create the "custompage.js" file in the "routes" folder as follows.
<br /><br />
                <Highlight className="html">
                  {`import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

const YourPage ()
<div>
    <RaisedButton label="Default" style={style.raisedButton}/>
    <RaisedButton label="Primary" primary={true} style={style.raisedButton}/>
    <RaisedButton label="Secondary" secondary={true} style={style.raisedButton}/>
    <RaisedButton label="Disabled" disabled={true} style={style.raisedButton}/>
</div>
export default YourPage
`}
                </Highlight>


                <br /><br />
                2.  "menuListItem.js"  edit add below line
<br /><br />
                <Highlight className="typescript">
                  {`.....
    <ListItem key = {1} primaryText = {strings.menu.typography} containerElement={<Link to={"typography"}/>}/>,
.....    
`}


                </Highlight>
                <br /><br />
                3.  "routes.js"  edit add below line
<br /><br />
                <Highlight className="typescript">
                  {`.....
     <Route path="typography" component={TypographyPage} />
.....    
`}
                </Highlight>


                <h3>Your Data Ajax Request</h3>
                <br /><br />
                <Highlight className="html">
                  {`import React from 'react'
import reqwest from 'reqwest';

const AjaxRequestPage = React.createClass({

  getInitialState() {
    return {yourData: []};
  },

  DataFetch(params = {}) {
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 1000,
        ...params
      },
      type: 'json'
    }).then((data) => {
      this.setState({yourData: data.results});
    });
  },
 

 componentDidMount() {
    this.DataFetch();
  },
  
  render() {
    return (
      <div>
         <YourComponent dataSource={this.state.yourData}> </YourComponent>
      </div>
    );
  }
});

export default AjaxRequestPage
`}
                </Highlight>

                <br />


                <h3>For use components</h3><br />
                <br />
                <p>You must import from react antd modules and other npm react modules </p>
                <h4>React import</h4>
                <Highlight className="javascript">
                  {`import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider'; `}
                </Highlight>

                <br />


                <br />
                <br />
                <h4>Font Icons</h4><br />
                <p>You can use Font icons</p>
                <FontIcon className="material-icons" >account_circle</FontIcon>
                <FontIcon className="material-icons" >alarm_add</FontIcon>


                <br />
                <br />

                <Highlight className="html">
                  {`<FontIcon className="material-icons" >account_circle</FontIcon> 
<FontIcon className="material-icons" >alarm_add</FontIcon>`}
                </Highlight>
                <br />
                <br />

                <br />
                <h4>SVG Icons</h4>
                <p>Can be icon set http://iconfont.cn/and import your index.html src="./src/iconfont.js" using script tags</p>
                <br />
                <SvgIco tooltip="Notifications" className="icon" type="GasStation" />
                <SvgIco tooltip="Notifications" className="icon" type="Colosseum" />
                <Highlight className="html">
                  {`<SvgIco tooltip="Notifications" className="icon" type="GasStation" />
<SvgIco tooltip="Notifications" className="icon" type="Colosseum" />`}
                </Highlight>

                <br />

                <h4>Button</h4><br />
                <FlatButton label="Default" />
                <FlatButton label="Primary" primary={true} />
                <FlatButton label="Secondary" secondary={true} />
                <FlatButton label="Disabled" disabled={true} />
                <br />


                <Highlight className="html">
                  {`<FlatButton label="Default"/>
<FlatButton label="Primary" primary={true}/>
<FlatButton label="Secondary" secondary={true}/>
<FlatButton label="Disabled" disabled={true}/>`}
                </Highlight>
                <br />

                <h4>Chip</h4><br />
                <Chip style={styles.chip}>
                  <Avatar
                    icon={<FontIcon className="material-icons" > perm_identity </FontIcon>}
                  />
                  FontIcon Avatar Chip
                </Chip>
                <Chip style={styles.chip}>
                  <Avatar size={32}>A</Avatar>
                  Text Avatar Chip
                </Chip>
                <br />
                <br />

                <Highlight className="html">
                  {`<Chip onTouchTap={handleTouchTap} style={styles.chip}>
<Avatar
  icon={<FontIcon className="material-icons" > perm_identity </FontIcon>} />
FontIcon Avatar Chip
</Chip>
<Chip onTouchTap={handleTouchTap} style={styles.chip}>
<Avatar size={32}>A</Avatar>
Text Avatar Chip
</Chip> `}
                </Highlight>
                <br />

                <h4>Badge</h4><br />

                <Badge badgeContent={4} primary={true}>
                  <FontIcon className="material-icons" > notifications </FontIcon>
                </Badge>
                <Badge badgeContent={4} primary={true}>
                  <FontIcon className="material-icons" > album </FontIcon>
                </Badge>
                <Badge badgeContent={4} primary={true}>
                  <FontIcon className="material-icons" > add_shopping_cart </FontIcon>
                </Badge>
                <Badge badgeContent={4} primary={true}>
                  <FontIcon className="material-icons" > attach_file </FontIcon>
                </Badge>
                <Badge badgeContent={4} primary={true}>
                  <FontIcon className="material-icons" > backup </FontIcon>
                </Badge>

                <Highlight className="html">
                  {`<Badge badgeContent={4} primary={true}>
<FontIcon className="material-icons" > notifications </FontIcon>
</Badge>
<Badge badgeContent={4} primary={true}>
<FontIcon className="material-icons" > album </FontIcon>
</Badge>`}
                </Highlight>

                <br />

                <h4>Radio</h4><br />

                <RadioButtonGroup name="shipName" defaultSelected="community">
                  <RadioButton
                    value="enterprise"
                    label="Sample"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    value="community"
                    label="Sample 2"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>

                <br />


                <Highlight className="html">
                  {`<RadioButtonGroup name="shipName" defaultSelected="community">
<RadioButton
  value="enterprise"
  label="Sample"
  style={styles.radioButton} />
<RadioButton
  value="community"
  label="Sample 2"
  style={styles.radioButton} />
</RadioButtonGroup>`}
                </Highlight>
                <br />

                <h4>Text Input</h4><br />

                <TextField hintText="The hint " />

                <br />


                <Highlight className="html">
                  {'<TextField hintText="The hint text can be as long as you want, it will wrap." />'}
                </Highlight>
                <br />

                <h4>Toogle</h4><br />

                <Toggle label="Simple" style={styles.toggle} />

                <br />


                <Highlight className="html">
                  {'<Toggle label="Simple" style={styles.toggle} />'}
                </Highlight>
                <br />

                <h4>Alert(SnackBar)</h4><br />

                <RaisedButton onTouchTap={this.handleTouchTap} secondary={true} label="Add to my calendar" />
                <Snackbar
                  open={this.state.open}
                  message="Event added to your calendar"
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                />
                <br />


                <Highlight className="html">
                  {`<RaisedButton onTouchTap={this.handleTouchTap}  secondary={true} label="Add to my calendar" />
<Snackbar  open={this.state.open}  message="Event added to your calendar"  autoHideDuration={4000}  onRequestClose={this.handleRequestClose} />`}
                </Highlight>
                <br />

                <h4>Modal(Dialog)</h4><br />
                <RaisedButton label="Dialog" primary={true} onTouchTap={this.handleOpen} />
                <Dialog
                  title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={this.state.open_modal}
                  onRequestClose={this.handleClose}
                >
                  The actions in this window were passed in as an array of React objects.
                </Dialog>
                <br />

                <Highlight className="html">
                  {`<RaisedButton label="Dialog" fullWidth={true} primary={true} onTouchTap={this.handleOpen} />
<Dialog  title="Dialog With Actions"  actions={actions}  modal={false}  open={this.state.open_modal}  onRequestClose={this.handleClose}>
  The actions in this window were passed in as an array of React objects.
</Dialog>`}
                </Highlight>

                <br />
                <h4>Range(Slider)</h4><br />
                <Slider />
                <Slider defaultValue={0.5} />

                <Highlight className="html">
                  {`<Slider/>
<Slider defaultValue={0.5}/>`}
                </Highlight>
                <br />

                <h4>Grid</h4><br />
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    12
                  </Col>

                </Row>
                <Row >
                  <Col xs={12} md={6} lg={6}>
                    6
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    6
                  </Col>

                </Row>
                <br />

                <Highlight className="html">
                  {`<Row>
<Col xs={12} md={12} lg={12}>
</Col>
</Row>
<Row >
<Col xs={12} md={6} lg={6}> 
</Col>
<Col xs={12} md={6} lg={6}> 
</Col>
</Row>` } </Highlight>


                <br /><br />
                <h4>Table</h4><br />


                <Highlight className="html">
                  {`<Table>
<TableHeader>
  <TableRow>
    <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
    <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
    <TableHeaderColumn style={styles.columns.price}>Price</TableHeaderColumn>
    <TableHeaderColumn style={styles.columns.category}>Category</TableHeaderColumn>
    <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
  </TableRow>
</TableHeader>
<TableBody>
  {Data.tablePage.items.map(item =>
    <TableRow key={item.id}>
      <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
      <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
      <TableRowColumn style={styles.columns.price}>{item.price}</TableRowColumn>
      <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
      <TableRowColumn style={styles.columns.edit}>
        <Link className="button" to="/form">
          <FloatingActionButton zDepth={0}
                                mini={true}
                                backgroundColor={grey200}
                                iconStyle={styles.editButton}>
            <ContentCreate  />
          </FloatingActionButton>
        </Link>
      </TableRowColumn>
    </TableRow>
  )}
</TableBody>
</Table>`}
                </Highlight>
                <br />
                <br /><br />
                <h4>Form</h4><br />

                <Highlight className="html">
                  {`<form>
<TextField hintText="Name" floatingLabelText="Name" fullWidth={true}/>
<TextField
  hintText="Password Field"
  floatingLabelText="Password"
  type="password"
  fullWidth={true}/>

<TextField
  hintText="MultiLine with rows: 2 and rowsMax: 4"
  multiLine={true}
  rows={2}
  rowsMax={4}
  fullWidth={true}/>

<TextField disabled={true} hintText="Disabled Hint Text" fullWidth={true}/>
<Divider/>
<Link to="#">
  <RaisedButton label="Cancel"/>
</Link>
<RaisedButton
  label="Save"
  style={styles.saveButton}
  type="submit"
  primary={true}/>
</form>`}
                </Highlight>


                <h4>Card</h4><br />

                <Row>
                  <Col xs={12} md={6} lg={6}>
                    <Card style={styles.card}>
                      <CardHeader
                        title="Cheryl Sweet"
                        subtitle="Co-Producer"
                        avatar="https://randomuser.me/api/portraits/women/45.jpg"
                      />
                      <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                      >
                        <img src="./assets/images/1.jpg" />
                      </CardMedia>
                      <CardTitle title="Card title" subtitle="Card subtitle" />
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
                            massa. Aliquam erat volutpat. Nulla facilisi.
                        </CardText>
                      <CardActions>
                        <FlatButton label="Add Friend" />
                        <FlatButton label="Say Hello!" />
                      </CardActions>
                    </Card>
                  </Col>
                </Row>

                <br /><br />
                <Highlight className="html">
                  {`<Card style={style.card}>
<CardHeader
    title="Cheryl Sweet"
    subtitle="Co-Producer"
    avatar="https://randomuser.me/api/portraits/women/45.jpg"/>
<CardMedia
    overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
    <img src="./assets/images/1.jpg"/>
</CardMedia>
<CardTitle title="Card title" subtitle="Card subtitle"/>
<CardText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
    massa. Aliquam erat volutpat. Nulla facilisi.
</CardText>
<CardActions>
    <FlatButton label="Add Friend"/>
    <FlatButton label="Say Hello!"/>
</CardActions>
</Card>`}
                </Highlight>
                <br />


                <h4>Message</h4><br />
                <Message
                  zdepth={1}
                  color="positive"
                  header="Positive Message Box"
                  message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
                />
                <Message
                  zdepth={1}
                  color="negative"
                  header="Negative Message Box"
                  message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
                />
                <br />
                <br />
                <Highlight className="html">
                  {`<Message zdepth={1} color="positive" header="Positive Message Box" message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."/>
<Message zdepth={1} color="negative" header="Negative Message Box" message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."/>`}
                </Highlight>
                <br />

                <h4>Notification</h4><br />
                <RaisedButton label="Basic Notification" primary={true} onTouchTap={this.showNotification} />
                <br />
                <ReactMaterialUiNotifications desktop={true} />
                <Highlight className="typescript">
                  {`showNotification () {
ReactMaterialUiNotifications.showNotification({
title: 'Title', additionalText: 'Some message to be displayed ', icon: <MessagesIcon />,
iconBadgeColor: deepOrange500,
overflowText: "joe@gmail.com",
timestamp: moment().format('h:mm A')
})
// update notifications count
this.setState({
count: ++this.state.count
})
} `}
                </Highlight>
                <br />
                <Highlight className="html">
                  {`<RaisedButton label="Basic Notification" primary={true} onTouchTap={this.showNotification} />
<ReactMaterialUiNotifications desktop={true} />`}
                </Highlight>
                <br />

                <h4> Progress Bar</h4><br />
                <LinearProgress mode="indeterminate" />


                <Highlight className="html">
                  {'<LinearProgress mode="indeterminate" />'}
                </Highlight>
                <br />


                <h4>Dropdown</h4>
                <SelectField >
                  <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
                  <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
                  <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
                  <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
                </SelectField>

                <Highlight className="html">
                  {`<SelectField >
<MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
<MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
<MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
<MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
</SelectField>`}
                </Highlight> <br />


                <h4>Stepper</h4><br />

                <Stepper activeStep={2}>
                  <Step>
                    <StepLabel>Select campaign settings</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Create an ad group</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Create an ad </StepLabel>
                  </Step>
                </Stepper>
                <br />


                <br />
                <Highlight className="html">
                  {`<Stepper activeStep={stepIndex}>
<Step>
  <StepLabel>Select campaign settings</StepLabel>
</Step>
<Step>
  <StepLabel>Create an ad group</StepLabel>
</Step>
<Step>
  <StepLabel>Create an ad </StepLabel>
</Step>
</Stepper>`}
                </Highlight>
                <br />
                <br />
                <h4>Tab</h4><br />
                <Tabs initialSelectedIndex={1}>
                  <Tab label="Item One">
                    <div>
                      <h2 style={styles.headline}>Tab One</h2>
                      <p> This is an example tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </p>
                      <p>You can put any sort of HTML or react component in here. It even keeps the
          component state!</p>
                      <Slider name="slider0" defaultValue={0.5} />
                    </div>
                  </Tab>
                  <Tab label="Item Two">
                    <div>
                      <h2 style={styles.headline}>Tab Two</h2>
                      <p>  This is another example tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                    </div>
                  </Tab>
                  <Tab label="onActive" data-route="/home" onActive={handleActive}>
                    <div>
                      <h2 style={styles.headline}>Tab Three</h2>
                      <p>  This is a third example tab.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                    </div>
                  </Tab>
                </Tabs>
                <br />


                <br />
                <Highlight className="html">
                  {`<Tabs initialSelectedIndex={1}>
<Tab label="Item One">
  <div>
    <h2 style={styles.headline}>Tab One</h2>
    <p> This is an example tab.   </p>
    <p>You can put any sort of HTML or react component in here. It even keeps the
component state!</p>
    <Slider name="slider0" defaultValue={0.5} />
  </div>
</Tab>
<Tab label="Item Two">
  <div>
    <h2 style={styles.headline}>Tab Two</h2>
    <p>  This is another example tab.  </p>
  </div>
</Tab>
<Tab label="onActive" data-route="/home" onActive={handleActive}>
  <div>
    <h2 style={styles.headline}>Tab Three</h2>
    <p>  This is a third example tab.  </p>
  </div>
</Tab>
</Tabs>`}
                </Highlight>
                <br />


                <h4>Auto Complete</h4><br />
                <AutoCompleteExampleSimple />

                <Highlight className="html">
                  {`export class AutoCompleteExampleSimple extends React.Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
        />
      </div>
    );
  }
}`}
                </Highlight>
                <br />
                <h4>Chart</h4><br />
                <LineChart />
                <br />

                <Highlight className="javascript">
                  {`const data = [
{
  "Time": "9/1",
  "Price": 10,
  "name": "Mercedes"
}, {
  "Time": "9/1",
  "Price": 30,
  "name": "Audi"
}, {
  "Time": "9/2",
  "Price": 12,
  "name": "Mercedes"
}, {
  "Time": "9/2",
  "Price": 32,
  "name": "Audi"
}];        
                  
const Line = createG2(chart => {
chart
    .line()
    .position('Time*Price')
    .color('name')
    .shape('spline')
    .size(4);
    chart.point().position('Time*Price').color('name').shape('name', ['circle', 'rect', 'diamond']).size(8);
chart.render();
});
`}
                </Highlight>

                <Highlight className="html">
                  {`<Line
  forceFit={true}
  data={this.state.data}
  width={this.state.width}
  height="500"
  plotCfg={{
  margin: [50, 100, 80, 60]
}}/>`}
                </Highlight>
                <br />


                <h3>React-Router</h3>
                <p>Declarative routing forr React apps.</p>
                <br />

                <h3>React DevTools Extension</h3><br /><br />
                <p><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" target="_blank">https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi</a></p>

                <br /><br />
                <h3>Other Components / Modules etc.. </h3>
                <br />

                You can find other examples in template containers and components folder
 <br />
                <br />
                <h4>Note </h4>
                <br />
                images are not included Mare Admin main zip file.
                <br />
                <br /><br />
                <h3>Credits</h3>
                <table className="table" >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Reposity</th>
                      <th>License</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>babel.js</td>
                      <td>https://github.com/babel/babel</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>react-router</td>
                      <td>https://github.com/reactjs/react-router</td>
                      <td>MIT</td>
                    </tr>

                    <tr>
                      <td>webpack</td>
                      <td>https://github.com/webpack/webpack</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>webpack-dev-server</td>
                      <td>https://github.com/webpack/webpack-dev-server</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>ant design</td>
                      <td>https://github.com/ant-design/ant-design</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>Material-ui </td>
                      <td>https://github.com/callemall/material-ui</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>Semantic ui</td>
                      <td>https://github.com/Semantic-Org/Semantic-UI</td>
                      <td>MIT
                            </td>
                    </tr>

                    <tr>
                      <td>Recharts</td>
                      <td>https://github.com/recharts/recharts</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>Echarts</td>
                      <td>github.com/hustcc/echarts-for-react</td>
                      <td>MIT
                            </td>
                    </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <tr>
                      <td>g2 Charts</td>
                      <td>https://github.com/antvis/g2-react</td>
                      <td>MIT
                            </td>
                    </tr>

                    <tr>
                      <td>SVG Icons</td>
                      <td>http://iconfont.cn/</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>Assets webpack plugin</td>
                      <td>https://npmjs.com/package/assets-webpack-plugin</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>Material Design</td>
                      <td>https://material.io/guidelines/material-design</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>classnames</td>
                      <td>https://npmjs.com/package/classnames</td>
                      <td>MIT
                            </td>
                    </tr>

                    <tr>
                      <td>js-cookie</td>
                      <td>https://npmjs.com/package/js-cookie</td>
                      <td>MIT
                            </td>
                    </tr>

                    <tr>
                      <td>react-dom</td>
                      <td>https://npmjs.com/package/react-dom</td>
                      <td>BSD-3-Clause
                            </td>
                    </tr>
                    <tr>
                      <td>babel-plugin-import</td>
                      <td>https://www.npmjs.com/package/babel-plugin-import</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>react-highlight</td>
                      <td>https://npmjs.com/package/react-highlight</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>reqwest</td>
                      <td>https://npmjs.com/package/reqwest</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>robe-ajax</td>
                      <td>https://npmjs.com/package/robe-ajax</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>watchjs</td>
                      <td>https://npmjs.com/package/watchjs</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>copy-to-clipboard</td>
                      <td>https://github.com/nkbt/react-copy-to-clipboard</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>react-flexbox-grid</td>
                      <td>http://roylee0704.github.io/react-flexbox-grid/</td>
                      <td>MIT
                            </td>
                    </tr>
                    <tr>
                      <td>react-intl</td>
                      <td>https://github.com/yahoo/react-intl</td>
                      <td>BSD-3-Clause</td>
                    </tr>
                    <tr>
                      <td>react-intl</td>
                      <td>https://github.com/yahoo/react-intl</td>
                      <td>BSD-3-Clause</td>
                    </tr>

                    <tr>
                      <td>json-loader</td>
                      <td>github.com/webpack/json-loader</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>react-loading-spinner</td>
                      <td>github.com/boyarskiy/react-loading-spinner</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>react-swipeable-views</td>
                      <td>https://github.com/oliviertassinari/react-swipeable-views</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>react-materialui-notifications</td>
                      <td>https://github.com/puranjayjain/react-materialui-notifications</td>
                      <td>MIT</td>
                    </tr>
                    <tr>
                      <td>react-table-components</td>
                      <td>https://github.com/votsa/react-table-components</td>
                      <td>MIT</td>
                    </tr>


                    <tr>
                      <td>Images</td>
                      <td>https://randomuser.me/</td>
                      <td>*** Images Not Included Main file, Only Demo
                            </td>
                    </tr>
                    <tr>
                      <td>Images</td>
                      <td>https://unsplash.com/</td>
                      <td>*** Images Not Included Main file, Only Demo
                            </td>
                    </tr>
                  </tbody>
                </table>


              </PaperBase>
            </Paper>

          </Col>


        </Row>
      </div>
    );
  }
}
