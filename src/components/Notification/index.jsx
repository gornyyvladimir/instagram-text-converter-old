import React from 'react';
import { ReactComponent as SuccessIcon } from './success.svg';
import './styles.css';

const Notification = ({ show, children }) => (
  <div className={`notification ${show ? '' : 'hide'}`}>
    <div className="icon">
      <SuccessIcon width="32px" height="32px" fill="#fff"/>
    </div>
    <p className="text no-margin">{children}</p>
  </div>
);

export default Notification;
