import {GITHUB_USERS_SEARCH} from './constants';
import axios from 'axios';

const fetchUsers = (input) => {
    return axios.get(`${GITHUB_USERS_SEARCH}${input}`)
}