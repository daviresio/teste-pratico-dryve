import axios from 'axios'
import {toLower} from "../util/transform_case_util";

const api = axios.create({
        baseURL: 'https://www.mocky.io/v2',
        transformResponse: (data => toLower(JSON.parse(data)))
    })


export default api