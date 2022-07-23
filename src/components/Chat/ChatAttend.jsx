import React from 'react';
import styled from 'styled-components';

const ChatAttend = ({ members, count, totalcount }) => {



  return (
    <ChatTop>
      <div  style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}> 
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
      {members &&<div style={{display:"flex",gap:"20px", alignItems:"center"}}> <Profile src={members[0]?.userProfile}></Profile> <span>{members[0]?.userTitle}</span> </div>} 
        </div> 
        <div style={{display:"flex",gap:"20px", alignItems:"center"}}>   
        <span >
          {count} / {totalcount} 명
        </span >
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
        </div>
    </ChatTop>
  );
};

const ChatTop = styled.div`
  width: 90%;
  margin: auto;
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
