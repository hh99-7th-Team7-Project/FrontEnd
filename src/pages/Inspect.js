import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Header/Logo'
import Sadari from '../components/main/Sadari'

const Inspect = () => {
  return (
    <OutWrap>
      <Logo/>
    <h3>서버가 점검중입니다 귀여운 루피랑 카드게임 하시구 다음번에 찾아와주세요</h3>
    <Wrap> 
      <Sadari/>
    </Wrap>
    </OutWrap>
  )
}

export default Inspect


const OutWrap = styled.div`
margin: auto;
width: 100%;
margin-top: 50px;
height: 50%;
/* border: 1px red solid; */
background-image: url(https://ifh.cc/g/AjDtVo.jpg);
background-repeat: repeat;
background-size:100;
text-align: center;
h3{
  margin-top: 10px;
}
`

const Wrap = styled.div`
margin: auto;
width: 50%;
margin-top: 30px;
height: 50%;
/* border: 1px red solid; */
`