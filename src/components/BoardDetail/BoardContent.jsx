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
    const [content, setContent] = useState(data);
    console.log(content)
    useEffect(()=>{
        setContent(data)
    },[data])

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
`;

export default BoardContent