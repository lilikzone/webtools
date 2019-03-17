import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const ListExampleChat = () => (
  <MobileTearSheet>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="./assets/images/people/17.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="./assets/images/people/16.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar src="./assets/images/people/16.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar src="./assets/images/people/15.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar src="./assets/images/people/19.jpg" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Previous chats</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="./assets/images/people/20.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="./assets/images/people/15.jpg" />}
      />
    </List>
  </MobileTearSheet>
);

const ListExampleFolder = () => (
  <MobileTearSheet>
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
  </MobileTearSheet>
);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: './assets/images/grid-list/10.jpg',
    title: 'Breakfast',
    author: 'jill111',
  }, {
    img: './assets/images/grid-list/11.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  }, {
    img: './assets/images/grid-list/12.jpg',
    title: 'Camera',
    author: 'Danson67',
  }, {
    img: './assets/images/grid-list/13.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  }, {
    img: './assets/images/grid-list/14.jpg',
    title: 'Hats',
    author: 'Hans',
  }, {
    img: './assets/images/grid-list/15.jpg',
    title: 'Honey',
    author: 'fancycravel',
  }, {
    img: './assets/images/grid-list/16.jpg',
    title: 'Vegetables',
    author: 'jill111',
  }, {
    img: './assets/images/grid-list/17.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList cellHeight={180} style={styles.gridList}>
      <Subheader>December</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span> by <b> {
          tile.author
        } </b></span>}
          actionIcon={<IconButton> <StarBorder color="white" /> </IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

const SubPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Subheader</h3>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Simple Usage with List">
          <Subheader /><br />Subheader used in a simple List.<br /><br />
          <ListExampleChat />

        </PaperBase>
      </Paper>
    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Inset Example">
          <Subheader /><br />Inset Subheader used in a List.<br /><br />
          <ListExampleFolder />

        </PaperBase>
      </Paper>
    </Col>
    <Col xs={12} md={12} lg={12}>

      <Paper >
        <PaperBase title="Simple Usage with GridList">
          <Subheader /><br />Subheader used in a GridList.<br /><br />
          <GridListExampleSimple />

        </PaperBase>
      </Paper>
    </Col>
  </Row>
</div>;

export default SubPage;
