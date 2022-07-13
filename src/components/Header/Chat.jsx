import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
