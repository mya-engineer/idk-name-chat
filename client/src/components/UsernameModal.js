import { useContext, useRef, useState } from 'react'
import { SocketContext } from '../context/SocketContext'
import { Modal, Button, Input, InputGroup } from 'rsuite'
import { GiBandit } from 'react-icons/gi'

const UsernameModal = () => {
  const [modal, setModal] = useState(true)
  const { setUser } = useContext(SocketContext)
  const inputRef = useRef('')

  const handleUsername = event => {
    event.preventDefault()
    if (inputRef.current.value) {
      setUser(inputRef.current.value)
      setModal(false)
    }
  }

  return (
    <Modal size='md' open={modal}>
      <Modal.Header closeButton={false}>
        <Modal.Title>What is your name?</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleUsername}>
        <Modal.Body style={{ overflow: 'none' }}>
          <InputGroup size='lg'>
            <InputGroup.Addon>
              <GiBandit color='black' size={'1.5em'} />
            </InputGroup.Addon>
            <Input ref={inputRef} placeholder='Your name is...' />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance='primary' type='submit'>
            That's me!
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default UsernameModal
