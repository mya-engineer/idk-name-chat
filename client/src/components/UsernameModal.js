import { useRef } from 'react'
import { Modal, Button, Input, InputGroup, toaster, Message } from 'rsuite'
import { GiBandit } from 'react-icons/gi'

const UsernameModal = ({ open, setUser }) => {
  const inputRef = useRef('')

  const handleUsername = event => {
    event.preventDefault()
    if (inputRef.current.value) {
      setUser(inputRef.current.value)
    } else {
      toaster.push(
        <Message
          type='error'
          header='Error!'
          children='You should choose your name!'
          closable
          showIcon
        />,
        {
          placement: 'topEnd',
        }
      )
    }
  }

  return (
    <Modal size='md' open={open}>
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
