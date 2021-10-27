import Axios from 'axios'
import https from 'https'

export const api = Axios.create({
  baseURL: 'http://52.67.182.189:3000',
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
})