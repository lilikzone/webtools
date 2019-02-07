import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const styles = {
  row: {
    marginBottom: 15,
    marginTop: 15,
  },
  header: {
    fontWeight: 400,
    fontSize: '1.2em',
    padding: 10,
    color: 'rgba(0, 0, 0, 0.541176)',
  },
  divider: {
    marginBottom: 10,
  },
  controledmenu: {
    paddingBottom: 10,
  },

  menu: {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
    width: '100%!important',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  button: {
    marginTop: 8,
  },
};

export class IconMenuExampleControlled extends React.Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <div style={styles.controledmenu}>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Refresh" />
          <MenuItem value="2" primaryText="Send feedback" />
          <MenuItem value="3" primaryText="Settings" />
          <MenuItem value="4" primaryText="Help" />
          <MenuItem value="5" primaryText="Sign out" />
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><ContentFilter /></IconButton>}
          onChange={this.handleChangeMultiple}
          value={this.state.valueMultiple}
          multiple={true}
        >
          <MenuItem value="1" primaryText="Blu-ray" />
          <MenuItem value="2" primaryText="Cassette" />
          <MenuItem value="3" primaryText="CD" />
          <MenuItem value="4" primaryText="DVD Audio" />
          <MenuItem value="5" primaryText="Hybrid SACD" />
          <MenuItem value="6" primaryText="Vinyl" />
        </IconMenu>
        <IconMenu
          iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem value="1" primaryText="Windows App" />
          <MenuItem value="2" primaryText="Mac App" />
          <MenuItem value="3" primaryText="Android App" />
          <MenuItem value="4" primaryText="iOS App" />
        </IconMenu>
        <RaisedButton style={styles.button} onTouchTap={this.handleOpenMenu} label="Downloads" />
      </div>
    );
  }
}


const MenuPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>User Interfaces / Menu</h3>
      <Row style={styles.row}>

        <Col xs={12} md={2} lg={2}>
          <Paper >
            <h1 style={styles.header}>Basic Menu</h1>
            <Divider />
            <Menu desktop={false} autoWidth={false} width={300}>
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Profile" />
              <MenuItem primaryText="Messages" />
              <MenuItem primaryText="Notifications" />
              <MenuItem primaryText="Alerts" />
              <Divider />

              <MenuItem primaryText="Help &amp; feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Sign out" />
            </Menu>
          </Paper>
        </Col>
        <Col xs={12} md={2} lg={2}>
          <Paper >
            <h1 style={styles.header}>Disabled Menu</h1>
            <Divider />
            <Menu desktop={false} autoWidth={false} width={300}>
              <MenuItem primaryText="Back" />
              <MenuItem primaryText="Forward" disabled={true} />
              <Divider />
              <MenuItem primaryText="Recently closed" disabled={true} />
              <MenuItem primaryText="Google" disabled={true} />
              <MenuItem primaryText="Facebook" disabled={true} />
              <MenuItem primaryText="Twitter" disabled={true} />
              <MenuItem primaryText="Instagram" disabled={true} />

              <MenuItem primaryText="YouTube" />
            </Menu>
          </Paper>
        </Col>

        <Col xs={12} md={2} lg={2}>
          <Paper >
            <h1 style={styles.header}>Right Iconed Menu</h1>
            <Divider />
            <Menu desktop={false} autoWidth={false} width={300}>
              <MenuItem primaryText="Clear Config" />
              <MenuItem
                primaryText="New Config"
                rightIcon={<FontIcon className="material-icons" > person_add </FontIcon>}
              />
              <MenuItem
                primaryText="Repos"
                rightIcon={<FontIcon className="material-icons" > person_add </FontIcon>}
              />
              <MenuItem
                primaryText="Issues"
                rightIcon={<FontIcon className="material-icons" > person_add </FontIcon>}
              />
              <Divider />
              <MenuItem
                primaryText="Project"
                rightIcon={<FontIcon className="material-icons" > settings </FontIcon>}
              />
              <MenuItem
                primaryText="Workspace"
                rightIcon={<FontIcon className="material-icons" style={{color: '#559'}} > settings </FontIcon>}
              />
              <MenuItem
                primaryText="Paragraph"
                rightIcon={<b style={styles.rightIcon} > ¶ </b>}
              />
              <MenuItem
                primaryText="Section"
                rightIcon={<b style={styles.rightIcon} > § </b>}
              />
            </Menu>

          </Paper>
        </Col>
        <Col xs={12} md={2} lg={2}>
          <Paper >
            <h1 style={styles.header}>Left Iconed Menu</h1>
            <Divider />

            <Menu desktop={false} autoWidth={false} width={300}>
              <MenuItem
                primaryText="Preview"
                leftIcon={<FontIcon className="material-icons" style={{color: '#E15554'}} > remove_red_eye </FontIcon>}
              />
              <MenuItem
                primaryText="Share"
                leftIcon={<FontIcon className="material-icons" style={{color: '#4D9DE0'}} > share </FontIcon>}
              />
              <MenuItem
                primaryText="Get links"
                leftIcon={<FontIcon className="material-icons" style={{color: '#E1BC29'}} > link </FontIcon>}
              />
              <Divider />
              <MenuItem
                primaryText="Make a copy"
                leftIcon={<FontIcon className="material-icons" style={{color: '#3BB273'}} > content_copy </FontIcon>}
              />
              <MenuItem
                primaryText="Download"
                leftIcon={<FontIcon className="material-icons" style={{color: '#7768AE'}} > file_download </FontIcon>}
              />

              <MenuItem
                primaryText="Block"
                leftIcon={<FontIcon className="material-icons" style={{color: '#BB7E5D'}} > block </FontIcon>}
              />
              <MenuItem
                primaryText="Merge"
                leftIcon={<FontIcon className="material-icons" style={{color: '#F76F8E'}} > call_merge </FontIcon>}
              />
              <MenuItem
                primaryText="Remove"
                leftIcon={<FontIcon className="material-icons" style={{color: '#9191E9'}} > delete </FontIcon>}
              />
            </Menu>
          </Paper>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper >
            <h1 style={styles.header}>Nested Menu</h1>
            <Divider />
            <Menu desktop={false} autoWidth={false} width={400}>
              <MenuItem primaryText="Single" insetChildren={true} />
              <MenuItem primaryText="1.15" insetChildren={true} />
              <MenuItem primaryText="Double" insetChildren={true} />
              <MenuItem
                primaryText="Custom: 1.2"
                checked={true}
                rightIcon={<FontIcon className="material-icons" > keyboard_arrow_right </FontIcon>}
                menuItems={[<MenuItem primaryText="Show" rightIcon={<FontIcon className="material-icons" > keyboard_arrow_right </FontIcon>} menuItems={[<MenuItem primaryText="Show Level 2" />, <MenuItem primaryText="Grid lines" checked={true} />, <MenuItem primaryText="Page breaks" insetChildren={true} />, <MenuItem primaryText="Rules" checked={true} />]} />, <MenuItem primaryText="Grid lines" checked={true} />, <MenuItem primaryText="Page breaks" insetChildren={true} />, <MenuItem primaryText="Rules" checked={true} />,
                ]}
              />
              <Divider />
              <MenuItem primaryText="Add space before paragraph" />
              <MenuItem primaryText="Add space after paragraph" />

              <MenuItem primaryText="Custom spacing..." />
              <MenuItem primaryText="Custom aligment..." />

            </Menu>
          </Paper>

        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Paper >
            <h1 style={styles.header}>Secondary Text Menu</h1>
            <Divider />
            <Menu desktop={false} autoWidth={false} width={600}>
              <MenuItem primaryText="Bold" secondaryText="&#8984;B" />
              <MenuItem primaryText="Italic" secondaryText="&#8984;I" />
              <MenuItem primaryText="Underline" secondaryText="&#8984;U" />
              <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5" />
              <MenuItem primaryText="Superscript" secondaryText="&#8984;." />
              <MenuItem primaryText="Subscript" secondaryText="&#8984;," />
              <Divider />
              <MenuItem
                primaryText="Paragraph styles"
                rightIcon={<FontIcon className="material-icons" > keyboard_arrow_right </FontIcon>}
              />
              <MenuItem
                primaryText="Align"
                rightIcon={<FontIcon className="material-icons" > keyboard_arrow_right </FontIcon>}
              />

            </Menu>
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper >
            <h1 style={styles.header}>Secondary Text Menu</h1>
            <Divider />
            <Menu desktop={false} autoWidth={false} width={600}>
              <MenuItem primaryText="Facebook" secondaryText="&#8984; + F" />
              <MenuItem primaryText="Twitter" secondaryText="&#8984; + T" />
              <MenuItem primaryText="Google+" secondaryText="&#8984; + G" />
              <MenuItem primaryText="Instagram" secondaryText="&#8984; + I" />
              <MenuItem primaryText="Snapchat" secondaryText="&#8984; + S" />
              <MenuItem primaryText="Whatsapp" secondaryText="&#8984; + W" />
              <Divider />
              <MenuItem
                primaryText="Settings"
                rightIcon={<FontIcon className="material-icons" > keyboard_arrow_right </FontIcon>}
              />
              <MenuItem
                primaryText="Sign Out"
                rightIcon={<FontIcon className="material-icons" > keyboard_arrow_right </FontIcon>}
              />

            </Menu>
          </Paper>
        </Col>

      </Row>
      <Row style={styles.row}>
        <Col xs={12} md={4} lg={4}>
          <Paper >
            <h1 style={styles.header}>Icon Menu positioning

</h1>
            <Divider />
            <IconMenu
              iconButtonElement={<IconButton><FontIcon className="material-icons" > more_vert </FontIcon></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
            <IconMenu
              iconButtonElement={<IconButton><FontIcon className="material-icons" > more_vert </FontIcon></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
            <IconMenu
              iconButtonElement={<IconButton><FontIcon className="material-icons" > more_vert </FontIcon></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
            <IconMenu
              iconButtonElement={<IconButton><FontIcon className="material-icons" > more_vert </FontIcon></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Send feedback" />
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          </Paper>
        </Col>

        <Col xs={12} md={4} lg={4}>
          <Paper>
            <h1 style={styles.header}>Controlled Icon Menus</h1>
            <Divider />
            <IconMenuExampleControlled />
          </Paper>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper >
            <h1 style={styles.header}>Scrollable Icon Menu</h1>
            <Divider />
            <IconMenu
              iconButtonElement={<IconButton><MapsPlace /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              maxHeight={272}
            >
              <MenuItem value="AL" primaryText="Alabama" />
              <MenuItem value="AK" primaryText="Alaska" />
              <MenuItem value="AZ" primaryText="Arizona" />
              <MenuItem value="AR" primaryText="Arkansas" />
              <MenuItem value="CA" primaryText="California" />
              <MenuItem value="CO" primaryText="Colorado" />
              <MenuItem value="CT" primaryText="Connecticut" />
              <MenuItem value="DE" primaryText="Delaware" />
              <MenuItem value="DC" primaryText="District Of Columbia" />
              <MenuItem value="FL" primaryText="Florida" />
              <MenuItem value="GA" primaryText="Georgia" />
              <MenuItem value="HI" primaryText="Hawaii" />
              <MenuItem value="ID" primaryText="Idaho" />
              <MenuItem value="IL" primaryText="Illinois" />
              <MenuItem value="IN" primaryText="Indiana" />
              <MenuItem value="IA" primaryText="Iowa" />
              <MenuItem value="KS" primaryText="Kansas" />
              <MenuItem value="KY" primaryText="Kentucky" />
              <MenuItem value="LA" primaryText="Louisiana" />
              <MenuItem value="ME" primaryText="Maine" />
              <MenuItem value="MD" primaryText="Maryland" />
              <MenuItem value="MA" primaryText="Massachusetts" />
              <MenuItem value="MI" primaryText="Michigan" />
              <MenuItem value="MN" primaryText="Minnesota" />
              <MenuItem value="MS" primaryText="Mississippi" />
              <MenuItem value="MO" primaryText="Missouri" />
              <MenuItem value="MT" primaryText="Montana" />
              <MenuItem value="NE" primaryText="Nebraska" />
              <MenuItem value="NV" primaryText="Nevada" />
              <MenuItem value="NH" primaryText="New Hampshire" />
              <MenuItem value="NJ" primaryText="New Jersey" />
              <MenuItem value="NM" primaryText="New Mexico" />
              <MenuItem value="NY" primaryText="New York" />
              <MenuItem value="NC" primaryText="North Carolina" />
              <MenuItem value="ND" primaryText="North Dakota" />
              <MenuItem value="OH" primaryText="Ohio" />
              <MenuItem value="OK" primaryText="Oklahoma" />
              <MenuItem value="OR" primaryText="Oregon" />
              <MenuItem value="PA" primaryText="Pennsylvania" />
              <MenuItem value="RI" primaryText="Rhode Island" />
              <MenuItem value="SC" primaryText="South Carolina" />
              <MenuItem value="SD" primaryText="South Dakota" />
              <MenuItem value="TN" primaryText="Tennessee" />
              <MenuItem value="TX" primaryText="Texas" />
              <MenuItem value="UT" primaryText="Utah" />
              <MenuItem value="VT" primaryText="Vermont" />
              <MenuItem value="VA" primaryText="Virginia" />
              <MenuItem value="WA" primaryText="Washington" />
              <MenuItem value="WV" primaryText="West Virginia" />
              <MenuItem value="WI" primaryText="Wisconsin" />
              <MenuItem value="WY" primaryText="Wyoming" />
            </IconMenu>

            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem
                primaryText="Copy & Paste"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem primaryText="Cut" />,
                  <MenuItem primaryText="Copy" />,
                  <Divider />,
                  <MenuItem primaryText="Paste" />,
                ]}
              />

              <MenuItem
                primaryText="Case Tools"
                rightIcon={<ArrowDropRight />}
                menuItems={[
                  <MenuItem primaryText="UPPERCASE" />,
                  <MenuItem primaryText="lowercase" />,
                  <MenuItem primaryText="CamelCase" />,
                  <MenuItem primaryText="Propercase" />,
                ]}
              />
              <Divider />
              <MenuItem primaryText="Download" leftIcon={<Download />} />
              <Divider />
              <MenuItem value="Del" primaryText="Delete" />

            </IconMenu>
          </Paper>
        </Col>
      </Row>
    </div>
  );
};

export default MenuPage;
