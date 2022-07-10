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

const BoardImage = ({data}) => {

    const [content, setContent] = useState(data?.data);

    useEffect(()=>{
        setContent(data?.data)
    },[data])

  return (
    <>
        <ScWrap>
            <ScImg src="https://vrthumb.imagetoday.co.kr/2020/10/29/tip1140001301.jpg"/>
           {content&&<Viewer 
            events={['load','change']}
            initialValue={content}/>}
        </ScWrap>
        <ScHR/>
    </>
  )
}

const ScWrap = Styled.div`    
    display: flex;
`;

const ScImg = Styled.img`
    width: 50%;
`;

const ScHR = Styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
`;

export default BoardImage