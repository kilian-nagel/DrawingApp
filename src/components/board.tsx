import React, { useEffect } from 'react';
import { initBoardPixels, redirectClickEvent } from '../controllers/board';
import { handlePencilClick, handlePencilHoldEvent } from '../controllers/pencil';
import "../styles/board.css";

function Board() {
    let isInit = false;
    useEffect(()=>{
        if(!isInit){
            initBoardPixels();
            isInit = true;
        }
    },[])
    return (
        <div className="board" id="board" onMouseUp={(e)=>handlePencilHoldEvent(false,e)} onMouseDown={(e)=>handlePencilHoldEvent(true,e)} onClick={(e)=>redirectClickEvent(e)}>

        </div>
    );
}

export default Board;