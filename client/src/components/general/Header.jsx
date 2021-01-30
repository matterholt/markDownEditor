/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import React from "react";

const header = css`
  display: flex;
  align-items: center;
  font-size: 10px;
  justify-content: space-between;
  padding: 0 15px;
  color: #4a7677;
`;

const Header = () => {
  return (
      <header css={header}>
      <h1>Getting the Mark on</h1>
    </header>
  );
};

export default Header;
