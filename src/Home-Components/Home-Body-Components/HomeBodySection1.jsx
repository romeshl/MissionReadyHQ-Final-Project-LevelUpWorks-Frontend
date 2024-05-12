import Style from "./HomeBodySection1.module.css";
import ButtonSignUp from "..//..//Other-Components/ButtonSignUp";
import ButtonGeneral from "..//..//Other-Components/ButtonGeneral";
import { useState } from "react";

import LoginSignup from "..//..//LoginSignup";

export default function HomeBodySection1({ IsLogin, LoginStatus }) {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            {/* This is the Section-1 of the body */}
            <div className={Style.bodySection1Div}>

                {/* This div holds the 2 text elements and buttons */}
                <div className={Style.bodySection1DivElements}>
                    {/* First text element */}
                    <p className={Style.bodySection1P}>
                        Prepare young minds for a better{" "}
                        <span className={Style.bodySection1Span}>future.</span>
                    </p>
                    {/* Second text element */}
                    <p className={Style.bodySection1P2}>
                        Let us help you advance students in Digital Technologies and other
                        learning areas with our project-based learning programme.
                    </p>
                    
                    {/* This Div holds the buttons and the small print text */}
                    <div className={Style.bodySection1ButtonsDiv}>
                        {/* Learn more button */}
                        <ButtonGeneral Text="LEARN MORE"></ButtonGeneral>
                        {/* This Div holds the 'Sign up' button and small print text */}
                        <div className={Style.bodySection1SignupButtonDiv}>
                            {/* Sign up button */}
                            <ButtonSignUp Text={"SIGN UP"} Clicked={() => { toggleOverlay(); LoginStatus(false); }}></ButtonSignUp>
                            <LoginSignup StartOverlay={isOpen} CloseOverlay={toggleOverlay} IsLogin={IsLogin} LoginStatus={LoginStatus} />
                            {/* Small print text */}
                            <p className={Style.bodySection1SignupButtonDivP}>*Basic subscription includes the first 15 projects free</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*------------Section-1 end ------------*/}
        </>
    );
}