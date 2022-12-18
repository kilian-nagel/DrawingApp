import React from 'react';
import "../styles/drawbar.css";
import { pencilColor } from '../controllers/color-picker';
import {handleColorPick} from "../controllers/color-picker";

function Drawbar() {
    return ( 
        <div id="drawbar" className="mx-1 py-3 d-flex">
            <div className="container d-flex gap-2   justify-content-end align-items-center">
                <button aria-label='sélectionner le pinceau'>
                    <i className="fa-solid fa-pencil fa-1x"></i>       
                </button>
                <button aria-label='sélectionner la gomme'>
                    <i className="fa-solid fa-eraser fa-1x"></i>
                </button>
                <input className='color-picker' type="color" id="favcolor" onInput={handleColorPick} name="favcolor" value={pencilColor}/>
            </div>
        </div>
    );
}

export default Drawbar;