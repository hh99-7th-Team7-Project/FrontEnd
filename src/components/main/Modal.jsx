import React from 'react'
import styled from 'styled-components';
import { setCookie } from '../../shared/Cookie';

const Modal = ({showModal,closeModal}) => {
  const notSeenADay = ()=>{
    setCookie("not seen a day",true)
    closeModal()
  }


  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
      <div>
        <ScX onClick={closeModal}>✖</ScX>
        <div style={{fontSize:"24px"}}>Coffind에 오신걸 환영합니다!</div>      
      </div>
     <div>❤Coffind를 100% 즐기기 위한 설명서❤</div>
     
     <div>
      <div>원하는 음료의 가격을 찾아보세요!</div>
      <ul>
         
         <li>저희 coffind은 우리가 자주 찾는 12개의 대형 브랜드 커피숍들의 가격을 한눈에 찾아 볼 수 있는 사이트 입니다! </li>
          <li>brand 혹은 category를 사용해서 원하는 커피의 값을 알아보세요!</li>
          <li>검색을 통해서 찾아보실 수도 있답니다.</li>
      </ul>
      </div>
    <div>
      <div>먹어보고 싶은 커피가 어떤지 궁금하시다구요? </div>
          <ul>
          <li>다른 커파인러분들이 직접 작성한 별점과 커피에 대한 코멘트를 확인하세요!</li>
          <li>지금 먹어보고 싶은 커피를 파는 내 주변 커피숍의 위치를 확인해보세요!</li>
          </ul>
    </div>

    <div>
      <div>커피 연구소</div>
      <ul>
      <li>나만의 비밀 레시피 나 추천하고 싶은 커피숍을 커파인러분들과 공유해보세요!</li>
      <li>7일 동안 가장 많은 북 마크를 받은 게시 글 top3를 선정 하여 소정의 선물을 증정합니다!</li>
      </ul>
    </div>

    <div>
        <div>커피 모임</div>
            <ul>
              <li>"여기 커피숍 맛있는 메뉴 많다 던 데... 혼자 가면 다 못 먹어보겠지..? 같이 갈 사람 없을까? " 할 때 커피 모임을 만들어 보세요!</li>
            <li>가고 싶은 곳의 위치와 가고 싶은 날짜를 정해 커피 모임을 만들고 모임 원 끼리 채팅을 통해 협의해  함께 커피숍을 가봐요!</li>
      </ul>
     </div>

<button onClick={notSeenADay}>오늘 하루 보지 않기</button>
     </ModalContainer>
     </Background> : null}</div>
  )
}

export default Modal

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.30);
    z-index: 1;

`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    color: white;
    transform: translate(-50%, -50%);
    max-height: 80%;
    width: 30rem;
    height: 70%;
    padding: 20px;
    background:var(--main);
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 200;
    line-height: 40px;
    li{
      list-style: circle;
      font-size: 16px;
    }

`;

const ScX = styled.span`
  &:hover {
    cursor: pointer;
  }
 position: absolute;
 left: 103%;
 top: 0%;
`;