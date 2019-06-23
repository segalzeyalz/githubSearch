import React from 'react';
import Typography from '@material-ui/core/Typography';
import {TEXT_TYPE, IMAGE_TYPE} from './types';

const ComponentByType = (type, value) => {
    if(type===TEXT_TYPE){
        return (<Typography>{value}</Typography>)
    } else if(type===IMAGE_TYPE){
        return <img alt="user avatar" src={value} />
    } else{
        return (<Typography>{value}</Typography>)
    }
};

export default ComponentByType;