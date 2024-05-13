import Style from "./ButtonGeneral.module.css";

// General purpose button with styling applied. Can override default styling by passing styling
export default function ButtonGeneral({ CustomStyle , Clicked, Text }) {
    return (
        <>
            {/* Uses CustomerStyle if passed down other use the default styling  */}
            <button className={ CustomStyle ? CustomStyle : Style.buttonGeneral} onClick={Clicked}>{Text}</button>
        </>
    )
}