import axios from 'axios'

export default axios.create({
    baseURL:'http://172.24.48.1:8080',
    headers:{"ngrok-skip-browser-warning": "true",
                'Access-Control-Allow-Origin':'http://172.24.48.1:3000'}
    
})