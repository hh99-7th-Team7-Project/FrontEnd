import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Header from './Header/Header';
import { Comment, CommentCard, ImgCard, Review, CoffeeCategory } from '../components/CoffeeDetail/A-CoffeeDetailIndex';
import { useParams } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux';
import { __loadCoffeeDetail } from '../redux/modules/coffee';


const CoffeeDetail = () => {

  const { brand } = useParams();
  const { boardId } = useParams();

 
  const dispatch = useDispatch()
  const [like, setLike] = useState()


const coffeeReducer = useSelector((state) => state.coffee.coffee);
const commentReducer = useSelector((state) => state.comment.posts);

//Like자체 바뀔때마다 바뀌게 설정
useEffect(()=>{
 dispatch(__loadCoffeeDetail(brand, boardId))
 console.log(coffeeReducer?.loveCheck)
},[like])
console.log(like)

//불려올때마다 재설정되서 처음 불려올때만 like설정하게 바꿔둠
useEffect(()=>{
setLike(coffeeReducer?.loveCheck)
},[])
return (

    <>
      <div style={{margin:"auto"}}> 
        <Header/>
      </div>
      <div>
        <CoffeeCategory/>
      </div>   
      <Scwrap>
        <ScContainer>
            <ImgCard 
                url={coffeeReducer?.img}
                item={coffeeReducer}
                like={like}
                setLike={setLike}
            />
          <ScReviewCommentBox>
            <Review 
              item={coffeeReducer}
              reviewData={commentReducer}
              url={coffeeReducer?.img}
              />
          </ScReviewCommentBox>
        </ScContainer>
      </Scwrap>
      <ScCommentBox>
          <Comment 
            item={coffeeReducer}
          />          
          <CommentCard 
            boardId={boardId}
            brand={brand}
          />
      </ScCommentBox>
    </>
  )
}

const Scwrap = styled.div`
  display: column;
  max-width:1200px;
  width:80vw;
  margin: auto;
`;

const ScContainer = styled.div`
  display: column;
`;

const ScReviewCommentBox = styled.div`
  display: column;
`;

const ScCommentBox = styled.div`
  margin: 400px auto;
  width: 1900px;
  height: 1900px;
  background-color: #eee;
`;


export default CoffeeDetail;