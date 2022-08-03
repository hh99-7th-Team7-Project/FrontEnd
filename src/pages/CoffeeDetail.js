import React, {useEffect, useState} from 'react'
import styled from 'styled-components';

/** component */
import { Comment, CommentCard, ImgCard, Review } from '../components/CoffeeDetail/A-CoffeeDetailIndex';

/** react-router-dom */
import { useParams } from 'react-router-dom';

/** redux */
import { useDispatch,useSelector } from 'react-redux';
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
//  console.log(coffeeReducer?.loveCheck)
},[like])
// console.log(coffeeReducer)
//불려올때마다 재설정되서 처음 불려올때만 like설정하게 바꿔둠
useEffect(()=>{
setLike(coffeeReducer?.loveCheck)
},[])


return (

    <>   
        <div>
          {/* <CoffeeCategory/> */}
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
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: 40px auto 0;
    max-width:100%;
  }
`;

const ScContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width:100%;
  }
`;

const ScReviewCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px){
    display: flex;
    height: 100px;
    /* border: 1px red solid; */
    flex-direction: column;
    margin: auto;
    width:100%;
  }
`;

const ScCommentBox = styled.div`
  margin: 400px auto;
  max-width: 1900px;
  width: 100%;
  background-color: rgb(44,39,140,10%);
  @media screen and (max-width: 768px){
    margin: 300px auto 0;
  }
`;


export default CoffeeDetail;