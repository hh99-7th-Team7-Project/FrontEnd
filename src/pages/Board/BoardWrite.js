import React,{ useEffect, useRef, useState } from 'react'
import axios from "axios"
import BoardCategory from '../../components/BoardWrite/BoardCategory'
import ToastEdit from '../../components/BoardWrite/ToastEdit'
import Header from '../Header/Header'
import { useDispatch,useSelector } from 'react-redux';
import { loadBoard } from '../../redux/modules/board'

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