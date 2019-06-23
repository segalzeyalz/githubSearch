import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UserData = ({ user, fields=[] }) => {
    return (
            <TableRow>
                {fields.map((field, index)=>(
                <TableCell key={index}>
                    {user[field.field]}
                </TableCell>
            ))}
            </TableRow>
    );
};

UserData.propTypes = {
    user: PropTypes.object,
    fields: PropTypes.array
};

export default UserData;
