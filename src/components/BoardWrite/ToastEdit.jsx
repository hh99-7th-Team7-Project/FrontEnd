import React,{ useEffect, useRef, useState } from 'react'
import axios from "axios"

// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import 'tui-color-picker/dist/tui-color-picker.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const ToastEdit = () => {
  const editorRef = useRef();
  const [content,setContent] = useState()

  useEffect(() => {  
    const getMark = async () => {
      const res = await axios.get("http://localhost:4000/Review")
      console.log(res.data[3].data)
      setContent(res.data[3].data)
      console.log(content)
    }
    getMark()
    console.log(content)
  }, [])

  const handleRegisterButton = async() => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
     console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
    await axios.post("http://localhost:4000/Review",
    {data : editorRef.current?.getInstance().getMarkdown()})
  };

  return (
    <div> <h3 >### Editor Toast</h3>
    <Editor
      initialValue=" "
      previewStyle="vertical" // 미리보기 스타일 지정
      height="400px" // 에디터 창 높이
      initialEditType="markdown"
      useCommandShortcut={false} // 초기 입력모드 설정(디폴트 markdown)
      language="ko-KR"
      toolbarItems={[
        // 툴바 옵션 설정
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'indent', 'outdent']
      ]}
      ref={editorRef}
      plugins={[colorSyntax]}
    />
     <button onClick={handleRegisterButton}>등록</button></div>
  )
}

export default ToastEdit