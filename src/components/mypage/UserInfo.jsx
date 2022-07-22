import React from 'react'
import { getCookie } from '../../shared/Cookie'

const UserInfo = ({email}) => {
  const userName = getCookie("nickname")

  return (
    <div >
      <div style={{fontSize:'22px'}}>{userName}</div>
      <div style={{fontSize:'14px'}}>{email}</div>
    </div>
  )
}

export default UserInfo