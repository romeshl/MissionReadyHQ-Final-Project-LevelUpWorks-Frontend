import Style from "./ButtonSignUp.module.css"

// Button component mainly used as the Signup button with styling
export default function ButtonGeneral({ Clicked, Text }) {
    return (
        <>
            <button className={Style.buttonSignUp} onClick={Clicked}>{Text}</button>
        </>
    )

}