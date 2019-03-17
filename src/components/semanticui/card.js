import React from 'react';
import './semantic_card.scss';
import {blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 5,
  verticalAlign: 'top',
};

const SemanticCard = React.createClass({
  render() {
    return (
      <div className="ui card fluid">
        <div className="image">
          <img src={this.props.image} />
        </div>
        <div className="content">
          <a className="header">{this.props.name}</a>
          <div className="meta">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="description">
            {this.props.description}
          </div>
        </div>
        <div className="extra content">
          <a>
            <FontIcon className="material-icons" style={iconStyles} color={blue500}>fingerprint</FontIcon>
            {this.props.friendcount} Friends
            </a>
        </div>
      </div>
    );
  },
});

export default SemanticCard;
