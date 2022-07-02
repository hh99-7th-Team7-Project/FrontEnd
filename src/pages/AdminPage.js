import React, { useEffect, useRef, useState } from 'react'
import CoffeeCard from '../components/main/CoffeeCard'
import { useDispatch, useSelector } from 'react-redux';
import { __createCoffee, __loadCoffee } from '../redux/modules/coffee';
import Styled from 'styled-components';

const AdminPage = () => {
  const dispatch = useDispatch();
  const coffeeReducer = useSelector((state) => state.coffee.list);

  const [selectedImages, setSelectedImages] = useState([]);
  const [fileImage, setFileImage] = React.useState("");
  const brandRef = useRef()
  const categoryRef = useRef()
  const nameRef = useRef()
  const sizeRef = useRef()
  const priceRef = useRef()

  useEffect(()=>{
    dispatch(__loadCoffee())
    console.log("돌아가?")
},[])

  const addcoffee = (e) =>{
    e.preventDefault();

    const form = new FormData();

    for(let i = 0 ; i < selectedImages.length ; i++){
        form.append("images", selectedImages[i]);
    }
        // form.append('brand', brandRef.current.value);
        form.append('category', categoryRef.current.value);
        form.append('name', nameRef.current.value);
        form.append('size', sizeRef.current.value);
        form.append('price', priceRef.current.value);
     
    dispatch(
        __createCoffee(
          // formData: form
    )
    )
  
  }

  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setSelectedImages(e.target.files)
  };

  return (
    <>
    <form>
    <div>추가하기</div>
    <select ref={brandRef} defaultValue="default">
                        <option>---브랜드---</option>
                        <option>스타벅스</option>
                        <option>빽다방</option>
                        <option>커피빈</option>
                        <option>이디야</option>
                        <option>컴포즈커피</option>
                        <option>드롭탑</option>
                        <option>탐앤탐스</option>
                        <option>더벤티</option>
                        <option>할리스</option>
                        <option>폴바셋</option>
                        <option>카페베네</option>
                        <option>엔젤인어스</option>
                    </select>
    <select ref={categoryRef} defaultValue="default">
                        <option>---카테 고리---</option>
                        <option>커피</option>
                        <option>논커피</option>
                        <option>스무디</option>
                        <option>에이드</option>
                        <option>차</option>
                    </select>
    <input type='text' ref={nameRef} placeholder="커피이름"/>
    <input type='text' ref={sizeRef} placeholder="사이즈"/>
    <input type='text' ref={priceRef}placeholder="가격"/>
    {fileImage && (
              <img
                alt="sample"
                src={fileImage}
                style={{ margin: "10px auto 7px 80px", maxWidth: "300px", maxHeight: "250px" }}
              />)}
    <input type="file" accept="image/*" onChange={saveFileImage}/>
    <button onClick={addcoffee}>등록하기</button>
    </form>
    <SCcardWrap>
                {coffeeReducer.map((item, index) => {                    
                    return (<CoffeeCard key={index} item={item}/>)
                })}        
    </SCcardWrap>
    </>
  )
}

export default AdminPage

const SCcardWrap = Styled.div`
    margin: auto;
    /* width: 80%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid black;
`;
