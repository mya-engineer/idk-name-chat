import ChatBody from './ChatComponents/ChatBody'
import MessageInput from './ChatComponents/MessageInput'
import ChatHeader from './ChatComponents/ChatHeader'
import UsersDrawer from './UsersDrawer'
import { useChatHeader } from '../hooks/useChatHeader'
import { PanelGroup } from 'rsuite'

const Chat = () => {
  const { handleClick, components } = useChatHeader()

  return (
    <>
      <UsersDrawer open={components.users} handleClick={handleClick} />
      <PanelGroup style={panelGroupStyles}>
        <ChatHeader handleClick={handleClick} />
        <ChatBody />
        <MessageInput />
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
