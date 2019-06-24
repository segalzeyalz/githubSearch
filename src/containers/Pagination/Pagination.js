import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    pagesContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignContent: "stretch"
    }
});

const Pagination = ({classes, setPage }) => {
    const pagesNumber = [1,2,3];
    return (
            <div className={classes.pagesContainer}>
                {pagesNumber.map((elem, index)=>(
                    <Button onClick={setPage} key={index} className={classes.button}>
                        <Typography key={index}>{elem}</Typography>
                    </Button>)
                 )}
            </div>
    );
};

Pagination.propTypes = {
    classes: PropTypes.object,
    setPage: PropTypes.func
};

export default withStyles(styles)(Pagination);