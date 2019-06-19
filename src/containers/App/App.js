import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
root: {
    width: '100%',
    height: '100%'
},
  white: {
    color: theme.palette.common.white
  }
});
const GithubSearcher = ({
                      classes
                    }) => {
  const [input, setInput] = useState('');

  const handleSearch = (searchInput) => {
      setInput(searchInput)
  };

  return (
          <Paper className={classes.root}>
              <Typography variant="h5" component="h3">
                  This is a sheet of paper.
              </Typography>
              <Typography component="p">
                  Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>
  );
};

GithubSearcher.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(GithubSearcher);
