
import {changeActiveTool, parsePixel} from "./board";

export function handlePencilClick(e: React.MouseEvent){
    changeActiveTool(0);
    parsePixel(e);
}

export {};