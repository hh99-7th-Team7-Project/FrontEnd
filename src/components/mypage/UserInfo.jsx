import React from 'react'
import { getCookie } from '../../shared/Cookie'

const UserInfo = ({email}) => {
  const userName = getCookie("nickname")

  return (
    <div>
      {userName}
      <div>{email}</div>
    </div>
  )
}

export default UserInfo