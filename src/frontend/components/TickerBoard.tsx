import React from 'react';
import styled from 'styled-components';

const TickerBoardContainer = styled.div`
  margin-top: 20px;
  border: 1px solid black;
`;

export default function TickerBoard() {
  return (
    <TickerBoardContainer>
      <h1>TickerBoard</h1>
    </TickerBoardContainer>
  );
}
