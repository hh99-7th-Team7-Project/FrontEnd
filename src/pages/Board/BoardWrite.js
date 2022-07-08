import React from 'react'
import BoardCategory from '../../components/BoardWrite/BoardCategory'
import ToastEdit from '../../components/BoardWrite/ToastEdit'
import Header from '../Header/Header'

const BoardWrite = () => {
  return (
    <div>
      <Header/>
      <BoardCategory/>
      <ToastEdit/>
    </div>
  )
}

export default BoardWrite