// axios to make http request to api
import axios from 'axios'

// New axios instance to Authorization with unsplash
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        // Unsplash Access Key
        Authorization: 'Client-ID 819c8546ef55793abf0167687635782a167b079a73d258c8a8a3aa4d6238aa48'
    }
})