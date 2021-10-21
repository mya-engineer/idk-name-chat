import { Container, Loader } from 'rsuite'
import { useEffect, useContext } from 'react'
import { useAuth } from './hooks/useAuth'
import { SocketContext } from './context/SocketContext'
import UsernameModal from './components/UsernameModal'
import Chat from './components/Chat'

function App() {
  const { setUser, isAuthenticated } = useAuth()
  const { state } = useContext(SocketContext)

  useEffect(() => {
    // set padding for beatiful layout for the first time
    document.getElementById('send-input').style.paddingRight = `${
      document.getElementById('send-button').offsetWidth + 4
    }px`
  }, [])

  return state.loading ? (
    <Loader center size='lg' speed='fast' />
  ) : (
    <Container style={containerStyles}>
      <Container style={containerChatStyles} className='rs-panel-shaded'>
        <Chat />
      </Container>
      <UsernameModal open={!isAuthenticated} setUser={setUser} />
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
  height: '90vh',
  flex: 'none',
}

export default App
