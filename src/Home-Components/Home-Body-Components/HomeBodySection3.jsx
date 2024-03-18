import Style from "./HomeBodySection3.module.css";
import { useState } from 'react';


export default function HomeBodySection3() {
    
    const pink = Style.textStyle;
    const blue = Style.textStyle2;

    const [buttonStyle, setButtonCss] = useState(pink);

    const buttonTexts = ["LEARNING PATHWAYS", "DIGITAL TECHNOLOGIES", "KEY COMPETENCIES", "IR4.0"];

    function setStyle() {
        if (buttonStyle === pink) {
            setButtonCss(blue);
        }
        else {
            setButtonCss(pink);
        }
        console.log(buttonStyle);
    }
    return (
        <>
            <div className={Style.bodySection3DivTop}>
                <h2 className={Style.bodySection3TopH2}>How our programme helps teachers and schools</h2>
                <div className={Style.bodySection3TopButtonsDiv}>
                    {buttonTexts.map((buttonText) => {
                        return <button className={Style.bodySection3TopButtons}>{buttonText}</button>
                    })}

                </div>
            </div>
            <div>
                <button className={buttonStyle} onClick={setStyle}>Romesh</button>
            </div>
        </>
    )
}