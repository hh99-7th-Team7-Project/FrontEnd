import React from 'react';
import styled from 'styled-components';

const ChatAttend = ({ members, count, totalcount }) => {



  return (
    <ChatTop>
      <div>        
        <span>
          {count} / {totalcount} 명
        </span>
        {members &&
          members.map((data, k) => {
            return (
              <div key={k} style={{display:"flex",justifyContent:"center"}}>
                <Wrap>
                  <Profile src={data?.userProfile}></Profile>
                  {/* <p>{data?.userTitle}</p> */}
                </Wrap>
              </div>
            );
          })}
        </div>
    </ChatTop>
  );
};

const ChatTop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  & span {
    font-size: 20px;
    margin-right: 5px;
  }
  & div {
    display: flex;
    align-items: center;
  }

`;

const Wrap = styled.div`
  align-items: center;
  margin: 10px 5px;
  & p {
    display: inline-block;
    margin-left: 10px;
  }
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export default ChatAttend;
