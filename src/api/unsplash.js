import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID QrqP3ddOejlGIHjbfppba0zq-L0Ks6ikgAfNJZTm9uw'
    }
})