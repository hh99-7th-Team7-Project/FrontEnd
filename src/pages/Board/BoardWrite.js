import React,{ useEffect, useRef, useState } from 'react'
import axios from "axios"
import BoardCategory from '../../components/BoardWrite/BoardCategory'
import ToastEdit from '../../components/BoardWrite/ToastEdit'
import Header from '../Header/Header'
import { useDispatch,useSelector } from 'react-redux';
import { loadBoard } from '../../redux/modules/board'
import {useNavigate} from 'react-router-dom'
import apis from '../../shared/api/main'

const BoardWrite = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [cate, setCate] = useState("카페 추천합니다")
  const [content, setContent] = useState("")
console.log(cate)
console.log(title)
console.log(content)

const submitOnclick = async()=>{
  await apis.postBoard({title: title, content: content, category: cate})
            .then((res)=>{
                navigate("/board")
            })

}


  return (
    <div>
      <Header/>
      <BoardCategory title={setTitle} cate={setCate}/>
      <ToastEdit content={setContent}/>
      <button onClick={submitOnclick}>제출</button>
    </div>
  )
}

export default BoardWrite