import React from 'react';
import './messages.scss';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

const Message = React.createClass({

  render() {
    return (
      <Paper
        className={`ui ${this.props.type} message ${this.props.color}`}
        zDepth={this.props.zdepth}
      >
        <IconButton className="close icon">
          <FontIcon className="material-icons closeIcon">
            close
          </FontIcon>
        </IconButton>
        {this.props.icon && <FontIcon className="material-icons icon">
          {this.props.icon}
        </FontIcon>
}

        <div className="content">
          <h1 className="header">{this.props.header}</h1>
          <p>{this.props.message}</p>
        </div>
      </Paper>
    );
  },
});

export default Message;
