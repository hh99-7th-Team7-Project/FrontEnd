import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Brand from './Slide/Brand';
import Coffee from './Slide/Coffee';


const CoffeeCategory = () => {

    const [category, setCategory] = useState(false);

    const [ brandVisible , setBrandVisible ] = useState(false);
    const [ categoryVisible , setCategoryVisible ] = useState(false);

    const [ showOption , setShowOption ] = useState(false);

    const ref = useRef();

    const handleToggleOption = () => setShowOption((prev)=>!prev)

    const handleClickOutside = (e) => {
        // console.log(ref.current.contain(e.target))
        if (showOption && !ref.current.contains(e.target)){
            setShowOption(false)
        }
    }
    
    useEffect(()=>{
        if (showOption) document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])



  return (
    <div style={{maxWidth:"1230px",width:"84vw", margin:"auto", position:"relative"}}>
            <ScNavbarWrap>
                <ScButtonWrap >
                    <ScCategoryBox  ref={ref} onClick={()=>{
                        setBrandVisible(!brandVisible);
                        setCategory(true);
                        handleToggleOption();
                        }}>브랜드</ScCategoryBox>
                    <p>|</p>
                    <ScCategoryBox  onClick={()=>{
                        setCategoryVisible(!categoryVisible);
                        setCategory(false);
                        handleToggleOption();
                        }}>음료</ScCategoryBox>

                </ScButtonWrap>
            </ScNavbarWrap>
            
            <div>
                {brandVisible ?  <Brand />: null }
            </div>
                {categoryVisible ? <Coffee ref={ref} />: null}
            
    </div>
    )
}

const ScButtonWrap = styled.div`
    margin: 20px auto;
    display: flex;
    gap: 28px;
    font-size: 14pt;
    &:hover {
        cursor: pointer;
    }
`;

const ScNavbarWrap =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ScCategoryBox = styled.div`
    position: relative;
    
`;

export default CoffeeCategory