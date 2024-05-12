import Style from "./ButtonGeneral.module.css";

export default function ButtonGeneral({ CustomStyle , Clicked, Text }) {
    return (
        <>
            <button className={ CustomStyle ? CustomStyle : Style.buttonGeneral} onClick={Clicked}>{Text}</button>
        </>
    )
}