import React, { useEffect } from 'react';
import Styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getBoardComment } from '../../redux/modules/boardcomment';
import { getCookie } from '../../shared/Cookie';

const CommentMap = () => {

    const nickname = getCookie("nickname");
    const dispatch = useDispatch();
    const comment_list = useSelector((state) => state.boardComment.boardcommentlist);

    useEffect(()=>{
        dispatch(__getBoardComment());
    },[dispatch])
    

    return (
        <ScWrap>
            <ScTable>
                {comment_list.map((item, index)=> (
                    <tbody key={index}>
                    <tr>
                        <td>{nickname}</td>                        
                        <td>{item?.comment}</td>                                      
                        <td>{item?.day}</td>                        
                    </tr>                    
                </tbody>
                ))}
            </ScTable>
            <ScHR/>
        </ScWrap>
    )
}

const ScWrap = Styled.div`

`;

const ScTable = Styled.div`    
    width: 100%;
    margin: 30px auto;
`;

const ScHR = Styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;.
`;


export default CommentMap