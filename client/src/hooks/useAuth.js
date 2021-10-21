import { useContext, useEffect, useMemo } from 'react'
import { SocketContext } from '../context/SocketContext'

export const useAuth = () => {
  const { state, dispatch } = useContext(SocketContext)

  // should rework to server "auth"
  useEffect(() => {
    if (state.user) {
      state.socket.emit('user', { user: state.user })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.user])

  const isAuthenticated = useMemo(
    () => (state.user ? true : false),
    [state.user]
  )

  const setUser = username => {
    dispatch({ type: 'SET_USER', payload: { username } })
  }

  return { setUser, isAuthenticated }
}
