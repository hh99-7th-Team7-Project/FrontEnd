import React from 'react';
import styled from 'styled-components';
import apis from '../../shared/api/main';
import { getCookie } from '../../shared/Cookie';

const UserInfoUpdate = ({ setNick }) => {
  const userName = getCookie('nickname');
  const nickInputRef = React.useRef(userName);
  const [oknickname, setokNickname] = React.useState(false);
  const [condition, setCondition] = React.useState('값이 나오나');

  // console.log(condition);


  return (
    <div>
      <ScUpdate
        ref={nickInputRef}
        defaultValue={userName}
        maxLength={8}
        onChange={() => {
          setNick(nickInputRef.current.value);
        }}
      />
    </div>
  );
};

const ScUpdate = styled.input`
  height: 40px;
  width: 140px;
  border-radius: 10px;
  border: 1px solid #4147d5;
  color: #4147d5;
  padding: 0 0 0 10px;
`;

export default UserInfoUpdate;
