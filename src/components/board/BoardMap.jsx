import React from 'react'

const BoardMap = ( { category,  nickname, title, day, likes, comment } ) => {



    return (
        <tbody>
            <tr>
                <td>{category}</td>
                <td>{nickname}</td>
                <td>{title}</td>
                <td>{day}</td>
                <td>{likes}</td>
                <td>{comment}</td>
            </tr>
        </tbody>
    )
    }

export default BoardMap