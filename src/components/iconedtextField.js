import React from 'react';
import TextField from 'material-ui/TextField';

const IconTextField = function statelessFunctionComponentClass(props) {
  return (
    <div className="input-group">
      <span className="input-group-icon">
        <i className="material-icons">{props.icon}</i>
      </span>
      <div className="input-group-text">
        <TextField
          hintText={`${props.hint}`}
          floatingLabelText={`${props.label}`}
          className="form-control" fullWidth={true}
          name={`${props.name}`}
          floatingLabelStyle={props.floatingLabelStyle}
          style={props.style}
          type={`${props.type}`}
          value={props.value}
        />

      </div>
    </div>
  );
};

export default IconTextField;
