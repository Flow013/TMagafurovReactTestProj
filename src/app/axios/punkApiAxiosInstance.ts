import axios from 'axios'
import { configs } from '../configs'

export const punkApiAxiosInstance = axios.create({
  baseURL: configs.punkApiRootEndpoint
})
