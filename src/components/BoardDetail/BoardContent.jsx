import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import 'tui-color-picker/dist/tui-color-picker.css';
import { loadBoard } from '../../redux/modules/board';
import styled from 'styled-components';

const BoardContent = ({data}) => {
    console.log(data)
    const [content, setContent] = useState();
    console.log(content)
    useEffect(()=>{
        setContent(data)
        return(()=>{
          setContent()
          console.log("청소")
        })
    },[data])
    console.log(content)

  return (
    <>
        <ScWrap>
          {content&&<Viewer 
            events={['load','change']}
            initialValue={content}
          />}
        </ScWrap>

    </>
  )
}

const ScWrap = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default BoardContent