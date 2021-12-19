import React from 'react';
import AuthContext from './AuthContext';
import UiContext from './UiContext';

const ParentContext = ({ children }) => (
  <UiContext>
    <AuthContext>{children}</AuthContext>
  </UiContext>
);

export default ParentContext;
