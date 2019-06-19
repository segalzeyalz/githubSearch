import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from './../Search/';
import Paper from '@material-ui/core/Paper';
import fetchUsers from '../../api';
import { withStyles } from '@material-ui/core/styles';
import UsersTable from './../UsersTable';


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
    const [users, getUsers] = useState([]);

  const handleSearch = (searchInput) => {
      setInput(searchInput)
  };

    const fetchCurrSearch = async () => {
        if(input){
            const UsersBySearch = await fetchUsers(input);
            console.log('UsersBySearch', UsersBySearch)
            getUsers(UsersBySearch.data.items);
            return UsersBySearch ? false : true;
        }
        return true;
    };
    useEffect(() => {
        fetchCurrSearch();
    });
  return (
          <Paper className={classes.root}>
              <Search handleSearch={handleSearch}/>
              <UsersTable users={users} />
          </Paper>
  );
};

GithubSearcher.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(GithubSearcher);
