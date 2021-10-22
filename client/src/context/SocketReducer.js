import { randomizeAvatar } from '../avatars/avatars'

const handlers = {
  SHOW_LOADER: state => ({ ...state, loading: true }),
  CONNECT_SOCKET: (state, { payload }) => ({
    ...state,
    socket: payload.socket,
    loading: false,
  }),
  ADD_MESSAGE: (state, { payload }) => ({
    ...state,
    chat: [
      ...state.chat,
      { message: payload.message, id: +new Date(), user: payload.user },
    ],
  }),
  SET_USER: (state, { payload }) => ({
    ...state,
    user: {
      ...state.user,
      username: payload.username,
      avatar: randomizeAvatar(),
    },
  }),
  SET_USERS: (state, { payload }) => ({
    ...state,
    users: [...payload.users],
  }),
}

export const SocketReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
