import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";


const button =css`{
        background-color: white;
        font-size: 1.2rem;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        border: none;
        width: 55px;
    }

&:hover {
    background-color: #b9caca;
}

&:active {
    color: gray;
    background-color: white;
}

`


const Button = ({ isDisabled = false, action, title, name }) => (
  <button css={button} disabled={isDisabled} onClick={action} name={name}>
    {title}
  </button>
);
;

export {Button}