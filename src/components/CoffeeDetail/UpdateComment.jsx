import React  from 'react';
import Styled from 'styled-components';

/** redux */
import { useDispatch }from 'react-redux';
import { __updateComment } from '../../redux/modules/comment';


const UpdateComment = (props) => {

    const { showUpdate , setShowUpdate, commentId, brand, boardId } = props;   
    
    const dispatch = useDispatch();

    const reviewRef = React.useRef();


    const commentUpdate = (e) => {
        if (
            reviewRef.current.value !== ""
          )
          {
            dispatch(__updateComment({                
                data:
                {
                    review: reviewRef.current.value,
                    star: 5,
                },        
                brand,
                boardId,
                commentId
            })
        );
          
            // dispatch(__loadComment({brand, boardId}));

        } else {
            alert ("빈칸입니다.")
        }
    }

    const closeUpdate = () => {
        setShowUpdate(false);
    }


    return (
    <ScModalWrap>
        <ScModal>
            <ScTBWrap>
                <ScModalTitle>리뷰 수정하기</ScModalTitle>
                <ScButton onClick={closeUpdate}>닫기</ScButton>
            </ScTBWrap>
            <input type="text" ref={reviewRef} />
            <ScUpdateBtn onClick={()=>{
                commentUpdate();
                setShowUpdate(false);
                reviewRef.current.value=""                                
            }}>수정하기</ScUpdateBtn>
        </ScModal>
    </ScModalWrap>
    )
    }

const ScModalWrap = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: rgba(0,0,0,0.1);
    z-index: 99;
`;

const ScModal = Styled.div`
    padding: 45px 38px;
    height: auto;
    max-width: 720px;
    background-color: #fff;
    margin: 5% auto;
    position: relative;
`;

const ScTBWrap = Styled.div`
    display: flex;
`;

const ScModalTitle = Styled.h2`
    line-height: 36px;
    font-size: 1.75em;
    font-weight: 700;
    margin: 26px 0;
`;

const ScButton = Styled.button`
    position: absolute;
    top: 45px;
    right: 38px;
    background-color: transparent;
    border: 0;
    font-size: 1.375em;
    &:hover{
        cursor: pointer;
    }
`;

const ScUpdateBtn = Styled.button`
    &:hover{
        cursor: pointer;
    }
`;

export default UpdateComment;