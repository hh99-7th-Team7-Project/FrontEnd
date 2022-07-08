import React from 'react';
import PostChat from '../../components/Chat/PostChat';
import { useParams } from 'react-router-dom';

const ChatDetail = () => {
  const { pid } = useParams();
  console.log(pid);
  return (
    <div>
      <span>ChatDetail</span>
      <PostChat pid={pid}></PostChat>
    </div>
  );
};

export default ChatDetail;
