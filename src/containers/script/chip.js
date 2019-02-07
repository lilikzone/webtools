import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900, red500, green600, yellow600} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export class ChipExampleSimple extends React.Component {

  render() {
    return (
      <div style={styles.wrapper}>

        <Chip style={styles.chip}>
          Text Chip
        </Chip>

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          Deletable Text Chip
        </Chip>

        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar src="./assets/images/avatar/1.jpg" />
          Image Avatar Chip
        </Chip>

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar src="./assets/images/avatar/2.jpg" />
          Deletable Avatar Chip
        </Chip>

        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar
            icon={<FontIcon className="material-icons" > perm_identity </FontIcon>}
          />
          FontIcon Avatar Chip
        </Chip>

        <Chip
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar color="#444" icon={<SvgIconFace />} />
          SvgIcon Avatar Chip
        </Chip>

        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar size={32}>A</Avatar>
          Text Avatar Chip
        </Chip>

        <Chip
          backgroundColor={blue300}
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} color={blue300} backgroundColor={indigo900}>
            MB
          </Avatar>
          Colored Chip
        </Chip>
        <Chip
          backgroundColor={yellow600}
          onRequestDelete={handleRequestDelete}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={32} color={red500} backgroundColor={indigo900}>
            MB
          </Avatar>
          Colored Chip
        </Chip>
      </div>
    );
  }
}

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chipData: [
        {
          key: 0,
          label: 'Angular',
        }, {
          key: 1,
          label: 'JQuery',
        }, {
          key: 2,
          label: 'Polymer',
        }, {
          key: 3,
          label: 'ReactJS',
        }, {
          key: 4,
          label: 'Javascript',
        }, {
          key: 5,
          label: 'Css',
        }, {
          key: 6,
          label: 'Html',
        },
      ],
    };
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }

  handleRequestDelete = (key) => {
    if (key === 3) {
      alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this
      .chipData
      .map((chip) => chip.key)
      .indexOf(key);
    this
      .chipData
      .splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this
          .state
          .chipData
          .map(this.renderChip, this)}
      </div>
    );
  }
}

const ChipPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Chip</h3>
  <Row>
    <Col xs={12} md={12} lg={12}>

      <Paper >
        <PaperBase title="Simple example">
          <Subheader /><br />Examples of Chips, using an image Avatar, Font Icon
            Avatar, SVG Icon Avatar, "Letter" (string) Avatar, and with custom colors. Chips
            with the onRequestDelete property defined will display a delete icon.<br /><br />
          <ChipExampleSimple />

        </PaperBase>
      </Paper>
    </Col>
    <Col xs={12} md={12} lg={12}>

      <Paper >
        <PaperBase title="Array example">
          <Subheader /><br />An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no onTouchTap property is defined, the Chip can be focused, but does not gain depth while clicked or touched.<br /><br />
          <ChipExampleArray />

        </PaperBase>
      </Paper>
    </Col>
  </Row>
</div>;

export default ChipPage;
