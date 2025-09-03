import axios from 'axios'

const BaseUrl='https://platform.defymobile.com/api';

const axiosInterfernce = axios.create({
baseURL:BaseUrl,
headers:{
    'Content-Type':'application/json',
    'User-Agent':'insomnia/9.2.0'
}
})

export default axiosInterfernce