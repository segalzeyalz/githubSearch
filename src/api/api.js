import {GITHUB_USERS_SEARCH} from './constants';
import axios from 'axios';
const fetchUsers = (input)=> axios.get(`${GITHUB_USERS_SEARCH}${input}`)
export default fetchUsers;