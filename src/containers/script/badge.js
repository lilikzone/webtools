import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {pink500, green600} from 'material-ui/styles/colors';

const styles = {

  paper: {
    minHeight: 250,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragraph: {
    marginTop: 20,
    lineHeight: '2em',
    fontSize: '1.2em',
    marginBottom: 20,
  },
};
const BadgePage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Badge</h3>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper style={styles.paper}>
        <PaperBase title="Simple examples">
          <p style={styles.paragraph}>Two examples of badges containing text, using
            primary and secondary colors. The badge is applied to its children - an icon for
            the first example, and an Icon Button with tooltip for the second.</p>
          <div>
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
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > bug_report </FontIcon>
            </Badge>
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > domain </FontIcon>
            </Badge>
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > fiber_new </FontIcon>
            </Badge>
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > extension </FontIcon>
            </Badge>
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > fingerprint </FontIcon>
            </Badge>
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > bluetooth </FontIcon>
            </Badge>
            <Badge badgeContent={4} primary={true}>
              <FontIcon className="material-icons" > flight_takeoff </FontIcon>
            </Badge>
          </div>

        </PaperBase>
      </Paper>

    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper style={styles.paper}>
        <PaperBase title="Icon Button Examples">
          <p style={styles.paragraph}>Two examples of badges containing text, using
            primary and secondary colors. The badge is applied to its children - an icon for
            the first example, and an Icon Button with tooltip for the second.</p>
          <div>
            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > alarm </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > healing </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > keyboard </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > link </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > local_taxi </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > mic_none </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > palette </FontIcon>
              </IconButton>
            </Badge>


            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > person_add </FontIcon>
              </IconButton>
            </Badge>

            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{
                top: 22,
                right: 22,
              }}
            >
              <IconButton tooltip="Notifications">
                <FontIcon className="material-icons" > radio </FontIcon>
              </IconButton>
            </Badge>
          </div>

        </PaperBase>
      </Paper>

    </Col>

  </Row>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper style={styles.paper}>
        <PaperBase title="Further examples">
          <p style={styles.paragraph}>
          Badges containing an Icon Button and text, applied to an icon, and text.
          </p>
          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > cloud_upload </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > folder </FontIcon>
          </Badge>
          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > refresh </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > build </FontIcon>
          </Badge>


          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" color={green600}> done_all </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > extension </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" color={pink500}> favorite </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > face </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > plus_one </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > shopping_basket </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > add </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > mail </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > content_cut </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > gesture </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > reply </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > send </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > report </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > weekend </FontIcon>
          </Badge>

          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > network_wifi </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > devices </FontIcon>
          </Badge>
          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" color={pink500}> battery_alert </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > wallpaper </FontIcon>
          </Badge>
          <Badge
            badgeStyle={{
              top: 8,
              right: 8,
            }}
            badgeContent={<IconButton tooltip="Backup" >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <FontIcon className="material-icons" > usb </FontIcon> </IconButton>}
          >
            <FontIcon className="material-icons" > wifi_tethering </FontIcon>
          </Badge>
        </PaperBase>
      </Paper>

    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper style={styles.paper}>
        <PaperBase title="Further examples">
          <p style={styles.paragraph}>
          Badges containing an Icon Button and text, applied to an icon, and text.
          </p>
          <Badge
            badgeContent="&copy;"
            badgeStyle={{fontSize: 26,
              top: 8,
              right: 8}}
          >
      Mare Admin
    </Badge>
          <Badge
            badgeContent="&copy;"
            badgeStyle={{fontSize: 26,
              top: 8,
              right: 8}}
          >
      Berr Admin
    </Badge>
          <Badge
            badgeContent="&copy;"
            badgeStyle={{fontSize: 26,
              top: 8,
              right: 8}}
          >
      Stagb Admin
    </Badge>

        </PaperBase>
      </Paper>

    </Col>
  </Row>
</div>;

export default BadgePage;
