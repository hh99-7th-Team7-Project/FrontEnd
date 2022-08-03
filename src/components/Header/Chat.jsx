import React from 'react';
/** CSS */
import styled from 'styled-components';
/** react-router-dom */
import { useNavigate } from 'react-router-dom';


const Chat = () => {
  const navigate = useNavigate();
  return (
    <A
      onClick={() => {
        navigate('/chatposts');
      }}
    >
      채팅
    </A>
  );
};

const A = styled.span`
  margin-right: 10px;
`;

export default Chat;
