/* eslint-disable array-callback-return */
import React, { useState,useEffect } from 'react'
import Styled from 'styled-components'
import apis from '../../shared/api/main'


const RandomCoffee = () => {

  const [ coffee, setCoffee ] = useState("");
  const [ selectValue , setSelectValue ] = useState();

  const handleBrandChange = (e) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);
  }

  const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);
  }

  const coffeeBrand = [
    "스타벅스",
    "이디야",    
    "탐앤탐스",
    "드롭탑",
    "더벤티",
    "엔젤인어스",
    "빽다방",
    "커피빈",
    "컴포즈커피",
    "할리스",
    "카페베네",
    "폴바셋"
  ];



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const randomCoffee = (() => {

    const random = Math.floor(Math.random()*coffeeBrand.length);
    setCoffee(coffeeBrand[random]);
  })

  useEffect(()=>{

    randomCoffee();
  },[]);


  return (
    <ScRandomWrap>
      {/* <ScTitle>랜덤 음료</ScTitle> */}
      <ScBrandWrap>
          <button>브랜드별</button>
              <ScBrandRadioWrap>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="스타벅스" 
                    value="스타벅스" 
                    checked={selectValue === "스타벅스"}
                    onChange={handleBrandChange}
                    />
                  <span>스타벅스</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="이디야" 
                    value="이디야"
                    checked={selectValue === "이디야"}
                    onChange={handleBrandChange}
                    />
                  <span>이디야</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="탐앤탐스" 
                    value="탐앤탐스"
                    checked={selectValue === "탐앤탐스"}
                    onChange={handleBrandChange}
                    />
                  <span>탐앤탐스</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="빽다방" 
                    value="빽다방" 
                    checked={selectValue === "빽다방"}
                    onChange={handleBrandChange}
                    />
                  <span>빽다방</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="드롭탑" 
                    value="드롭탑" 
                    checked={selectValue === "드롭탑"}
                    onChange={handleBrandChange}
                    />
                  <span>드롭탑</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="더벤티" 
                    value="더벤티" 
                    checked={selectValue === "더벤티"}
                    onChange={handleBrandChange}
                    />
                  <span>더벤티</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="엔젤인어스" 
                    value="엔젤인어스" 
                    checked={selectValue === "엔젤인어스"}
                    onChange={handleBrandChange}
                    />
                  <span>엔젤인어스</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="커피빈" 
                    value="커피빈" 
                    checked={selectValue === "커피빈"}
                    onChange={handleBrandChange}
                    />
                  <span>커피빈</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="컴포즈커피" 
                    value="컴포즈커피" 
                    checked={selectValue === "컴포즈커피"}
                    onChange={handleBrandChange}
                    />
                  <span>컴포즈커피</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="할리스" 
                    value="할리스" 
                    checked={selectValue === "할리스"}
                    onChange={handleBrandChange}
                    />
                  <span>할리스</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="카페베네" 
                    value="카페베네" 
                    checked={selectValue === "카페베네"}
                    onChange={handleBrandChange}
                    />
                  <span>카페베네</span>
                </ScBrandAlign>
                <ScBrandAlign>
                  <input 
                    type="radio" 
                    id="폴바셋" 
                    value="폴바셋" 
                    checked={selectValue === "폴바셋"}
                    onChange={handleBrandChange}
                    />
                  <span>폴바셋</span>
                </ScBrandAlign>
              </ScBrandRadioWrap>
      </ScBrandWrap>
      <ScCategoryWrap>
        <button>카테고리별</button>
          <ScCateRadioWrap>
            <ScCateAlign>
                <input 
                  type="radio" 
                  id="커피" 
                  value="커피" 
                  checked={selectValue === "커피"}
                  onChange={handleCategoryChange}
                  />
                <span>커피</span>
                <input 
                  type="radio" 
                  id="논커피" 
                  value="논커피" 
                  checked={selectValue === "논커피"}
                  onChange={handleCategoryChange}
                  />
                <span>논커피</span>
                <input 
                  type="radio" 
                  id="스무디" 
                  value="스무디"
                  checked={selectValue === "스무디"} 
                  onChange={handleCategoryChange}
                  />
                <span>스무디</span>
                <input 
                  type="radio" 
                  id="에이드" 
                  value="에이드" 
                  checked={selectValue === "에이드"}
                  onChange={handleCategoryChange}
                  />
                <span>에이드</span>
                <input 
                  type="radio" 
                  id="차" 
                  value="차" 
                  checked={selectValue === "차"}
                  onChange={handleCategoryChange}
                  />
                <span>차</span>
              </ScCateAlign>
          </ScCateRadioWrap>
      </ScCategoryWrap>
        <ScBrand>
          {coffeeBrand.map((item,index)=>{
            <ScBrandTitle key={index}>{item.id}</ScBrandTitle>
          })} 
        </ScBrand>
      <h2>{coffee}</h2>
      <button onClick={()=>{
        randomCoffee();
      }}>랜덤뽑기</button>
    </ScRandomWrap>
  )
}

const ScRandomWrap = Styled.div`
    /* border: 2px solid black; */
    width: 40vw;
    height: 330px;
`;

const ScTitle = Styled.h1`  
  color: brown;
`;

const ScBrandWrap = Styled.div`
  width: 300px;
  margin: 10px;
`;

const ScBrandRadioWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const ScBrandAlign = Styled.div`
  margin-left: 5px;  
`;

const ScCategoryWrap = Styled.div`
  
  width: 300px;
  margin: 10px;
`;

const ScCateRadioWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const ScCateAlign = Styled.div`
  margin-left: 5px; 
`;

const ScBrand = Styled.div`
  display: flex;  
  width: 100%;  
`;

const ScBrandTitle = Styled.p`

`;

export default RandomCoffee