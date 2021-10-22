import {
  GiWolfHead,
  GiDirewolf,
  GiWolfHowl,
  GiRobotAntennas,
} from 'react-icons/gi'

export const avatars = {
  users: [
    (styles, size = undefined) => (
      <GiWolfHead size={size ? size : '2rem'} color={'black'} style={styles} />
    ),
    (styles, size = undefined) => (
      <GiDirewolf size={size ? size : '2rem'} color={'black'} style={styles} />
    ),
    (styles, size = undefined) => (
      <GiWolfHowl size={size ? size : '2rem'} color={'black'} style={styles} />
    ),
  ],
  bots: [
    (styles, size = undefined) => (
      <GiRobotAntennas size={'2rem'} color={'black'} />
    ),
  ],
}

export const randomizeAvatar = () => {
  return Math.floor(Math.random() * avatars.users.length)
}
