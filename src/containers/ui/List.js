import React, {Component, PropTypes} from 'react';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {grey500, fullWhite} from 'material-ui/styles/colors';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import {indigo500, grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Grid, Row, Col} from 'react-flexbox-grid';

const styles = {
  paper: {
    height: 500,
    overflow: 'hidden',
  },
};
const iconButtonElement = (
  <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({selectedIndex: this.props.defaultValue});
    }

    handleRequestChange(event, index) {
      this.setState({selectedIndex: index});
    }

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
    };
}

SelectableList = wrapState(SelectableList);

const ListPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>User Interfaces / Lists</h3>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
              <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
              <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
              <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
              <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            </List>
            <Divider />
            <List>
              <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
              <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
            </List>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <Subheader>Recent chats</Subheader>
              <ListItem
                primaryText="Bernice Lee"
                leftAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Terrance Fletcher"
                leftAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Marie Freeman"
                leftAvatar={<Avatar src="./assets/images/avatar/3.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Nicole Price"
                leftAvatar={<Avatar src="./assets/images/avatar/4.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Roberta Harvey"
                leftAvatar={<Avatar src="./assets/images/avatar/5.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
            </List>
            <Divider />
            <List>
              <Subheader>Previous chats</Subheader>
              <ListItem
                primaryText="Jennifer Hansen"
                leftAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
              />
              <ListItem
                primaryText="Sherry Barnett"
                leftAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
              />
            </List>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <ListItem
                primaryText="Jennifer Hansen"
                leftIcon={<ActionGrade color={pinkA200} />}
                rightAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
              />
              <ListItem
                primaryText="Terrance Fletcher"
                insetChildren={true}
                rightAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
              />
              <ListItem
                primaryText="Sherry Barnett"
                insetChildren={true}
                rightAvatar={<Avatar src="./assets/images/avatar/3.jpg" />}
              />
              <ListItem
                primaryText="Nicole Price"
                insetChildren={true}
                rightAvatar={<Avatar src="./assets/images/avatar/4.jpg" />}
              />
            </List>
            <Divider inset={true} />
            <List>
              <ListItem
                primaryText="Adelle Charles"
                leftAvatar={<Avatar
                  color={pinkA200}
                  backgroundColor={transparent}
                  style={{left: 8}}
                            > A </Avatar>}
                rightAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
              />
              <ListItem
                primaryText="Adham Dannaway"
                insetChildren={true}
                rightAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
              />
              <ListItem
                primaryText="Allison Grayce"
                insetChildren={true}
                rightAvatar={<Avatar src="./assets/images/avatar/3.jpg" />}
              />
              <ListItem
                primaryText="Angel Ceballos"
                insetChildren={true}
                rightAvatar={<Avatar src="./assets/images/avatar/4.jpg" />}
              />
            </List>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <Subheader inset={true}>Folders</Subheader>
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="Photos"
                secondaryText="Jan 9, 2014"
              />
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="Recipes"
                secondaryText="Jan 17, 2014"
              />
              <ListItem
                leftAvatar={<Avatar icon={<FileFolder />} />}
                rightIcon={<ActionInfo />}
                primaryText="Work"
                secondaryText="Jan 28, 2014"
              />
            </List>
            <Divider inset={true} />
            <List>
              <Subheader inset={true}>Files</Subheader>
              <ListItem
                leftAvatar={<Avatar
                  icon={<ActionAssignment />}
                  backgroundColor={blue500}
                            />}
                rightIcon={<ActionInfo />}
                primaryText="Vacation itinerary"
                secondaryText="Jan 20, 2014"
              />
              <ListItem
                leftAvatar={<Avatar
                  icon={<EditorInsertChart />}
                  backgroundColor={yellow600}
                            />}
                rightIcon={<ActionInfo />}
                primaryText="Kitchen remodel"
                secondaryText="Jan 10, 2014"
              />
            </List>
          </Paper>
        </Col>
      </Row>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <Subheader>General</Subheader>
              <ListItem
                primaryText="Profile photo"
                secondaryText="Change your Google+ profile photo"
              />
              <ListItem
                primaryText="Show your status"
                secondaryText="Your status is visible to everyone you use with"
              />
            </List>
            <Divider />
            <List>
              <Subheader>Hangout Notifications</Subheader>
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Notifications"
                secondaryText="Allow notifications"
              />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Sounds"
                secondaryText="Hangouts message"
              />
              <ListItem
                leftCheckbox={<Checkbox />}
                primaryText="Video sounds"
                secondaryText="Hangouts video call"
              />
            </List>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <ListItem
                primaryText="When calls and notifications arrive"
                secondaryText="Always interrupt"
              />
            </List>
            <Divider />
            <List>
              <Subheader>Priority Interruptions</Subheader>
              <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
              <ListItem primaryText="Calls" rightToggle={<Toggle />} />
              <ListItem primaryText="Messages" rightToggle={<Toggle />} />
            </List>
            <Divider />
            <List>
              <Subheader>Hangout Notifications</Subheader>
              <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
            </List>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <ListItem
                leftIcon={<CommunicationCall color={indigo500} />}
                rightIcon={<CommunicationChatBubble />}
                primaryText="(650) 555 - 1234"
                secondaryText="Mobile"
              />
              <ListItem
                insetChildren={true}
                rightIcon={<CommunicationChatBubble />}
                primaryText="(323) 555 - 6789"
                secondaryText="Work"
              />
            </List>
            <Divider inset={true} />
            <List>
              <ListItem
                leftIcon={<CommunicationEmail color={indigo500} />}
                primaryText="aliconnors@example.com"
                secondaryText="Personal"
              />
              <ListItem
                insetChildren={true}
                primaryText="ali_connors@example.com"
                secondaryText="Work"
              />
            </List>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper style={styles.paper}>
            <List>
              <ListItem
                leftIcon={<CommunicationCall color={indigo500} />}
                rightIcon={<CommunicationChatBubble />}
                primaryText="(650) 555 - 1234"
                secondaryText="Mobile"
              />
              <ListItem
                insetChildren={true}
                rightIcon={<CommunicationChatBubble />}
                primaryText="(323) 555 - 6789"
                secondaryText="Work"
              />
            </List>
            <Divider inset={true} />
            <List>
              <ListItem
                leftIcon={<CommunicationEmail color={indigo500} />}
                primaryText="denise.jack10@exam.com"
                secondaryText="Personal"
              />
              <ListItem
                insetChildren={true}
                primaryText="ali_connors@example.com"
                secondaryText="Work"
              />
            </List>
          </Paper>
        </Col>

      </Row>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <Paper style={styles.paper}>
            <List>
              <Subheader>Today</Subheader>
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
                primaryText="Brunch this weekend?"
                secondaryText={<p> <span
                  style={{
                    color: darkBlack,
                  }}
                                   >Bernice Lee</span>--I & apos;
                            ll be in your neighborhood doing errands this weekend.Do you want to grab brunch
                                ? </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
                primaryText={<p> Summer BBQ & nbsp;
                            &nbsp;
                            <span style={{color: lightBlack}} > 4 </span></p>}
                secondaryText={<p> <span
                  style={{
                    color: darkBlack,
                  }}
                                   >to me, Scott, Jennifer</span>--Wish I could come,
                            but I & apos;
                            m out of town this weekend. </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/3.jpg" />}
                primaryText="Oui oui"
                secondaryText={<p> <span
                  style={{
                    color: darkBlack,
                  }}
                                   >Marie Freeman</span>--Do you have Paris recommendations
                                ? Have you ever been
                                    ? </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/4.jpg" />}
                primaryText="Birdthday gift"
                secondaryText={<p> <span
                  style={{
                    color: darkBlack,
                  }}
                                   >Nicole Price</span>--Do you have any ideas what we can get Heidi for her birthday
                                ? How about a pony
                                    ? </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/5.jpg" />}
                primaryText="Recipe to try"
                secondaryText={<p > <span
                  style={{
                    color: darkBlack,
                  }}
                                    >Roberta Harvey</span>--We should eat this : grated squash.Corn and tomatillo tacos. </p>}
                secondaryTextLines={2}
              />
            </List>
          </Paper>

        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper style={styles.paper}>
            <List>
              <Subheader>Today</Subheader>
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
                rightIconButton={rightIconMenu}
                primaryText="Bernice Lee"
                secondaryText={<p > <span
                  style={{
                    color: darkBlack,
                  }}
                                    >Brunch this weekend?</span> <br /> I & apos;
                            ll be in your neighborhood doing errands this weekend.Do you want to grab brunch
                                ? </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
                rightIconButton={rightIconMenu}
                primaryText="me, Scott, Jennifer"
                secondaryText={<p > <span
                  style={{
                    color: darkBlack,
                  }}
                                    >Summer BBQ</span> <br /> Wish I could come,
                            but I & apos;
                            m out of town this weekend. </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/3.jpg" />}
                rightIconButton={rightIconMenu}
                primaryText="Marie Freeman"
                secondaryText={<p > <span
                  style={{
                    color: darkBlack,
                  }}
                                    >Oui oui</span> <br /> Do you have any Paris recs
                                ? Have you ever been
                                    ? </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/4.jpg" />}
                rightIconButton={rightIconMenu}
                primaryText="Nicole Price"
                secondaryText={<p > <span
                  style={{
                    color: darkBlack,
                  }}
                                    >Birthday gift</span> <br /> Do you have any ideas what we can get Heidi for her birthday
                                ? How about a pony
                                    ? </p>}
                secondaryTextLines={2}
              />
              <Divider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="./assets/images/avatar/5.jpg" />}
                rightIconButton={rightIconMenu}
                primaryText="Roberta Harvey"
                secondaryText={<p > <span
                  style={{
                    color: darkBlack,
                  }}
                                    >Recipe to try</span> <br /> We should eat this : grated squash.Corn and tomatillo tacos. </p>}
                secondaryTextLines={2}
              />
            </List>
          </Paper>

        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper style={styles.paper}>
            <SelectableList defaultValue={3}>
              <Subheader>Selectable Contacts</Subheader>
              <ListItem
                value={1}
                primaryText="Bernice Lee"
                leftAvatar={<Avatar src="./assets/images/avatar/1.jpg" />}
                nestedItems={[<ListItem
                  value={2}
                  primaryText="Marie Freeman" leftAvatar={<Avatar src="./assets/images/avatar/2.jpg" />}
                              />]}
              />
              <ListItem
                value={3}
                primaryText="Nicole Price"
                leftAvatar={<Avatar src="./assets/images/avatar/3.jpg" />}
              />
              <ListItem
                value={4}
                primaryText="Terrance Fletcher"
                leftAvatar={<Avatar src="./assets/images/avatar/4.jpg" />}
              />
              <ListItem
                value={5}
                primaryText="Roberta Harvey"
                leftAvatar={<Avatar src="./assets/images/avatar/5.jpg" />}
              />
              <ListItem
                value={5}
                primaryText="Greg Snyder"
                leftAvatar={<Avatar src="./assets/images/avatar/6.jpg" />}
              />
              <ListItem
                value={5}
                primaryText="Isabella Murray"
                leftAvatar={<Avatar src="./assets/images/avatar/7.jpg" />}
              />
              <ListItem
                value={5}
                primaryText="Denise Jackson"
                leftAvatar={<Avatar src="./assets/images/avatar/8.jpg" />}
              />

            </SelectableList>
          </Paper>

        </Col>
      </Row>
    </div>
  );
};

export default ListPage;
