import React from 'react'
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

export default function spenner() {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: "#4B6862";
`;
    return (
        <div>
            <RingLoader css={override} size={150}/>
        </div>
    )
}
