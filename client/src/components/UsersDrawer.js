import { Drawer, List, FlexboxGrid } from 'rsuite'
import { IoHeartCircleSharp } from 'react-icons/io5'
import { avatars } from '../avatars/avatars'

const UsersDrawer = ({ open, handleClick, state }) => {
  return (
    <Drawer open={open} onClose={() => handleClick('users')} size='xs'>
      <Drawer.Header>
        <Drawer.Title>Users</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <List bordered hover>
          {state.users.map((user, i) => (
            <List.Item key={i}>
              <FlexboxGrid style={{ alignItems: 'center' }}>
                <FlexboxGrid.Item colspan={2}>
                  <IoHeartCircleSharp
                    color='LawnGreen'
                    size='1.5rem'
                    style={centeredStyle}
                  />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={5}>
                  {avatars('users', user.avatar, centeredStyle)}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={17}>
                  {user.username}
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          ))}
        </List>
      </Drawer.Body>
    </Drawer>
  )
}

const centeredStyle = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
}

export default UsersDrawer
