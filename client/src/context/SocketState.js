import { useReducer, useEffect } from 'react'
import { SocketContext } from './SocketContext'
import { SocketReducer } from './SocketReducer'
import { io } from 'socket.io-client'

export const SocketState = ({ children }) => {
  const [state, dispatch] = useReducer(SocketReducer, {
    socket: undefined,
    chat: [],
    user: undefined,
  })

  useEffect(() => {
    const clientSocket = io('http://localhost:8888')

    clientSocket.on('message', obj => {
      dispatch({ type: 'ADD_MESSAGE', payload: { ...obj } })
    })

    dispatch({ type: 'CONNECT_SOCKET', payload: { socket: clientSocket } })
    return () => {
      clientSocket.disconnect()
    }
  }, [])

  // should rework to server "auth"
  useEffect(() => {
    if (state.user) {
      state.socket.emit('user', { user: state.user })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.user])

  const sendMessage = (type, msg) => {
    state.socket.emit(type, { message: msg, user: state.user })
  }

  const setUser = username => {
    dispatch({ type: 'SET_USER', payload: { username } })
  }

  return (
    <SocketContext.Provider value={{ state, sendMessage, setUser }}>
      {children}
    </SocketContext.Provider>
  )
}
