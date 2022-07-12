import React, { useState } from 'react'
import Styled from 'styled-components';
import Paiks_Cream_Crape from '../../Image/MainBanner/Paiks_Cream_Crape.jpg';
import Paiks_IceCream_Ratte from '../../Image/MainBanner/Paiks_IceCream_Ratte.jpg';
import Compose from '../../Image/MainBanner/Compose.jpg';
import styled from 'styled-components';

const ImgSlide = () => {
    

    // 이미지 슬라이드 버튼
    const [img, setImg] = useState(0);

    const firstDot = () => {
        setImg(0)
    }
    const secondDot = () => {
        setImg(-100)
    }
    const thirdDot = () => {
        setImg(-200)
    }
    
        return (
            <ScWrap>
                <ScImgSlideWrap img={img}>
                    <ScImg src="https://paikdabang.com/wp-content/uploads/2022/05/빽다방_홈페이지_main_5월_아이스크림라떼.jpg">
                        <ScContentWrap>
                            <ScDotAlign>
                                <ScDotWrap>
                                    <ScDot onClick={firstDot} img={img}/>
                                    <ScDot onClick={secondDot} img={img}/>
                                    <ScDot onClick={thirdDot} img={img}/>
                                </ScDotWrap>
                            </ScDotAlign>
                        </ScContentWrap>
                    </ScImg>
                    <ScImg src="https://paikdabang.com/wp-content/uploads/2022/06/빽다방_홈페이지_main_코코넛2종.jpg">
                        <ScContentWrap>
                                <ScDotAlign>
                                    <ScDotWrap>
                                        <ScDot onClick={firstDot} img={img}/>
                                        <ScDot onClick={secondDot} img={img}/>
                                        <ScDot onClick={thirdDot} img={img}/>
                                    </ScDotWrap>
                                </ScDotAlign>
                        </ScContentWrap>
                    </ScImg>
                    <ScImg src="//admin.hollys.co.kr/upload/main/banner/mainBanner_202205240354532080.jpg">
                        <ScContentWrap>
                                <ScDotAlign>
                                    <ScDotWrap>
                                        <ScDot onClick={firstDot} img={img}/>
                                        <ScDot onClick={secondDot} img={img}/>
                                        <ScDot onClick={thirdDot} img={img}/>
                                    </ScDotWrap>
                                </ScDotAlign>
                        </ScContentWrap>
                    </ScImg>
                </ScImgSlideWrap>
            </ScWrap>
        )
    }


const ScWrap = Styled.div`
    overflow: hidden;
    width: 100%; 
`;

const ScImgSlideWrap = Styled.div`
    position: relative;
    display: flex;
    width: 500vw;    
    transition: 0.5s ease-in-out;
    transform : translate(${props => props.img}vw);
`;


const ScImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: left;
    width: 100vw;
    height: 500px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat : no-repeat;
    float: left;
`;

const ScContentWrap = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100px;
    height: 70px;
    padding-top: 20px;
`;

const ScDotAlign = Styled.div`
    align-items: center;    
    /* width: 700px; */
    margin: auto;

`;

const ScDotWrap = Styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: space-between;
    width: 80px;
        
    
`;

const ScDot = Styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: black;    
    &:hover{
        cursor: pointer;
    }
    &:nth-child(1){
        opacity: ${props => props.img === 0 ? "1" : "0.2"}
    }
    &:nth-child(2){
        opacity: ${props => props.img === -100 ? "1" : "0.2"}
    }
    &:nth-child(3){
        opacity: ${props => props.img === -200 ? "1" : "0.2"}
    }
`;

export default ImgSlide