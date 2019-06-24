import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import UsersFields from './../../components/UserFields';
import UserData from './../../components/UserData';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    setHeight: {
        minHeight: "800px"
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
const getUsersPage = (page, users) => {
    return page>0? [...users].slice((page-1)*10, page*10): [];
}
const UsersTable = ({ classes, users=[], page }) => {
    const pageRes = getUsersPage(users, page)
    return (
        <Table className={classes.setHeight}>
            <UsersFields fields={fields} />
            <TableBody>
                {pageRes.map(user =>(
                    <UserData user={user} fields={fields} />
                ))}
            </TableBody>
        </Table>
    );
};

UsersTable.propTypes = {
    classes: PropTypes.object,
    users: PropTypes.array,
    page: PropTypes.number
};

export default withStyles(styles)(UsersTable);
