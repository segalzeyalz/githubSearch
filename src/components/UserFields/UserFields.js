import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

const UsersFields = ({ fields }) => {
    return (
            <TableHead>
                {fields.map((field, index)=> (<TableCell key={index}>
                    {field.label}
                </TableCell>))}
            </TableHead>
    );
};

UsersFields.propTypes = {
    fields: PropTypes.array
};

export default UsersFields;
 