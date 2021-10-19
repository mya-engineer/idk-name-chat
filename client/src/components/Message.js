import { FlexboxGrid, Avatar } from 'rsuite'
import avatars from '../avatars/avatars'

const Message = ({ user, msg }) => (
  <div>
    <FlexboxGrid
      style={{
        border: '1px solid var(--rs-border-primary)',
        marginBottom: '.5rem',
        borderRadius: '6px',
        padding: '.5rem',
      }}>
      <FlexboxGrid.Item>
        <Avatar
          children={
            user.bot ? avatars.bots[user.avatar] : avatars.users[user.avatar]
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
  </div>
)

export default Message
