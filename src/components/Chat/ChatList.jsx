import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ChatCard = ({ pid }) => {
  const navigate = useNavigate();
  console.log(pid);
  return (
    <Wrap onClick={() => navigate(`/chat/${pid}`)}>
      <span>title</span>
      <span>모집</span>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px;
  border: 2px solid black;
`;

export default ChatCard;
