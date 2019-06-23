import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
});
const UsersFields = ({ classes, fields }) => {
    return (
            <TableHead>
                {fields.map((field, index)=> (<TableCell key={index}>
                    {field.label}
                </TableCell>))}
            </TableHead>
    );
};

UsersFields.propTypes = {
    classes: PropTypes.object,
    fields: PropTypes.array
};

export default withStyles(styles)(UsersFields);
