import React, { Component } from 'react';
import "../styles/drawbar.css"

function Drawbar() {
    return ( 
        <div id="drawbar" className="mx-1 py-3 d-flex">
            <div className="container d-flex justify-content-end align-items-center">
                <button aria-label='sélectionner le pinceau'>
                    <i class="fa-solid fa-pencil fa-1x"></i>       
                </button>
                <button aria-label='sélectionner la gomme'>
                    <i class="fa-solid fa-eraser fa-1x"></i>
                </button>
                <button>
                    <i className="color-picker d-inline-block"></i>
                </button>
            </div>
        </div>
    );
}

export default Drawbar;