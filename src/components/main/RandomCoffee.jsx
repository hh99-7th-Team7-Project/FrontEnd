/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import RandomModalBg from './image/RandomModalBg.png';
import RandomLogo from './svg/RandomImage.svg';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import apis from '../../shared/api/main'
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';



const RandomCoffee = ({closeModal}) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2c278c',
      },
    },
  });

  
  const [ selectBrandValue , setSelectBrandValue ] = useState();
  const [ selectCategoryValue , setSelectCategoryValue ] = useState();
  const [ value, setValue ] = useState([2000, 8000]);

  


  function valuetext(value) {
    return `${value}원`;
  }

  console.log("min",value[0],"max",value[1]);

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBrandChange = (e) => {
    // console.log(e.target.value);
    setSelectBrandValue(e.target.value);
  }

  const handleCategoryChange = (e) => {
    // console.log(e.target.value);
    setSelectCategoryValue(e.target.value);
  }

  console.log(selectBrandValue);
  console.log(selectCategoryValue);


  const randomCoffeePick = async () => {
    await apis.randomCoffee(
       selectBrandValue,
       selectCategoryValue,
       value[0],
       value[1]
    )
    .then((res)=>{
      console.log(res);
    })
    .catch((error)=>{
      console.log(error);
    })
  }




  return (
    <Background>
      <ScRandomWrap>
        <ScTitleImgWrap>
          <ScTitleWrap>
            <ScTitle1>오늘은</ScTitle1>
            <ScTitle2>어떤 음료를 마셔볼까 ?</ScTitle2>
            <ScTitle3>선택이 어려운 당신에게 딱맞는 음료를 추천해드립니다.</ScTitle3>
          </ScTitleWrap>
          <ScImgWrap>
            <ScImg src={RandomLogo} alt=""/>
          </ScImgWrap>
        </ScTitleImgWrap>
        <ScBrandWrap>
            <h4>브랜드별</h4>
            <ScBrandRadioWrap>
              <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="스타벅스" 
                  value="스타벅스"
                  checked={selectBrandValue === "스타벅스"}                   
                  onChange={handleBrandChange}
                  />
                <label htmlFor="스타벅스">스타벅스</label>
              </ScBrandAlign>
              <ScBrandAlign>              
                  <ScInput 
                    type="radio" 
                    id="이디야" 
                    value="이디야" 
                    checked={selectBrandValue === "이디야"}                 
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="이디야">이디야</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="탐앤탐스"
                    value="탐앤탐스"
                    checked={selectBrandValue === "탐앤탐스"}                  
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="탐앤탐스">탐앤탐스</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="빽다방" 
                    value="빽다방" 
                    checked={selectBrandValue === "빽다방"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="빽다방">빽다방</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="드롭탑" 
                    value="드롭탑" 
                    checked={selectBrandValue === "드롭탑"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="드롭탑">드롭탑</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="더벤티" 
                    value="더벤티" 
                    checked={selectBrandValue === "더벤티"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="더벤티">더벤티</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="엔제리너스" 
                    value="엔제리너스" 
                    checked={selectBrandValue === "엔제리너스"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="엔제리너스">엔제리너스</label>
                </ScBrandAlign>
                <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="커피빈" 
                  value="커피빈" 
                  checked={selectBrandValue === "커피빈"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="커피빈">커피빈</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="컴포즈" 
                    value="컴포즈" 
                    checked={selectBrandValue === "컴포즈"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="컴포즈">컴포즈</label>
                </ScBrandAlign>
                <ScBrandAlign>
                  <ScInput 
                    type="radio" 
                    id="할리스" 
                    value="할리스" 
                    checked={selectBrandValue === "할리스"}
                    onChange={handleBrandChange}
                    />
                  <label htmlFor="할리스">할리스</label>
                </ScBrandAlign>
                <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="카페베네" 
                  value="카페베네" 
                  checked={selectBrandValue === "카페베네"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="카페베네">카페베네</label>
                </ScBrandAlign>
                <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="폴바셋" 
                  value="폴바셋" 
                  checked={selectBrandValue === "폴바셋"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="폴바셋">폴바셋</label>
              </ScBrandAlign>
              <ScBrandAlign>
                <ScInput 
                  type="radio" 
                  id="메가커피" 
                  value="메가커피" 
                  checked={selectBrandValue === "메가커피"}
                  onChange={handleBrandChange}
                  />
                <label htmlFor="메가커피">메가커피</label>
              </ScBrandAlign>
            </ScBrandRadioWrap>
        </ScBrandWrap>
        <ScCategoryWrap>
            <h4>종류</h4>
            <ScCateRadioWrap>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="커피" 
                    value="커피" 
                    checked={selectCategoryValue === "커피"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="커피">커피</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="논커피" 
                    value="논커피" 
                    checked={selectCategoryValue === "논커피"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="논커피">논커피</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="스무디" 
                    value="스무디"
                    checked={selectCategoryValue === "스무디"} 
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="스무디">스무디</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="에이드" 
                    value="에이드" 
                    checked={selectCategoryValue === "에이드"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="에이드">에이드</label>
                </ScCateAlign>
                <ScCateAlign>
                  <ScInput 
                    type="radio" 
                    id="티" 
                    value="티" 
                    checked={selectCategoryValue === "티"}
                    onChange={handleCategoryChange}
                    />
                  <label htmlFor="티">티</label>
                </ScCateAlign>
            </ScCateRadioWrap>
        </ScCategoryWrap>
        <ScPriceWrap>
            <h4>가격대</h4>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width: "550px",margin:"20px auto"}}>
              <div>W2000</div>
              <div>W7000+</div>
            </div>
            <ScPriceAlign>
              <Box style={{width:"508px"}}>
              <Slider
                  theme={theme}
                  getAriaLabel={() => 'Price range'}
                  value={value}
                  defaultValue={[2000, 7000]}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}                    
                  step={1000}
                  marks
                  min={2000}
                  max={7000}
                />
              </Box>
            </ScPriceAlign>
        </ScPriceWrap>                 
        <ScX onClick={closeModal}>✖</ScX>
        <ScButton onClick={()=>{
          randomCoffeePick();
        }}>선택 완료</ScButton>
      </ScRandomWrap>
    </Background>
  )
}

const Background = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.30);
    z-index: 1;
    
`;

const ScRandomWrap = Styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 756px;
    height: 800px;
    background-color: #FFF;
    background-image: url(${RandomModalBg});
    background-size: cover;
    border-radius: 32px;
    display: flex;
    flex-direction: column;    
    align-items: center;
    text-align: center;
    font-size: 1em;    
`;

const ScX = Styled.div`
  position: absolute;
  top:0px;
  right: -30px;
  width: 26.39px;
  height: 26.39px;
  color: rgba(44,39,140,1);
  transform: rotate(90deg);
  font-size: 2.0em;
  font-weight: 600;  
  &:hover {
    cursor: pointer;
  }
`;

const ScTitleImgWrap = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
  width: 700px;
`;

const ScTitleWrap = Styled.div`  
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 94px; 
`;

const ScTitle1 = Styled.h1`  
  text-align: left;
  line-height: 47px;
  font-size: 2.75em;
  font-weight: 400;
`;

const ScTitle2 = Styled.h1`  
  text-align: left;
  line-height: 47px;
  font-size: 2.75em;
  font-weight: 600;
`;

const ScTitle3 = Styled.h3`
  text-align: left;
  line-height: 23.27px;
  font-size: 1.125em;
  font-weight: 300;
`;

const ScImgWrap = Styled.div`
  
`;

const ScImg = Styled.img`
  
`;

const ScBrandWrap = Styled.div`
  width: 674px;
  height: 101px;
  margin: -50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 32px;
  gap: 10px;    
`;

const ScBrandRadioWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;


const ScBrandAlign = Styled.div`
  display: flex;
  flex-direction: flex-start;
  border: 1px solid #2c278c;
  background-color: white;
  color: #2c278c;
  border-radius: 23px;
  width: 80px;
  height: 30px;
  align-items: center;
  margin: 5px;
  justify-content: center;
  font-size: 0.815em;  
  input:checked + label {
    border: 1px solid #2c278c;
    background-color: #2c278c;
    color: white;
    border-radius: 23px;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;     
  label {
    &:hover {
    cursor: pointer;
  } 
  }  
  }
`;

const ScInput = Styled.input`
  display: none;
  &:hover {
    cursor: pointer;
  }
  
`;

const ScCategoryWrap = Styled.div`  
  width: 674px;
  height: 101px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px auto;
  margin-bottom: 5px;
`;

const ScCateRadioWrap = Styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;

const ScCateAlign = Styled.div`  
  display: flex;
  flex-direction: flex-start;
  border: 1px solid #2c278c;
  background-color: white;
  color: #2c278c;
  border-radius: 23px;
  width: 80px;
  height: 30px;
  align-items: center;
  margin: 5px;
  justify-content: center;
  font-size: 0.815em;  
  input:checked + label {
    border: 1px solid #2c278c;
    background-color: #2c278c;
    color: white;
    border-radius: 23px;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;     
  label {
    &:hover {
    cursor: pointer;
  } 
  }  
  }
`;

const ScPriceWrap = Styled.div`  
  width: 674px;
  height: 101px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px auto;
  margin-bottom: 80px;
`;

const ScPriceAlign = Styled.div`
  display: flex;  
  width: 674px;
  justify-content: center;
  font-size: 0.915em;
  &:hover {
    cursor: pointer;
  }
`;


const ScButton = Styled.div`
  background-color: #2c278c;
  color: white;
  width: 756px;
  height: 100px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

export default RandomCoffee