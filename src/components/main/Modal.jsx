import React from 'react'
import styled from 'styled-components';

const Modal = ({showModal,closeModal}) => {
  return (
    <div>{showModal ? 
      <Background>
      <ModalContainer>
      <span>Coffind에 오신걸 환영합니다!</span>
      <span onClick={closeModal}>X</span>
     <div>❤coffind를 100% 즐기기 위한 설명서❤</div>
     <div>
- 원하는 음료의 가격을 찾아보세요! 저희 coffind은 우리가 자주 찾는 12개의 대형 브랜드 커피숍들의 가격을 한눈에 찾아 볼 수 있는 사이트 입니다! 
- brand 혹은 category를 사용해서 원하는 커피의 값을 알아보세요!
-검색을 통해서 찾아보실 수도 있답니다.
<div>
  - 먹어보고 싶은 커피가 어떤지 궁금하시다구요? 

다른 커파인러분들이 직접 작성한 별점과 커피에 대한 코멘트를 확인하세요!
- 지금 먹어보고 싶은 커피를 파는 내 주변 커피숍의 위치를 확인해보세요!
</div>

<div>
커피 연구소
- 나만의 비밀 레시피 나 추천하고 싶은 커피숍을 커파인러분들과 공유해보세요!
- 10일 동안 가장 많은 북 마크를 받은 게시 글 top5를 선정 하여 소정의 선물을 증정합니다!
</div>
<div>
커피 모임
- "여기 커피숍 맛있는 메뉴 많다 던 데... 혼자 가면 다 못 먹어보겠지..? 같이 갈 사람 없을까? " 할 때 커피 모임을 만들어 보세요!
- 가고 싶은 곳의 위치와 가고 싶은 날짜를 정해 커피 모임을 만들고 모임 원 끼리 채팅을 통해 협의해  함께 커피숍을 가봐요!
</div>
</div>
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
    height: 50%;
    padding: 20px;
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
`;