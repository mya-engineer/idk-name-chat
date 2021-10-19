import { Container, Panel, PanelGroup, Input, InputGroup, Button } from 'rsuite'
import { useEffect } from 'react'
import { IoIosSend } from 'react-icons/io'
import UsernameModal from './components/UsernameModal'
import Chat from './components/Chat'
import { useContext, useRef } from 'react'
import { SocketContext } from './context/SocketContext'

function App() {
  const { sendMessage } = useContext(SocketContext)

  const inputRef = useRef('')
  const handleMessage = event => {
    event.preventDefault()
    sendMessage('message', inputRef.current.value)
    inputRef.current.value = ''
  }

  useEffect(() => {
    // set padding for beatiful layout for the first time
    document.getElementById('send-input').style.paddingRight = `${
      document.getElementById('send-button').offsetWidth + 4
    }px`
  }, [])

  return (
    <Container style={containerStyles}>
      <UsernameModal />
      <Container style={containerChatStyles} className='rs-panel-shaded'>
        <PanelGroup style={panelGroupStyles}>
          <Chat />
          <Panel>
            <form onSubmit={handleMessage}>
              <InputGroup size='lg' inside>
                <Input ref={inputRef} id='send-input' />
                <InputGroup.Button id='send-button' type='submit'>
                  <IoIosSend size={'22px'} color='DodgerBlue' />
                </InputGroup.Button>
              </InputGroup>
            </form>
          </Panel>
        </PanelGroup>
      </Container>
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
