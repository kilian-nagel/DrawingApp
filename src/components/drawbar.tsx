
import { pencilColor } from '../controllers/color-picker';
import {handleColorPick} from "../controllers/color-picker";
import { changeActiveTool, changeCurrentPixelSize, resetBoard } from '../controllers/board';
import "../styles/drawbar.css";

function Drawbar() {
    return ( 
        <div id="drawbar" data-testid="drawbar" className="mx-1 py-3 d-flex">
            <div className="container d-flex gap-2 justify-content-end align-items-center">
                <button aria-label='sélectionner le pinceau' onClick={()=>changeActiveTool(0)}>
                    <i className="fa-solid fa-pencil fa-1x"></i>       
                </button>
                <button aria-label='sélectionner la gomme' onClick={()=>changeActiveTool(1)}>
                    <i className="fa-solid fa-eraser fa-1x"></i>
                </button>
                <button aria-label='réinitialiser le tableau' onClick={()=>resetBoard()}>
                    <i className="fa-solid fa-arrow-rotate-left fa-1x"></i>
                </button>
                <select name="size" id="size-select" data-testid="size-select" onChange={e=>changeCurrentPixelSize(e)}>
                    <option value="">taille</option>
                    <option value="2" data-testid="size-select-2">2px</option>
                    <option value="4" data-testid="size-select-4">4px</option>
                    <option value="8" data-testid="size-select-8">8px</option>
                    <option value="16" data-testid="size-select-16">16px</option>
                    <option value="32" data-testid="size-select-32">32px</option>
                    <option value="48" data-testid="size-select-48">48px</option>
                    <option value="64" data-testid="size-select-64">64px</option>
                </select>
                <input className='color-picker' type="color" id="favcolor" onInput={handleColorPick} name="favcolor" value={pencilColor}/>
            </div>
        </div>
    );
}

export default Drawbar;