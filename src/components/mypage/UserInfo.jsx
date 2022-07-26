import React from 'react';
import { getCookie } from '../../shared/Cookie';

const UserInfo = ({ email }) => {
  const userName = getCookie('nickname');

  return (
    <div>
      <div style={{ fontSize: '1.375em' }}>{userName}</div>
      <div style={{ fontSize: '0.875em' }}>{email}</div>
    </div>
  );
};

export default UserInfo;
