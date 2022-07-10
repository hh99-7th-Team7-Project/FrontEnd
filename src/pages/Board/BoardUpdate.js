import React, { useEffect, useState } from 'react'
import BoardCategory from '../../components/BoardWrite/BoardCategory'
import Header from '../Header/Header'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import ToastEditUpdate from '../../components/BoardWrite/ToastEditUpdate';
import BoardCategoryUpdate from '../../components/BoardWrite/BoardCategoryUpdate';

const BoardUpdate = () => {
  const { boardId } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [cate, setCate] = useState("카페 추천합니다")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [prevContent, setPrevContent] = useState()
  const [head, setHead] = useState()
  console.log(cate)
  console.log(title)
  console.log(content)

  const submitOnclick = async () => {
    await axios.put(`http://localhost:4000/Review/${boardId}`,
      { title: title, content: content, category: cate })
    navigate("/board")
  }

  useEffect(() => {
    setLoading(true)
    const getMark = async () => {
      await axios.get(`http://localhost:4000/Review/${boardId}`)
        .then((res) => {
          console.log(res)
          setPrevContent(res?.data?.content)
          setHead(res?.data)
          console.log(res?.data)
          setTitle(res?.data?.title)
          setCate(res?.data?.category)
        })
    }
    getMark()
  }, [loading])



  return (
    <div>
      <Header />
      <BoardCategoryUpdate title={setTitle} cate={setCate} head={head} />
      <ToastEditUpdate content={setContent} prevContent={prevContent} />
      <button onClick={submitOnclick}>제출</button>
    </div>
  )
}

export default BoardUpdate