import React, { useEffect } from 'react';
import { initBoardPixels } from '../controllers/board';
import { handlePencilClick } from '../controllers/pencil';
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
        <div className="board" id="board" onClick={(e)=>handlePencilClick(e)}>

        </div>
    );
}

export default Board;