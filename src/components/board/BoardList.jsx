import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import '../../shared/css/dropdown.css';
import BoardMap from './BoardMap';
import { GoChevronDown } from "react-icons/go";
import apis from '../../shared/api/main';

const BoardList = () => {
    const [content, setContent] = useState();
    console.log(content)

    useEffect(() => {  
          const getMark = async () => {
              await apis.getBoards()
                        .then((res)=>{
                            console.log(res.data)
                            setContent(res.data)
                          })
                        }
                      getMark()
                    }, [])


  return (
    <>
        <ScWrap>
            <ScBoard>
                <ScTable>
                    {content&&content.map((item,idx)=>{
                        return(<BoardMap
                       content={item}
                       key={idx}
                    />)
                    })}
                   
                </ScTable>
            </ScBoard>
        </ScWrap>
        
    </>
  )
}

const ScWrap = Styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 100%;

`;
const ScBoard = Styled.div`    
    width: 100%;
    height: 100%;
`;

const ScTable = Styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin: 30px auto;
`;


export default BoardList