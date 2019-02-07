import React from 'react';
import './semantic_card.scss';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {yellow500, blue500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  marginRight: 5,
  verticalAlign: 'bottom',
  marginLeft: 5,

};
const basketbutton = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  marginRight: 10,
  marginBottom: '-20px',

};
const favbutton = {
  position: 'absolute',
  top: 0,
  left: 0,
  marginLeft: 10,
  marginTop: '20px',

};
const SemanticCard = React.createClass({
  render() {
    return (

      <div className="ui link card four stackable fluid">
        <div className="image">
          <FloatingActionButton style={favbutton} mini={true}>
            <FontIcon className="material-icons" style={iconStyles} color={yellow500}>star</FontIcon>
          </FloatingActionButton>
          <img src={this.props.image} />
          <FloatingActionButton style={basketbutton}>
            <FontIcon className="material-icons" style={iconStyles} color={blue500}>add_shopping_cart</FontIcon>
          </FloatingActionButton>
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
            <FontIcon className="material-icons" style={iconStyles} color={yellow500}>star</FontIcon>
            {this.props.favcount} Favorite
            </a>
        </div>
      </div>
    );
  },
});

export default SemanticCard;
