import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
});
const UsersTable = ({ classes, users=[] }) => {
    console.log(users)
    return (
        <div>
            {users.map(user => <h1>{user.login}</h1>)}
        </div>
    );
};

UsersTable.propTypes = {
    classes: PropTypes.object,
    users: PropTypes.array
};

export default withStyles(styles)(UsersTable);
