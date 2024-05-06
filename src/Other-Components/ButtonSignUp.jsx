import Style from "./ButtonSignUp.module.css"

export default function ButtonGeneral({ Clicked, Text }) {
    return (
        <>
            <button className={Style.buttonSignUp} onClick={Clicked}>{Text}</button>
        </>
    )

}