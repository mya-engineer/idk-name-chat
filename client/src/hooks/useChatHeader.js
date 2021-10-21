import { useState } from 'react'

export const useChatHeader = () => {
  const [usersDrawer, setUsersDrawer] = useState(false)

  const handleClick = button => {
    switch (button) {
      case 'users':
        setUsersDrawer(!usersDrawer)
        break
      default:
        throw new Error("Couldn't handle click on chat header button!")
    }
  }

  const components = {
    users: usersDrawer,
  }

  return { handleClick, components }
}
