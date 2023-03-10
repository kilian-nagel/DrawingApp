import { useEffect } from 'react';
import { initBoardPixels } from '../controllers/board';
import { handlePencilClickEvent } from '../controllers/pencil';
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
        <div className="board" id="board" data-testid="board" onMouseUp={(e)=>handlePencilClickEvent(e,false)} onMouseDown={(e)=>handlePencilClickEvent(e,true)}>
        </div>
    );
}

export default Board;