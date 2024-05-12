import React, { useState } from "react";
import Overlay from "react-overlay-component";

import Style from "./LoginSignup.module.css";

export default function LoginSignup({ StartOverlay, CloseOverlay, LoginOrSignup }) {


    let openOverlay = StartOverlay;

    const configs = {
        animate: true,
        clickDismiss: false,
        // escapeDismiss: false,
        // focusOutline: false,
    };

 
    return (
        <div>
            <Overlay configs={configs} isOpen={StartOverlay} closeOverlay={CloseOverlay}>
                <div>
                <h2 className={Style.OverlayH2}>Sample header</h2>
                <p>{LoginOrSignup}</p>
                </div>
   
            </Overlay>
            
        </div>
    );
}