import React from 'react';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {grey500, fullWhite} from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import {Row, Col} from 'react-flexbox-grid';

const style = {
  paper: {
    padding: 10,
    minHeight: 150,
    marginBottom: 15,
  },
  divider: {
    marginBottom: 20,
  },
  raisedButton: {
    marginRight: 10,
    marginBottom: 10,

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
    marginBottom: 10,
  },
};

const ButtonPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>User Interfaces / Button</h3>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Paper style={style.paper}>
            <Subheader>Flat Buttons</Subheader>
            <Divider style={style.divider} />
            <FlatButton label="Default" />
            <FlatButton label="Primary" primary={true} />
            <FlatButton label="Secondary" secondary={true} />
            <FlatButton label="Disabled" disabled={true} />
          </Paper>
          <Paper style={style.paper}>
            <Subheader>Complex Flat Buttons</Subheader>
            <Divider style={style.divider} />
            <FlatButton
              label="Choose an Image"
              labelPosition="before"
              style={style.uploadButton}
              containerElement="label"
            >
              <input type="file" style={style.uploadInput} />
            </FlatButton>
            <FlatButton
              label="Label before"
              labelPosition="before"
              primary={true}
              icon={<FontIcon
                color={grey500}
                className="material-icons"
                    > favorite </FontIcon>}
            />
            <FlatButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              label="GitHub Link"
              secondary={true}
              icon={<FontIcon
                color={grey500}
                className="material-icons"
                    > fingerprint </FontIcon>}
            />
          </Paper>
          <Paper style={style.paper}>
            <Subheader>Flat Icon Buttons</Subheader>
            <Divider style={style.divider} />
            <FlatButton
              icon={<FontIcon className="material-icons" > room </FontIcon>}
              style={style.flatIconButton}
            />
            <FlatButton
              backgroundColor="#1D1A31"
              hoverColor="#4D2D52"
              icon={<FontIcon
                color={fullWhite}
                className="material-icons"
                    > shop </FontIcon>}
              style={style.flatIconButton}
            />
            <FlatButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="material-icons" > verified_user </FontIcon>}
              style={style.flatIconButton}
            />


            <FlatButton
              primary={true}
              icon={<FontIcon className="material-icons" > g_translate </FontIcon>}
              style={style.flatIconButton}
            />
            <FlatButton
              backgroundColor="#4A7C59"
              hoverColor="#8FC0A9"
              icon={<FontIcon
                color={fullWhite}
                className="material-icons"
                    > touch_app </FontIcon>}
              style={style.flatIconButton}
            />
            <FlatButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="material-icons" > new_releases </FontIcon>}
              style={style.flatIconButton}
            />
            <FlatButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={false}
              icon={<FontIcon className="material-icons" > phone </FontIcon>}
              style={style.flatIconButton}
            />
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper style={style.paper}>
            <Subheader>Raised Buttons</Subheader>
            <Divider style={style.divider} />
            <RaisedButton label="Default" style={style.raisedButton} />
            <RaisedButton label="Primary" primary={true} style={style.raisedButton} />
            <RaisedButton label="Secondary" secondary={true} style={style.raisedButton} />
            <RaisedButton label="Disabled" disabled={true} style={style.raisedButton} />
          </Paper>
          <Paper style={style.paper}>
            <Subheader>Raised Buttons</Subheader>
            <Divider style={style.divider} />
            <RaisedButton
              label="Choose an Image"
              labelPosition="before"
              style={style.button}
              containerElement="label"
            >
              <input type="file" style={style.exampleImageInput} />
            </RaisedButton>
            <RaisedButton
              label="Label before"
              labelPosition="before"
              primary={true}
              icon={<FontIcon className="material-icons" > verified_user </FontIcon>}
              style={style.button}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              label="Github Link"
              secondary={true}
              style={style.button}
              icon={<FontIcon className="material-icons" > verified_user </FontIcon>}
            />
          </Paper>
          <Paper style={style.paper}>
            <Subheader>Raised Buttons</Subheader>
            <Divider style={style.divider} />
            <RaisedButton
              secondary={true}
              icon={<FontIcon className="material-icons" > voicemail </FontIcon>}
              style={style.flatIconButton}
            />
            <RaisedButton
              primary={true}
              icon={<FontIcon className="material-icons" > rss_feed </FontIcon>}
              style={style.flatIconButton}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="material-icons" > vpn_key </FontIcon>}
              style={style.flatIconButton}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              primary={true}
              icon={<FontIcon className="material-icons" > contact_phone </FontIcon>}
              style={style.flatIconButton}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="material-icons" > chat </FontIcon>}
              style={style.flatIconButton}
            />

            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              primary={true}
              icon={<FontIcon className="material-icons" > ring_volume </FontIcon>}
              style={style.flatIconButton}
            />
            <RaisedButton
              href="https://github.com/callemall/material-ui"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="material-icons" > spellcheck </FontIcon>}
              style={style.flatIconButton}
            />
          </Paper>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <Paper style={style.paper}>
            <Subheader>Floating Action Buttons</Subheader>
            <Divider style={style.divider} />

            <FloatingActionButton style={style.floatingAction}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style.floatingAction}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > spellcheck </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > spellcheck </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton style={style.floatingAction}>
              <FontIcon className="material-icons" > gesture </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > gesture </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > send </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > send </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton style={style.floatingAction}>
              <FontIcon className="material-icons" > security </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > security </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > gesture </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton secondary={true} mini={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > gesture </FontIcon>
            </FloatingActionButton>


            <FloatingActionButton style={style.floatingAction}>
              <FontIcon className="material-icons" > ev_station </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > ev_station </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > healing </FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini={true} secondary={true} style={style.floatingAction}>
              <FontIcon className="material-icons" > healing </FontIcon>
            </FloatingActionButton>

          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper style={style.paper}>
            <Subheader>Icon Buttons</Subheader>
            <Divider style={style.divider} />

            <IconButton><FontIcon className="material-icons" > spellcheck </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > album </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > mic </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > send </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > weekend </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > battery_full </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > wallpaper </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > pie_chart </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > keyboard </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > scanner </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > toys </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > watch </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > security </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > palette </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > style </FontIcon></IconButton>
            <IconButton><FontIcon className="material-icons" > wifi </FontIcon></IconButton>


          </Paper>
          <Paper style={style.paper}>
            <Subheader>Disabled Icon Buttons</Subheader>
            <Divider style={style.divider} />

            <IconButton disabled={true}><FontIcon className="material-icons" > spellcheck </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > album </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > mic </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > send </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > weekend </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > battery_full </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > wallpaper </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > pie_chart </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > keyboard </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > scanner </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > toys </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > watch </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > security </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > palette </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > style </FontIcon></IconButton>
            <IconButton disabled={true}><FontIcon className="material-icons" > wifi </FontIcon></IconButton>


          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper style={style.paper}>
            <Subheader>Touch Icon Buttons</Subheader>
            <Divider style={style.divider} />

            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
              <FontIcon className="material-icons" > spa </FontIcon>
            </IconButton>
            <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
              <FontIcon className="material-icons" > child_friendly </FontIcon>
            </IconButton>
            <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
              <FontIcon className="material-icons" > beach_access </FontIcon>
            </IconButton>
            <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
              <FontIcon className="material-icons" > kitchen </FontIcon>
            </IconButton>
            <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
              <FontIcon className="material-icons" > room_service </FontIcon>
            </IconButton>
            <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
              <FontIcon className="material-icons" > business_center </FontIcon>
            </IconButton>


          </Paper>
          <Paper style={style.paper}>
            <Subheader>Icon Buttons with Tooltip</Subheader>
            <Divider style={style.divider} />

            <IconButton tooltip="bottom-right" tooltipPosition="bottom-right">
              <FontIcon className="material-icons" > notifications </FontIcon>
            </IconButton>
            <IconButton tooltip="bottom-center" tooltipPosition="bottom-center">
              <FontIcon className="material-icons" > public </FontIcon>
            </IconButton>
            <IconButton tooltip="bottom-left" tooltipPosition="bottom-left">
              <FontIcon className="material-icons" > share </FontIcon>
            </IconButton>
            <IconButton tooltip="top-right" tooltipPosition="top-right">
              <FontIcon className="material-icons" > whatshot </FontIcon>
            </IconButton>
            <IconButton tooltip="top-center" tooltipPosition="top-center">
              <FontIcon className="material-icons" > cake </FontIcon>
            </IconButton>
            <IconButton tooltip="top-left" tooltipPosition="top-left">
              <FontIcon className="material-icons" > mood </FontIcon>
            </IconButton>


          </Paper>
        </Col>
      </Row>

    </div>
  );
};

export default ButtonPage;
