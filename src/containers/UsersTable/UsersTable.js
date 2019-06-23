import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import UsersFields from './../../components/UserFields';
import UserData from './../../components/UserData';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
});
const fields = [{
    label: "UserName",
    field: "login",
    type: "text"
}, {
    label: "avatar image",
    field: "avatar_url",
    type: "image"
},{
    label: "score",
    field: "score",
    type: "number"
}]
const UsersTable = ({ classes, users=[] }) => {
    return (
        <Table>
            <UsersFields fields={fields} />
            <TableBody>
                {users.map(user =>(
                    <UserData user={user} fields={fields} />
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
