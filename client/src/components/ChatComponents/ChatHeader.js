import { BsPeopleFill } from 'react-icons/bs'
import { ButtonToolbar, IconButton } from 'rsuite'

const ChatHeader = ({ handleClick }) => {
  return (
    <div>
      <div
        className='rs-panel-body'
        style={{
          borderBottom: '1px solid var(--rs-border-primary)',
          margin: '0 1rem',
          padding: '.5rem 0',
        }}>
        <ButtonToolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            icon={<BsPeopleFill size='1.5em' />}
            size='lg'
            onClick={() => handleClick('users')}
          />
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default ChatHeader
