import axios from 'axiox'
import { headers } from 'next/headers';

const BaseUrl='https://test.esimwhitelabel.com/api';

const axiosInterfernce = axios.create({
BaseUrl:BaseUrl,
headers:{
    'Content-Type':'application/json',
    'User-Agent':'insomnia/9.2.0'
}
})

export default axiosInterfernce