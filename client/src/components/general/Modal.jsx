/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'



const modal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #808080ad;
  display: grid;
  place-items: center;
`;

function Modal({ children, modalName, status }) {
  if (status === modalName) {
    return (
      <div css={modal}>
        {children}
      </div>
    );
  } else {
    return null;
  }
}
export {Modal}