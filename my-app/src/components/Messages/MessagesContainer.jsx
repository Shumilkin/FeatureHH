import React, { useRef, useEffect, useState } from "react";
import BackToUp from '@uiw/react-back-to-top';
import styled from 'styled-components';

const Warpper = styled.div`
  overflow: auto;
  white-space: normal;
  width: 300px;
  height: 300px;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    background: #00000038;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #595959;
  }
  p {
    display: inline;
    background: rgba(0, 0, 0, 0.12);
    color: transparent;
  }
`;

export default function Scroll() {
    const $dom = useRef(null);

    return (
        <Warpper >
            <h1>React simple scroll up with onScroll progress</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
            <h2>Scroll down ↓</h2>
            <p>Declarative views make your code more predictable and easier to debug.</p>
            <h2 style={{ height: 1200 }}>Scroll down ↓</h2>
            <p>Build encapsulated components that manage their own state, then compose them to make complex UIs. </p>
            <p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
            <BackToUp top={0} element={$dom.current} style={{ float: 'right' }}>Top</BackToUp>
        </Warpper>
    );
}