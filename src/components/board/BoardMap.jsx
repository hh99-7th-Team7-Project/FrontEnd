import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const BoardMap = ( { item } ) => {
    const navigate = useNavigate()
console.log(item)

const moveToBoard = (e) =>{
    navigate(`/board/${item?.id}`)
}

    return (
        <div
        style={{border:"1px #ddd solid"}}>
                    <span>{item?.category}</span>
                    {/* <td>{nickname}</td> */}
                    <Link to ={`/board/${item?.id}`}>
                    <span
                    onclick={moveToBoard}>{item?.title}</span></Link>
                    {/* <td>{day}</td> */}
                    {/* <td>{likes}</td>
                    <td>{comment}</td> */}
              
        </div>
    )
    }

export default BoardMap