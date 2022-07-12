import React from 'react'
import { getCookie } from '../../shared/Cookie'

const UserInfo = ({email}) => {
  const userName = getCookie("nickname")

  return (
    <div>
      {userName}
      ({email})
    </div>
  )
}

export default UserInfo