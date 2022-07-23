// import React, { useState, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { useNavigate, useParams } from 'react-router';

// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators as partyActions } from '../redux/modules/party';
// import { actionCreators as handleActions } from '../redux/modules/handle';

// import 'date-fns';
// import DatePicker from 'react-datepicker';
// import ko from 'date-fns/locale/ko';
// import 'react-datepicker/dist/react-datepicker.css';

// const PartyWrite = (props) => {
//   const dispatch = useDispatch();
//   const { partyId } = useParams();
//   const is_edit = partyId ? true : false;
//   const partyItem = useSelector((state) => state?.party?.curtParty);
//   const origin = useSelector((state) => state?.handle?.partyBefore);
//   const selectTime = useSelector((state) => state?.handle?.selectTime);

//   const navigate = useNavigate();
//   const today = useRef(new Date());
//   const year = today.current.getFullYear();
//   const month = ('0' + (today.current.getMonth() + 1)).slice(-2);
//   const day = ('0' + today.current.getDate()).slice(-2);
//   const dateString = year + '-' + month + '-' + day;
//   const hours = ('0' + today.current.getHours()).slice(-2);
//   const minutes = ('0' + today.current.getMinutes()).slice(-2);

//   const [partyName, setPartyName] = React.useState(
//     is_edit ? partyItem?.title : ''
//   );
//   const [partyContent, setPartyContent] = React.useState(
//     is_edit ? partyItem?.partyContent : ''
//   );
//   const [dateValue, setDateValue] = React.useState(
//     is_edit ? partyItem?.partyDate : '선택'
//   );
//   const [timeValue, setTimeValue] = React.useState(
//     is_edit ? partyItem?.partyTime : '선택'
//   );
//   const [numberValue, setNumberValue] = React.useState(
//     is_edit ? partyItem?.maxPeople : null
//   );
//   const [mountValue, setMountValue] = React.useState(
//     is_edit ? partyItem?.mountain : '검색'
//   );
//   const [mountAddValue, setMountAddValue] = React.useState(
//     is_edit ? partyItem?.mountainAddress : ''
//   );

//   const [startDate, setStartDate] = useState(new Date());
//   const [dateOpen, setDateOpen] = useState(false);
//   const [dateHandle, setDateHandle] = useState(false);
//   const [timeOpen, setTimeOpen] = useState(false);
//   const [timeHandle, setTimeHandle] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchHandle, setSearchHandle] = useState(false);

//   React.useEffect(() => {
//     const pagename = is_edit ? '등산 모임 수정하기' : '등산 모임 만들기';
//     dispatch(handleActions.isPagename(pagename));
//     if (is_edit) {
//       dispatch(handleActions.partyBeforeDB(partyItem));
//       if (!partyItem) {
//         setModalContent(
//           `정보가 없어졌습니다! \n모임 상세 페이지로 돌아갑니다!`
//         );
//         setModalOpen(true);
//         setIsSend(true);
//         setIsError(true);
//       }
//     }
//   }, []);

//   const handleDateModal = () => {
//     setDateOpen(false);
//   };
//   const handleTimeModal = () => {
//     setTimeOpen(false);
//   };
//   const saveDateModal = () => {
//     const year = startDate.getFullYear();
//     const month = ('0' + (startDate.getMonth() + 1)).slice(-2);
//     const day = ('0' + startDate.getDate()).slice(-2);

//     const dateString = year + '-' + month + '-' + day;

//     setDateValue(dateString);
//     setDateOpen(false);
//   };
//   const saveTimeModal = () => {
//     if (selectTime?.division === '오전') {
//       selectTime.hour / 10 === 0
//         ? setTimeValue(`0${selectTime.hour}:${selectTime.minute}`)
//         : setTimeValue(`${selectTime.hour}:${selectTime.minute}`);
//     } else {
//       const sumHour = parseInt(selectTime.hour) + 12;
//       setTimeValue(`${sumHour}:${selectTime.minute}`);
//     }
//     setTimeOpen(false);
//   };

//   const formatDate = (d) => {
//     const date = new Date(d);
//     const monthIndex = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const [complete, setcomplete] = useState(is_edit ? true : false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const [isSend, setIsSend] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const inputName = (e) => {
//     setPartyName(e.target.value);
//   };
//   const inputContent = (e) => {
//     setPartyContent(e.target.value);
//   };
//   const inputNumber = (e) => {
//     setNumberValue(e.target.value);
//   };
//   const selectMnt = (data) => {
//     setMountValue(data.mountain);
//     setMountAddValue(data.mountainAddress);
//   };

//   let btnColor = '#E6E6E6';
//   let btnTextColor = '#000';
//   const titleColor = is_edit ? '#989898' : '#000';
//   if (
//     partyName !== '' &&
//     mountValue !== '검색' &&
//     dateValue !== '선택' &&
//     timeValue !== '선택' &&
//     numberValue &&
//     partyContent !== ''
//   ) {
//     btnColor = '#43CA3B';
//     btnTextColor = '#fff';
//   }

//   const addParty = () => {
//     if (
//       partyName === '' ||
//       mountValue === '검색' ||
//       mountAddValue === '' ||
//       dateValue === '선택' ||
//       timeValue === '선택' ||
//       partyContent === ''
//     ) {
//       setModalContent('입력되지 않은 부분이 있습니다!');
//       setModalOpen(true);
//       return;
//     }
//     if (numberValue <= 0 || numberValue === '') {
//       setModalContent('인원수는 자연수로만 입력해주세요!');
//       setModalOpen(true);
//       return;
//     }
//     if (numberValue % 1 !== 0) {
//       setModalContent('인원수는 소수를 포함할 수 없어요!!');
//       setModalOpen(true);
//       return;
//     }
//     if (dateValue === dateString) {
//       const tempT = timeValue.split(':');
//       if (parseInt(tempT[0]) === parseInt(hours)) {
//         if (parseInt(tempT[1]) <= parseInt(minutes)) {
//           setModalContent('선택된 시간은 이미 지났습니다!!');
//           setModalOpen(true);
//           return;
//         }
//       } else if (parseInt(tempT[0]) < parseInt(hours)) {
//         setModalContent('선택된 시간은 이미 지났습니다!!');
//         setModalOpen(true);
//         return;
//       }
//     } else if (dateValue < dateString) {
//       setModalContent('선택된 날짜는 이미 지났습니다!!');
//       setModalOpen(true);
//       return;
//     }
//     if (is_edit) {
//       if (numberValue < origin.currentPeople) {
//         setModalContent('현재 참가 인원수보다 적게 설정할 수 없습니다!');
//         setModalOpen(true);
//         return;
//       }
//       const num = parseInt(numberValue);
//       const partyData = {
//         title: partyName,
//         mountain: mountValue,
//         MountainAddress: mountAddValue,
//         partyDate: dateValue,
//         partyTime: timeValue,
//         maxPeople: num,
//         partyContent: partyContent,
//       };
//       dispatch(partyActions.editPartyDB(partyId, partyData));
//       setModalContent('수정 완료!');
//       setIsSend(true);
//       setModalOpen(true);
//       return;
//     }
//     const num = parseInt(numberValue);
//     const partyData = {
//       title: partyName,
//       mountain: mountValue,
//       MountainAddress: mountAddValue,
//       partyDate: dateValue,
//       partyTime: timeValue,
//       maxPeople: num,
//       partyContent: partyContent,
//     };
//     dispatch(partyActions.addPartyDB(partyData));
//     setModalContent('작성 완료!');
//     setIsSend(true);
//     setModalOpen(true);
//   };

//   const movePage = (check) => {
//     if (check) {
//       navigate(`/party`, { replace: true });
//     }
//   };
//   const moveBack = (check) => {
//     if (check) {
//       navigate(-1);
//     }
//   };

//   return (
//     <React.Fragment>
//       <PartyContainer>

//         <PartyWrap>
//           <div padding="96px 14px 100px">
//             <span>모임이름</span>
//             {is_edit ? (
//               <input
//                 placeholder="모임의 이름은 무엇인가요?"
//                 value={partyName || ''}
//                 disabled
//                 onChange={inputName}
//               />
//             ) : (
//               <input
//                 placeholder="모임의 이름은 무엇인가요?"
//                 value={partyName || ''}
//                 onChange={inputName}
//               />
//             )}
//             <span>세부 내용</span>
//             <input
//               textarea
//               value={partyContent || ''}
//               placeholder="어떤 활동을 함께 하고 싶으신가요?"
//               onChange={inputContent}
//             />
//             <div>
//               <span>날짜</span>
//               <div
//                 hover
//                 flexRow
//                 onClick={() => {
//                   setDateOpen(!dateOpen);
//                   setDateHandle(true);
//                 }}
//               >
//                 <span>{dateValue}</span>
//               </div>
//             </div>

//             <hr style={{ border: '1px solid #DEDEDE', width: '100%' }} />
//             <span>시간</span>
//             <button
//               onClick={() => {
//                 setTimeOpen(!timeOpen);
//                 setTimeHandle(true);
//               }}
//             />
//             <span>{timeValue}</span>

//             <hr style={{ border: '1px solid #DEDEDE', width: '100%' }} />
//             <span>인원</span>
//             <input
//               placeholder="숫자만 입력해주세요"
//               value={numberValue || ''}
//               onChange={inputNumber}
//             />
//             <hr style={{ border: '1px solid #DEDEDE', width: '100%' }} />
//             <div>
//               <div>
//                 <span>위치</span>
//                 {is_edit && <span>수정</span>}
//               </div>
//               {is_edit ? (
//                 <div
//                   onClick={() => {
//                     setModalContent('산정보는 수정이 불가능합니다!');
//                     setModalOpen(true);
//                   }}
//                 >
//                   <span>{mountValue}</span>
//                 </div>
//               ) : (
//                 <div
//                   onClick={() => {
//                     setSearchOpen(!searchOpen);
//                     setSearchHandle(true);
//                   }}
//                 >
//                   <span>{mountValue}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div>
//             {complete ? (
//               <button onClick={addParty}>
//                 <span>{is_edit ? '수정 완료' : '작성 완료'}</span>
//               </button>
//             ) : (
//               <button onClick={addParty}>
//                 <span>{is_edit ? '수정 완료' : '작성 완료'}</span>
//               </button>
//             )}
//           </div>
//         </PartyWrap>
//         <div>
//           {dateHandle && (
//             <DateModal className="dateModal" modalOpen={dateOpen}>
//               <div className="modal_container">
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   dateFormat="yyyy-MM-dd (eee)"
//                   showPopperArrow={false}
//                   inline
//                   locale={ko}
//                   popperModifiers={{ preventOverflow: { enabled: true } }}
//                   popperPlacement="auto"
//                   minDate={new Date()}
//                   renderCustomHeader={({
//                     date,
//                     decreaseMonth,
//                     increaseMonth,
//                   }) => (
//                     <div>
//                       <div className="fomrmatDate">{formatDate(date)}</div>
//                       <div width="auto" isFlex>
//                         <div onClick={decreaseMonth}>
//                           <span>&lt;</span>
//                         </div>
//                         <div onClick={increaseMonth}>
//                           <span>&gt;</span>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 />
//                 <div>
//                   <button onClick={handleDateModal}>
//                     <span>취소</span>
//                   </button>
//                   <button
//                     onClick={saveDateModal}
//                     radius="8px"
//                     border="none"
//                     bgColor="#43CA3B"
//                   >
//                     <span>확인</span>
//                   </button>
//                 </div>
//               </div>
//             </DateModal>
//           )}

//           {/* {timeHandle && (
//             <DateModal className="dateModal" modalOpen={timeOpen}>
//               <div className="modal_container">
//                 <Grid height="auto">
//                   <ScrollTime />
//                 </Grid>
//                 <Grid flexRow height="auto" padding="10px 20px">
//                   <button
//                     _onClick={handleTimeModal}
//                     margin="0 10px 0 0"
//                     radius="8px"
//                     border="none"
//                     bgColor="#E6E6E6"
//                   >
//                     <Text margin="0 auto" align bold="700">
//                       취소
//                     </Text>
//                   </button>
//                   <button
//                     _onClick={saveTimeModal}
//                     radius="8px"
//                     border="none"
//                     bgColor="#43CA3B"
//                   >
//                     <Text margin="0 auto" align color="white" bold="700">
//                       확인
//                     </Text>
//                   </button>
//                 </Grid>
//               </div>
//             </DateModal>
//           )} */}

//           {/* {searchHandle && (
//             <DateModal className="dateModal" modalOpen={searchOpen}>
//               <div className="modal_container">
//                 <Grid>
//                   <SearchModal
//                     selectMnt={selectMnt}
//                     onClose={setSearchOpen}
//                     scroll="scroll"
//                   />
//                 </Grid>
//               </div>
//             </DateModal>
//           )}  */}
//         </div>
//       </PartyContainer>
//     </React.Fragment>
//   );
// };

// const FadeIn = keyframes`
//   0% {
//     bottom: -100%;
//     background-color: transparent;
//   }
//   85% {
//     background-color: transparent;
//   }
//   100% {
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.6);
//   }
// `;

// const FadeOut = keyframes`
//   0% {
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.6);
//   }
//   15% {
//     background-color: transparent;
//   }
//   100% {
//     bottom: -100%;
//     background-color: transparent;
//   }
// `;

// const DateModal = styled.div`
//   background-color: rgba(0, 0, 0, 0.6);
//   position: fixed;
//   bottom: ${(props) => (props.modalOpen ? '0' : '-100%')};
//   left: 0;
//   right: 0;
//   z-index: 100px;
//   width: 100%;
//   max-width: 500px;
//   margin: 0 auto;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   animation: ${(props) => (props.modalOpen ? FadeIn : FadeOut)} 0.5s ease-out
//     alternate;
//   .modal_container {
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//     background-color: #fff;
//     width: 100%;
//     max-width: 500px;
//     margin: 0 auto;
//   }
//   .react-datepicker {
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//     border: none;
//     border-top: 1px solid #ccc;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//   }
//   .react-datepicker__header {
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//     padding-top: 0.8em;
//     background-color: white;
//     width: 100%;
//     max-width: 500px;
//     margin: auto;
//     border: none;
//     font-size: 2.5rem;
//   }
//   .react-datepicker__month {
//     margin: 0.4em;
//   }
//   .react-datepicker__day-name {
//     font-size: 1.6rem;
//     font-weight: 500;
//     margin: 3.8%;
//     color: #959595;
//   }
//   .react-datepicker__day {
//     width: 25px;
//     height: 25px;
//     font-size: 2rem;
//     margin: 3%;
//     line-height: 1.8;
//     text-align: center;
//   }
//   .react-datepicker__navigation {
//     top: 2em;
//     line-height: 1.7em;
//     border: 0.45em solid transparent;
//   }
//   .fomrmatDate {
//     font-size: 22px;
//     font-weight: 500;
//   }
//   .react-datepicker__day--selected {
//     color: #43ca3b;
//     border: none;
//     background-color: transparent;
//     font-weight: 700;
//     text-align: center;
//     line-height: 1.8;
//   }
// `;

// const PartyContainer = styled.div`
//   background-color: #fff;
//   width: 100%;
//   height: 100%;
//   max-width: 500px;
//   margin: auto;
//   // overflow: hidden;
// `;

// const PartyWrap = styled.div`
//   top: 64px;
//   height:100%
//   width: 100%;
//   overflow-y: auto;
//   input[type="number"]::-webkit-outer-spin-button,
//   input[type="number"]::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     -moz-appearance: none;
//     appearance: none;
//   }
// `;

// export default PartyWrite;
