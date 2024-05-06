import Style from "./ButtonGeneral.module.css";

export default function ButtonGeneral({ Clicked, Text }) {
    return (
        <>
            <button className={Style.buttonGeneral} onClick={Clicked}>{Text}</button>
        </>
    )
}