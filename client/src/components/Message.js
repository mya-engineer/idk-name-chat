import { FlexboxGrid, Avatar } from 'rsuite'
import { avatars } from '../avatars/avatars'

const Message = ({ user, msg }) => {
  const MentionMessage = () => {
    const splittedMessage = msg.split(/@\S+/g)
    const result = splittedMessage.reduce((full, part, i) => {
      return (
        <>
          {full}
          {part}
          {part ? <b>{isMention[i]}</b> : <></>}
        </>
      )
    }, null)
    return result
  }

  const isMention = msg.match(/@\S+/g)
  if (isMention) {
    msg = MentionMessage()
  }

  return (
    <FlexboxGrid className='chat-message'>
      <FlexboxGrid.Item>
        <Avatar
          children={
            user.bot
              ? avatars('bots', user.avatar)
              : avatars('users', user.avatar)
          }
        />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        as='h5'
        style={{
          paddingLeft: '1rem',
        }}>
        {user.username}
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={24}>{msg}</FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default Message
