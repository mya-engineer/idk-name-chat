import { useRef, useContext, useEffect } from 'react'
import { IoIosSend } from 'react-icons/io'
import { SocketContext } from '../../context/SocketContext'
import { Panel, InputGroup, Input } from 'rsuite'

const MessageInput = () => {
  const { state, sendMessage } = useContext(SocketContext)

  const inputRef = useRef('')
  const handleMessage = event => {
    event.preventDefault()
    if (inputRef.current.value) {
      sendMessage('message', inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  useEffect(() => {
    const handleKeydown = () => {
      if (state.user && inputRef.current !== document.activeElement) {
        inputRef.current.focus()
      }
    }

    document.body.addEventListener('keydown', handleKeydown)
    return () => {
      document.body.removeEventListener('keydown', handleKeydown)
    }
  }, [state.user])

  return (
    <Panel>
      <form onSubmit={handleMessage}>
        <InputGroup size='lg' inside style={{ height: '10%' }}>
          <Input ref={inputRef} id='send-input' autoComplete='off' />
          <InputGroup.Button id='send-button' type='submit'>
            <IoIosSend size={'22px'} color='DodgerBlue' />
          </InputGroup.Button>
        </InputGroup>
      </form>
    </Panel>
  )
}

export default MessageInput
