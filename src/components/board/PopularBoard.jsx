import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import BoardMap from './BoardMap';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const PopularBoard = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState();

    const navigate = useNavigate()

    console.log(content)
      useEffect(() => {  
        setLoading(true)
          const getMark = async () => {
              await axios.get("http://localhost:4000/Review")
            .then((res)=>{
                setContent(res.data)
              })
            }
          getMark()
        }, [loading])

        

  return (
    <>
        <ScWrap>
            <h1>인기글 Top 10</h1>
            <ScBoard>
                <ScTable>
                    {content&&content.map((item,idx)=>{
                        return <BoardMap 
                        key={idx}
                         item={item}/>
                      
                    })}
                </ScTable>
            </ScBoard>
        </ScWrap>
        
    </>
  )
}

const ScWrap = Styled.div` 
    border: 1px solid black;
    margin: 10px auto;
    width: 100%;
    height: 100%;

`;

const ScBoard = Styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = Styled.table`
    border: 1px solid black;
    width: 100%;
    margin: 30px auto;
`;

const ScListWrap = styled.div`
    
`

export default PopularBoard