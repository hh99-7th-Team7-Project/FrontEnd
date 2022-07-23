import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as partyActions } from '../../redux/modules/party';

import { useNavigate } from 'react-router';

const Party = (props) => {
  //   const smallSize = window.outerWidth < 500 ? true : false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const today = useRef(new Date());
  const topRef = useRef();

  const partydata = useSelector((state) => state?.party?.list);
  const partyList = partydata?.partyList;
  const totalPage = partydata?.totalPage;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // 날짜가 지난 파티 완료처리 해주기
  const year = today.current.getFullYear();
  const month = ('0' + (today.current.getMonth() + 1)).slice(-2);
  const day = ('0' + today.current.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;
  const hours = ('0' + today.current.getHours()).slice(-2);
  const minutes = ('0' + today.current.getMinutes()).slice(-2);
  let isCompleted = Array(partyList?.length).fill(false);

  const [searchKeyword, setSearchKeyword] = React.useState('');

  const [curPage, setCurPage] = useState(1);
  const [bottom, setBottom] = useState(null);
  const bottomObserver = useRef(null);

  // observer 적용
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurPage((pre) => pre + 1);
        }
      },
      { threshold: 0.25, rootMargin: '80px' }
    );
    bottomObserver.current = observer;
  }, []);

  React.useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  React.useEffect(() => {
    if (searchKeyword !== '') {
      dispatch(partyActions.getKeywordPartyDB(curPage, searchKeyword));
      return;
    }
    dispatch(partyActions.getPartyDB(curPage));
  }, [curPage]);

  // const onChange = (e) => {
  //   if (CheckSpecial(e.target.value)) {
  //     return alert('특수문자는 입력할 수 없습니다');
  //   }
  //   setSearchKeyword(e.target.value);
  // };

  // const search = () => {
  //   if (searchKeyword === "") {
  //     setModalContent("검색어를 입력해주세요!");
  //     setModalOpen(true);
  //     return;
  //   }
  //   setCurPage(1);
  //   dispatch(partyActions.getKeywordPartyDB(1, searchKeyword));
  // };

  const cancel = () => {
    setSearchKeyword('');
  };

  const handleScroll = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const moveDetail = (partyId) => {
    navigate(`/partydetail/${partyId}`);
  };

  return (
    <React.Fragment>
      <PartyContainer>
        <PartyWrap>
          <div ref={topRef}></div>
          {partyList?.map((p, idx) => {
            let cardImg =
              'https://user-images.githubusercontent.com/91959791/170146663-47e7a0ce-6db5-40f3-ad7e-c078779ed87f.png';
            let btnBg = '#43CA3B';
            let textColor = '#000';
            let btnText = '모집내용확인';
            const memberOk = p.completed ? false : true;
            const timeover = p.partyDate === '마감되었습니다.';
            if (timeover) {
              cardImg =
                'https://user-images.githubusercontent.com/91959791/170146585-0d85e1a8-f60b-4b76-b634-dbc8f6a73d64.png';
              btnBg = '#959595';
              textColor = '#D9D9D9';
              btnText = '마감 되었어요😢';
            }
            const curPeople = p.currentPeople ? p.currentPeople : 0;
            if (p.partyDate === dateString) {
              const tempT = p.partyTime.split(':');
              if (parseInt(tempT[0]) === parseInt(hours)) {
                if (parseInt(tempT[1]) <= parseInt(minutes)) {
                  return;
                }
              } else if (parseInt(tempT[0]) < parseInt(hours)) {
                return;
              }
            } else if (p.partyDate < dateString) {
              return;
            }

            return (
              <div
                key={idx}
                // bg="#FAFAFA"
                shadow="1px 3px 10px rgba(69, 69, 69, 0.2)"
                radius="16px"
                width="auto"
                height="275px"
                padding="17px 16px"
                margin="0 0 24px"
                flexColumn
                bgImg={cardImg}
                bgSize="cover"
              >
                <div>
                  <span>{p.title}</span>
                  <sapn>{p.beforeTime}</sapn>
                  <img
                    src={
                      'https://user-images.githubusercontent.com/91959791/169491140-498a7ef5-5a76-4301-8771-d13449d3b92e.png'
                    }
                  />
                  <span>{p.nickname}</span>
                  <span>
                    {p.partyDate} {!timeover && `(시간 ${p.partyTime})`}
                  </span>
                  <span>
                    {curPeople}/{p.maxPeople}명{' '}
                    {memberOk && '(모집이 완료됐어요!)'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    moveDetail(p.partyId);
                  }}
                >
                  <span>{btnText}</span>
                </button>
              </div>
            );
          })}
          {totalPage > curPage ? <div ref={setBottom}></div> : null}
        </PartyWrap>
      </PartyContainer>
    </React.Fragment>
  );
};

const PartyContainer = styled.div`
  // position: relative;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: auto;
  overflow: scroll;
`;

const PartyWrap = styled.div`
  // position: absolute;
  top: 64px;
  height: 100%;
`;

// const SearchInput = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   position: fixed;
//   top: 64px;
//   z-index: 10;
//   width: 100%;
//   max-width: 500px;
//   box-sizing: border-box;
//   padding: 20px 14px 24px;
//   background-color: #fff;
// `;

// const MenubarContainer = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 10;
// `;

// const CreatPartyBtn = styled.div`
//   position: fixed;
//   right:
//   ${(props) => (props.smallSize ? `calc(0vw + 14px);` : `calc(50% - 236px);`)}
//   bottom: 113px;
// `;

// const UpBtn = styled.div`
//   position: fixed;
//   right:
//   ${(props) => (props.smallSize ? `calc(0vw + 14px);` : `calc(50% - 236px);`)}
//   bottom: 197px;
// `;

export default Party;
