import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as partyActions } from '../redux/modules/party';
import { actionCreators as chatActions } from '../redux/modules/chat';
import { actionCreators as handleActions } from '../redux/modules/handle';

import { Grid, Text, Icon, Button, Image } from '../elements/element';

const PartyDetail = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { partyId } = useParams();
  const userInfo = useSelector((state) => state?.user?.userInfo);
  const curtParty = useSelector((state) => state?.party?.curtParty);
  const menuColor = [false, true, false, false, false]; // 메뉴바 색

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalType, setModalType] = useState('');

  React.useEffect(() => {
    dispatch(handleActions.isPagename(''));
    dispatch(partyActions.getOnePartyDB(partyId));
  }, []);

  const partymember = curtParty?.partyMember;
  const img =
    curtParty?.userImgUrl !== '없음'
      ? curtParty?.userImgUrl
      : 'https://user-images.githubusercontent.com/91959791/163972509-ca46de43-33cf-4648-a61d-47f32dfe20b3.png';
  const attendBtn = partymember?.some((m) => m.nickname === userInfo.nickname)
    ? '참가취소하기'
    : '참가하기';
  const myMode = userInfo?.nickname === curtParty?.nickname ? true : false;
  const isMember = partymember?.some((m) => m.nickname === userInfo.nickname);
  const isChief = userInfo?.nickname === curtParty?.nickname ? true : false;
  const isCompleted = partymember?.length === curtParty?.maxPeople;

  const attendParty = (partyId) => {
    if (curtParty.nickname === userInfo.nickname) {
      setModalContent('모임 주최자는 취소할수 없어요!!');
      setModalType('check');
      setModalOpen(true);
      return;
    }
    if (partymember.length === curtParty.maxPeople) {
      if (attendBtn === '참가취소하기') {
        dispatch(partyActions.attendPartyDB(partyId));
        return;
      }
      setModalContent('이미 완료된 모임입니다!');
      setModalType('check');
      setModalOpen(true);
      return;
    }
    dispatch(partyActions.attendPartyDB(partyId));
  };

  const enterChatRoom = (partyId) => {
    if (isMember) {
      dispatch(chatActions.enterChatDB(partyId));
      navigate(`/chatroom/${partyId}`);
    } else {
      setModalContent(`모임에 참가한 사람들만 \n대화방에 입장할 수 있습니다!`);
      setModalType('check');
      setModalOpen(true);
    }
  };

  const deleteParty = (partyId) => {
    setModalContent('모임을 삭제하시겠어요? 😭');
    setModalType('choice');
    setModalOpen(true);
  };

  const deleteCheck = (check) => {
    if (check) {
      dispatch(partyActions.deletePartyDB(curtParty.partyId));
      navigate('/party', { replace: true });
    }
  };
  return (
    <React.Fragment>
      <PartyContainer>
        <PartyWrap>
          <Grid padding="64px 0 8px" bg="#F2F3F6" height="auto">
            <Grid
              isFlex
              padding="13px 14px"
              borderBottom="1px solid #DEDEDE"
              bg="#fff"
              height="auto"
            >
              <Grid flexRow margin="0">
                <Image
                  type="circle"
                  width="32px"
                  height="32px"
                  margin="0 14px 0 0"
                  src={img}
                />
                <Grid>
                  <Text margin="0" size="12px" bold="500">
                    [{curtParty?.userTitle}] {curtParty?.nickname}
                  </Text>
                </Grid>
              </Grid>
              {myMode && (
                <Grid width="auto" margin="0" flexRow>
                  <Grid
                    _onClick={() => {
                      navigate(`/partywrite/${curtParty.partyId}`);
                    }}
                  >
                    <Icon
                      type="partyEdit"
                      width="48px"
                      height="48px"
                      margin="auto"
                    />
                  </Grid>
                  <Grid
                    _onClick={() => {
                      deleteParty(curtParty.partyId);
                    }}
                  >
                    <Icon
                      type="partyDelete"
                      width="48px"
                      height="48px"
                      margin="auto"
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid
              padding="20px 14px"
              margin="0 0 8px"
              height="auto"
              flexColumn
              bg="#fff"
            >
              <Grid alignItems="left">
                <Grid isFlex margin="0 0 33.5px" height="auto">
                  <Text
                    margin="0 20px 0 0"
                    size="18px"
                    bold="600"
                    wordBreak="break-all"
                    lineHeight="24px"
                  >
                    {curtParty?.title}
                  </Text>
                  <Text
                    margin="0"
                    bold="400"
                    size="12px"
                    nowrap
                    color="#5E5E5E"
                    // ellipsis="1"
                  >
                    {curtParty?.beforeTime}
                  </Text>
                </Grid>
                <Grid flexRow justify="left" padding="0 0 10px">
                  <Grid width="18px">
                    <Icon
                      type="partyMountain"
                      width="18px"
                      height="17px"
                      margin="0 auto"
                      fill="#43CA3B"
                    />
                  </Grid>
                  <Text margin="0 12px" bold="500" size="14px">
                    {curtParty?.mountain} ({curtParty?.mountainAddress})
                  </Text>
                </Grid>
                <Grid flexRow justify="left" padding="0 0 10px">
                  <Grid width="18px">
                    <Icon
                      type="partyDate"
                      width="15px"
                      height="17px"
                      margin="0 auto"
                      fill="#43CA3B"
                    />
                  </Grid>
                  <Text margin="0 12px" bold="500" size="14px">
                    {curtParty?.partyDate} (시간 {curtParty?.partyTime})
                  </Text>
                </Grid>
                <Grid flexRow justify="left" padding="0 0 10px">
                  <Grid width="18px">
                    <Icon
                      type="partyPeople"
                      width="16px"
                      height="16px"
                      margin="0 auto"
                      fill="#43CA3B"
                    />
                  </Grid>
                  <Text
                    margin="0 8px 0 12px"
                    bold={isCompleted ? '700' : '500'}
                    size="14px"
                    color={isCompleted ? '#43CA3B' : '#000'}
                  >
                    {curtParty?.currentPeople}/{curtParty?.maxPeople}명{' '}
                    {isCompleted && '(모집이 완료됐어요!)'}
                  </Text>
                  {/* <Icon type="detailBtn" width="8px" height="13" margin="auto" _onClick={()=>{alert("참여인원정보 확인?")}} /> */}
                </Grid>
                <Grid padding="45px 0">
                  <Text margin="0" size="16px" bold="500" wordBreak="break-all">
                    {curtParty?.partyContent}
                  </Text>
                </Grid>
              </Grid>
            </Grid>
            <Grid padding="12px 14px 18px" margin="0" height="auto" bg="#fff">
              <Text margin="0" size="16px" bold="600">
                참여인원
              </Text>
              {partymember?.map((p, idx) => {
                const isCheif =
                  p.nickname === curtParty.nickname ? true : false;
                const image =
                  p?.userImgUrl !== '없음'
                    ? p?.userImgUrl
                    : 'https://user-images.githubusercontent.com/91959791/163972509-ca46de43-33cf-4648-a61d-47f32dfe20b3.png';
                return (
                  <Grid key={idx} margin="20px 0 0" isFlex>
                    <Grid flexRow>
                      <Image
                        type="circle"
                        width="32px"
                        height="32px"
                        margin="0 14px 0 0"
                        src={image}
                      />
                      <Grid>
                        <Text margin="0" size="12px" bold="500">
                          [{p.userTitle}] {p.nickname}
                        </Text>
                      </Grid>
                    </Grid>
                    {isCheif && (
                      <Image
                        src={
                          'https://user-images.githubusercontent.com/91959791/169491140-498a7ef5-5a76-4301-8771-d13449d3b92e.png'
                        }
                        width="31px"
                        height="31px"
                      />
                    )}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            flexRow
            bg="#fff"
            padding="44px 14px"
            alignItems="flex-start"
            height="auto"
          >
            <Button
              bgColor="#E6E6E6"
              border="none"
              height="48px"
              margin="0 17px 0 0"
              radius="8px"
              _onClick={() => {
                enterChatRoom(curtParty.partyId);
              }}
            >
              <Text margin="0" size="18px" bold="600" align>
                대화하기
              </Text>
            </Button>
            <Button
              bgColor={isCompleted && !isMember ? '#E6E6E6' : '#43CA3B'}
              border="none"
              height="48px"
              margin="0"
              radius="8px"
              _onClick={() => {
                attendParty(curtParty.partyId);
              }}
            >
              <Text
                margin="0"
                size="18px"
                bold="600"
                color={isCompleted && !isMember ? '#000' : '#fff'}
                align
              >
                {attendBtn}
              </Text>
            </Button>
          </Grid>
        </PartyWrap>

        <MenubarContainer>
          <Grid height="88px" maxWidth="500px" margin="auto">
            <Menubar menuColor={menuColor} />
          </Grid>
        </MenubarContainer>
      </PartyContainer>
    </React.Fragment>
  );
};

const PartyContainer = styled.div`
  // position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  overflow: scroll;
`;

const PartyWrap = styled.div`
  // position: absolute;
  top: 64px;
  height: 100%;
  padding: 0 0 80px;
  overflow: scroll;
`;

const MenubarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export default PartyDetail;
