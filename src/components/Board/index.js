import React from 'react';
import styled from 'styled-components';
import Square from "../Square";

const BoardWrapper = styled.div`
    background-color: purple;
    border: 0.5em solid purple;
    border-radius: 0.5em;
    box-sizing: border-box;
    width: 22em;
    height 22em;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
`;

const Board = ({ squares, onClick }) => (
    <BoardWrapper>
        {squares.map((square,i) => {
            return <Square key={i} value={square} onClick={() => onClick(i)}/>
        })}
    </BoardWrapper>
)

export default Board;