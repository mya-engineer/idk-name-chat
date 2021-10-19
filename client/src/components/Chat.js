import { Panel } from 'rsuite'
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import Message from './Message'

const Chat = () => {
  const { state } = useContext(SocketContext)
  console.log(state)
  return (
    <Panel>
      {state.chat.map(message => (
        <Message key={message.id} user={message.user} msg={message.message} />
      ))}
    </Panel>
  )
}

export default Chat
