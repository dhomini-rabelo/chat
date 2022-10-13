import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const SOCKETS_URL = 'ws://localhost:8000'
