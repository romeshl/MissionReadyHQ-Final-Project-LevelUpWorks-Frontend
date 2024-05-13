// loads CSS styles
import Style from "./HomeBodySection1.module.css";

// Signup button used in this section 
import ButtonSignUp from "..//..//Other-Components/ButtonSignUp";

// Other general button used in this section
import ButtonGeneral from "..//..//Other-Components/ButtonGeneral";

import { useState } from "react";

// Login/Signup component is called in this section when the 'Signup' button is clicked
import LoginSignup from "..//..//LoginSignup";

// This is 1st of 3 parts of the Home -> Body
// IsLogin and LoginStatus is passed down from Home to check and set Login vs Signup section in Login/Signup component
// UserName and SetUser is passed down from Home to hold and set logged in user
export default function HomeBodySection1({ IsLogin, LoginStatus,  UserName, SetUser }) {
    
    // this useState is used to open and close Login/Signup component
    const [isOpen, setIsOpen] = useState(false);
    function toggleOverlay() {
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
                            {/* Opens Login/Signup component as Signup when the Signup button above is clicked */}
                            <LoginSignup IsOpen={isOpen} ToggleOverlay={toggleOverlay} IsLogin={IsLogin} LoginStatus={LoginStatus} UserName={UserName} SetUser={SetUser} />
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