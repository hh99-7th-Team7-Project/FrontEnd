import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

const BoardMap = (props) => {
    const navigate = useNavigate()
    const {content} =props
console.log(content)

const create = content?.createdAt.split("T")[0]
const moveToBoard = (e) =>{
    // navigate(`/board/${content?.id}`)
}

    return (
        <ScBoardList style={{border:"1px #ddd solid"}}>
                    <span>{content?.category}</span>
                    <span>{content?.nickname}</span>
                    {/* <Link to ={`/board/${content?.id}`}> */}
                    <span
                    onClick={moveToBoard}>{content?.title}</span>
                    {/* </Link> */}
                    <span>{create}</span>
                    <span>13</span>
                    <span>10</span>
                    {/* <td>{likes}</td>
                    <td>{comment}</td> */}
              
        </ScBoardList>
    )
    }

export default BoardMap

const ScBoardList = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
`