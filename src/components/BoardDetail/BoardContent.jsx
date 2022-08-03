import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/** Toast UI */
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'tui-color-picker/dist/tui-color-picker.css';



const BoardContent = ({ data }) => {

  const [content, setContent] = useState();

  useEffect(() => {
    setContent(data);
    return () => {
      setContent();

    };
  }, [data]);


  return (
    <>
      <ScWrap>
        {content && (
          <Viewer events={['load', 'change']} initialValue={content} />
        )}
      </ScWrap>
    </>
  );
};

const ScWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BoardContent;
