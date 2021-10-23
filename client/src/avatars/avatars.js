import {
  GiWolfHead,
  GiDirewolf,
  GiWolfHowl,
  GiRobotAntennas,
} from 'react-icons/gi'

export const avatars = (type, index, styles, size) => {
  const avatarsStorage = {
    users: [
      <GiWolfHead size={size ? size : '2rem'} color={'black'} style={styles} />,
      <GiDirewolf size={size ? size : '2rem'} color={'black'} style={styles} />,
      <GiWolfHowl size={size ? size : '2rem'} color={'black'} style={styles} />,
    ],
    bots: [<GiRobotAntennas size={'2rem'} color={'black'} />],
  }

  return type === 'users.length'
    ? avatarsStorage.users.length
    : avatarsStorage[type][index]
}

export const randomizeAvatar = () => {
  return Math.floor(Math.random() * avatars('users.length'))
}
