import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Fab from '@material-ui/core/Fab';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: theme.spacing(2),
        width: '75%'
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%'
    },
    fab: {
        margin: theme.spacing(1),
    }
});
const GithubSearcher = ({
                            classes,
                            handleSearch= ()=>{}
                        }) => {
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        const searchInput= e.target.value;
        setInput(searchInput)};
    const handleClick = ()=> handleSearch(input);
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Github Users Search
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'Search' }}
                    />
                </div>
                <Fab color="secondary" aria-label="Search" className={classes.fab} onClick={handleClick}>
                    <SearchIcon />
                </Fab>
            </Toolbar>
        </AppBar>
    );
};

GithubSearcher.propTypes = {
    classes: PropTypes.object,
    handleSearch: PropTypes.func
};

export default withStyles(styles)(GithubSearcher);
