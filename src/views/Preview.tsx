import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { StoresI } from '../stores';

const Preview: React.FC<StoresI> = ({ account }) => {
  useEffect(() => {
    account.init();
  }, []);

  return (
    <div>
      <h1>✨ imagical ✨</h1>
      <Link to="/feed">Go to feed!</Link>
    </div>
  );
};

export default inject('account')(observer(Preview));
