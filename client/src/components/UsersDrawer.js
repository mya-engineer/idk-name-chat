import { Drawer } from 'rsuite'

const UsersDrawer = ({ open, handleClick }) => {
  return (
    <Drawer open={open} onClose={() => handleClick('users')} size='xs'>
      <Drawer.Header>
        <Drawer.Title>Users</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>Hello!</Drawer.Body>
    </Drawer>
  )
}

export default UsersDrawer
