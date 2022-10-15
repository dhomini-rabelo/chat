import { ReadyState } from 'react-use-websocket'
import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const SOCKETS_URL = 'ws://localhost:8000'

export const socketsConnectionStatus = {
  [ReadyState.CONNECTING]: 'Connecting',
  [ReadyState.OPEN]: 'Open',
  [ReadyState.CLOSING]: 'Closing',
  [ReadyState.CLOSED]: 'Closed',
  [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
}
