import React from 'react';
import Styled from 'styled-components';
import { CopyToClipboard } from "react-copy-to-clipboard";

const BoardLike = () => {

  const currentUrl = window.location.href;
  return (
    <>
      <ScWrap>
          <ScTitleWrap>
            <ScH3>6</ScH3>
          </ScTitleWrap>
          <ScBtnWrap>
            <ScBtn>추천</ScBtn>
          </ScBtnWrap>
          <ScBtnWrap2>
          <CopyToClipboard text={currentUrl}>
					<ScBtn2 onClick={()=>{
            alert("링크복사")
          }}>📢공유</ScBtn2>
				</CopyToClipboard>
            <ScBtn2>⚠️신고</ScBtn2>
          </ScBtnWrap2>
      </ScWrap>
      <ScHR/>
    </>
  )
}

const ScWrap = Styled.div`
    padding: 10px 10px 0px 10px;
    display: column;    
    justify-content: center;
    align-items: center;
    
`;

const ScTitleWrap = Styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ScH3 = Styled.h3`
  font-size: 40px;
  margin: auto;

`;

const URLShareButton = Styled.button`
	width: 90px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;
const ScBtnWrap = Styled.div`
  margin: 20px auto;  
  display: flex;
  justify-content: center;
  text-align: center;
  
`;

const ScBtn = Styled.div`
  padding: 20px;
  margin: auto;
  display: block;
  width: 100px;
  border-radius: 50px;
  background-color: #EEE;
  border-color: #EEE;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    cursor: pointer;  
    background-color: #212121;
    color: white;
  }
`;

const ScBtnWrap2 = Styled.div`  
  margin: 20px auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ScBtn2 = Styled.div`
  padding: 20px;
  margin: auto;
  display: block;
  width: 100px;
  border-radius: 50px;
  background-color: #EEE;
  border-color: #EEE;
  &:hover {
    cursor: pointer;  
    background-color: #212121;
    color: white;
  }
`;

const ScHR = Styled.hr`
    margin-top: 40px;
    margin-bottom: 20px;
`;



export default BoardLike