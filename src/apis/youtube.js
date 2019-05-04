import axios from 'axios';

const KEY = 'AIzaSyAbv556CoZGixX0PPksjepUBenQBnI5i0M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});