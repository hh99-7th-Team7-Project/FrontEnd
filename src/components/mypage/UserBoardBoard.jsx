import React, { useEffect } from 'react'
import apis from '../../shared/api/main'
import { getCookie } from '../../shared/Cookie'

const UserBoardBoard = () => {
  const userId = getCookie("userId")

  useEffect(()=>{
    apis.getMyBoard(userId)
  },[])

  return (
    <div>UserBoardBoard</div>
  )
}

export default UserBoardBoard