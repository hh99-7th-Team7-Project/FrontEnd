import React from 'react';
import styled from 'styled-components';

const UserInfoUpdate = ({ setNick ,nick}) => {
  const nickInputRef = React.useRef();

  return (
    <div>
      <ScUpdate
        ref={nickInputRef}
        defaultValue={nick}
        maxLength={8}
        onChange={() => {
          setNick(nickInputRef?.current.value);
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
