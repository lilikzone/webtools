import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

const PageBase = (props) => {
  const {title} = props;

  return (
    <div>

      <Paper style={globalStyles.paper_default}>
        <h3 style={globalStyles.title_default}>{title}</h3>

        <Divider /> {props.children}

        <div style={globalStyles.clear} />

      </Paper>
    </div>
  );
};

PageBase.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default PageBase;
