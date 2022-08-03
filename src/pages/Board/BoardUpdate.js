import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/** react-router-dom */
import { useNavigate, useParams } from 'react-router-dom';

/** component */
import ToastEditUpdate from '../../components/BoardWrite/ToastEditUpdate';
import BoardCategoryUpdate from '../../components/BoardWrite/BoardCategoryUpdate';

/** api 서버 통신 */
import apis from '../../shared/api/main';

/** Sentry */
import * as Sentry from "@sentry/react";

const BoardUpdate = () => {
  const { boardId } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [cate, setCate] = useState("카페 추천합니다")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [prevContent, setPrevContent] = useState()
  const [head, setHead] = useState()


  const submitOnclick = async () => {
    const data = { "title": title, "content": content, "category": cate }
    await apis.updateBoard(
      boardId,
      data
    )
    navigate("/board")
  }

  useEffect(() => {
    setLoading(true)
    const getMark = async () => {
      await apis.getBoard(boardId)
        .then((res) => {
          setPrevContent(res?.data?.content)
          setHead(res?.data)
          setTitle(res?.data?.title)
          setCate(res?.data?.category)
        }).catch(e => {
          Sentry.captureException(e);
        });
    }
    getMark()
  }, [loading])



  return (
    <>
      <ScMobile> 
        <ScWrite>
          <BoardCategoryUpdate title={setTitle} cate={setCate} head={head} />
          <ToastEditUpdate content={setContent} prevContent={prevContent} />
          <ScSubmit>
            <div onClick={submitOnclick}>제출</div>
          </ScSubmit>
        </ScWrite>
      </ScMobile>
    </>
  )
}

export default BoardUpdate

const ScMobile = styled.div`
  @media screen and (min-width: 350px){
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const ScWrite = styled.div`
  min-width: 1200px;
  margin: 73px auto;
`;
const ScSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  font-size: 1em;
  margin: 20px;
  div {
    background-color: #ddd;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }
`;