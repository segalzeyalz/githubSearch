import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import UsersFields from './../../components/UserFields';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
});
const fields = [{
    label: "UserName",
    field: "login"
}, {
    label: "avatar image",
    field: "avatar_url"
},{
    label: "score",
    field: "score"
}]
const UsersTable = ({ classes, users=[] }) => {
    return (
        <Table>
            <UsersFields fields={fields} />
            <TableBody>
                {users.map(user =>(
                <TableRow>
                    <TableCell>
                        {user.login}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

UsersTable.propTypes = {
    classes: PropTypes.object,
    users: PropTypes.array
};

export default withStyles(styles)(UsersTable);
