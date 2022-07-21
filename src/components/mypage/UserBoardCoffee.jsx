import React, { useEffect, useState } from 'react'
import apis from '../../shared/api/main'
import { getCookie } from '../../shared/Cookie'

const UserBoardCoffee = () => {
  const [content, setContent] = useState()
  const userId = getCookie("userId")

  useEffect(()=>{
    apis.getMyCoffee(userId)
        .then((res)=>{
        console.log(res.data)
        setContent(res.data)
    })
  },[])

  return (
    <div>UserBoardCoffee</div>
  )
}

export default UserBoardCoffee