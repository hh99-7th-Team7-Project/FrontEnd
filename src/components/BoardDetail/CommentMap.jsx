import React from 'react';
import Styled from 'styled-components';

const CommentMap = (props) => {

    const {nickname, comment, day} = props;

    


  return (
    <>
        <ScWrap>
            <ScTable>
                <tbody>
                    <tr>
                        <td>{nickname}</td>
                        <td>{comment}</td>              
                        <td>{day}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{nickname}</td>
                        <td>{comment}</td>              
                        <td>{day}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{nickname}</td>
                        <td>{comment}</td>              
                        <td>{day}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{nickname}</td>
                        <td>{comment}</td>              
                        <td>{day}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{nickname}</td>
                        <td>{comment}</td>              
                        <td>{day}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{nickname}</td>
                        <td>{comment}</td>              
                        <td>{day}</td>
                    </tr>
                </tbody>   
            </ScTable>
            <ScHR/>
        </ScWrap>
    </>
  )
}

const ScWrap = Styled.div`

`;

const ScTable = Styled.table`
    border: 1px solid black;
    width: 100%;
    margin: 30px auto;
`;

const ScHR = Styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;.
`;

export default CommentMap