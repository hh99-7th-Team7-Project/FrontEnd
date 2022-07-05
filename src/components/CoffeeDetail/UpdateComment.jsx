import React from 'react'
import Styled from 'styled-components';
import { useDispatch }from 'react-redux';
import { __updateComment } from '../../redux/modules/comment';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateComment = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reviewRef = React.useRef();

    console.log(id);

    const onChange = (e) => {
        if (
            reviewRef.current.value !== ""
          )
          {
            dispatch(__updateComment({                
                Review: reviewRef.current.value,
                id: id,
                
            }),
        );
            navigate(`/angelinus/americano/${id}/review`)
        } else {
            alert ("빈칸입니다.")
        }
    }


  return (
    <ScModalWrap>
        <ScModal>
            <ScTBWrap>
                <ScModalTitle>리뷰 수정하기</ScModalTitle>
                <ScButton>닫기</ScButton>
            </ScTBWrap>
            <input type="text" ref={reviewRef} />
            <button onClick={()=>{
                onChange();
                reviewRef.current.value=""
            }}>수정하기</button>
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
    background: rgba(0,0,0,0.6);
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
    font-size: 28px;
    font-weight: 700;
    margin: 26px 0;
`;

const ScButton = Styled.button`
    position: absolute;
    top: 45px;
    right: 38px;
    background-color: transparent;
    border: 0;
    font-size: 22px;
`;

export default UpdateComment;