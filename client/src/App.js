import { Container, PanelGroup } from 'rsuite'
import { useEffect } from 'react'
import UsernameModal from './components/UsernameModal'
import Chat from './components/Chat'
import MessageInput from './components/MessageInput'

function App() {
  useEffect(() => {
    // set padding for beatiful layout for the first time
    document.getElementById('send-input').style.paddingRight = `${
      document.getElementById('send-button').offsetWidth + 4
    }px`
  }, [])

  return (
    <Container style={containerStyles}>
      <Container style={containerChatStyles} className='rs-panel-shaded'>
        <PanelGroup style={panelGroupStyles}>
          <Chat />
          <MessageInput />
        </PanelGroup>
      </Container>
      <UsernameModal />
    </Container>
  )
}

const containerStyles = {
  width: '80vw',
  height: '100vh',
  margin: 'auto',
  flex: 'none',
}

const containerChatStyles = {
  border: '1px solid var(--rs-border-primary)',
  borderRadius: '6px',
  padding: '.5rem',
  margin: 'auto 0',
  height: '80vh',
  flex: 'none',
}

const panelGroupStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

export default App
