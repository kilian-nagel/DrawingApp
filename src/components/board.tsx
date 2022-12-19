import React, { useEffect } from 'react';
import { initBoardPixels } from '../controllers/board';
import { handlePencilClick } from '../controllers/pencil';
import "../styles/board.css";

function Board() {
    useEffect(()=>{
        initBoardPixels();
    },[])
    return (
        <div className="board" id="board" onClick={(e)=>handlePencilClick(e)}>

        </div>
    );
}

export default Board;