import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { useDispatch, useSelector } from 'react-redux';
import { loadBoard } from '../../redux/modules/board';
import { api, instance } from '../../shared/api/core/api';
import apis from '../../shared/api/main';
import styled from 'styled-components';

const ToastEdit = (props) => {
  const { content } = props;
  const editorRef = useRef();

  return (
    <>
   
      <Editor
        onChange={() => {
          content(editorRef.current?.getInstance().getMarkdown());
        }}
        initialValue=""
        previewStyle="tab" // 미리보기 스타일 지정
        height="600px" // 에디터 창 높이
        initialEditType="markdown"
        useCommandShortcut={false} // 초기 입력모드 설정(디폴트 markdown)
        previewHighlight={false}
        language="ko-KR"
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'indent', 'outdent', 'image'],
        ]}
        ref={editorRef}
        plugins={[colorSyntax]}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            let formData = new FormData();
            formData.append('imgUrl', blob);
            const image_data = await apis.postImg(formData);

            callback(`${image_data?.data.img}`, `${blob.name.split('.')[0]}`);
          },
        }}
      />
    
    </>
  );
};

export default ToastEdit;


