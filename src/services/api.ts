import Axios from 'axios'
import https from 'https'

export const api = Axios.create({
  baseURL: 'http://localhost:3000',
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})