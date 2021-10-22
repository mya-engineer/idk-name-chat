import ChatBody from './ChatComponents/ChatBody'
import MessageInput from './ChatComponents/MessageInput'
import ChatHeader from './ChatComponents/ChatHeader'
import UsersDrawer from './UsersDrawer'
import { useChatHeader } from '../hooks/useChatHeader'
import { PanelGroup } from 'rsuite'
import { SocketContext } from '../context/SocketContext'
import { useContext } from 'react'

const Chat = () => {
  const { state, sendMessage } = useContext(SocketContext)
  const { handleClick, components } = useChatHeader()

  return (
    <>
      <UsersDrawer
        open={components.users}
        handleClick={handleClick}
        state={state}
      />
      <PanelGroup style={panelGroupStyles}>
        <ChatHeader handleClick={handleClick} />
        <ChatBody state={state} />
        <MessageInput state={state} sendMessage={sendMessage} />
      </PanelGroup>
    </>
  )
}

const panelGroupStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

export default Chat
