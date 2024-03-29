import React, { useEffect, useRef } from 'react';


// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { instance } from '../../shared/api/core/api';

const ToastEditUpdate = (props) => {
  const { content, prevContent } = props;
  const editorRef = useRef();
  //이전 내용 가져오기
  useEffect(() => {
    // 2. Editor DOM 내용에 HTML 주입
    editorRef?.current?.getInstance()?.setMarkdown(prevContent);
  }, [prevContent]);

  return (
    <div>
      {prevContent && (
        <Editor
          onChange={() => {
            content(editorRef.current?.getInstance().getMarkdown());
          }}
          initialValue=""
          previewStyle="tab" // 미리보기 스타일 지정
          height="400px" // 에디터 창 높이
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

              // 1. 첨부된 이미지 파일을 서버로 전송후, 이미지 경로 url을 받아온다.
              let formData = new FormData();
              formData.append('imgUrl', blob);
              const image_data = await instance.post('/coffee/image', formData);
              // 2. 첨부된 이미지를 화면에 표시(경로는 임의로 넣었다.)
              callback(`${image_data?.data.img}`, `${blob.name.split('.')[0]}`);
            },
          }}
        />
      )}
    </div>
  );
};

export default ToastEditUpdate;
