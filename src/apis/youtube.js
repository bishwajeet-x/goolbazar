import axios from 'axios';

const KEY = 'AIzaSyB-8z_K04zHCxQmfKLuizo17Fsv5WTbYTw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})