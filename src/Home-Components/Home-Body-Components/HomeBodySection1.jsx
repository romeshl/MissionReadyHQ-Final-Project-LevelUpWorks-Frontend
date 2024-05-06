import Style from "./HomeBodySection1.module.css";
import ButtonSignUp from "..//..//Other-Components/ButtonSignUp";
//import ButtonGeneral from "..//..//Other-Components/ButtonGeneral";

export default function HomeBodySection1() {
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
                        <button className={Style.bodySection1ButtonLearnMore}>
                            LEARN MORE
                        </button> 
                        
                        {/* This Div holds the 'Sign up' button and small print text */}
                        <div className={Style.bodySection1SignupButtonDiv}>
                            {/* Sign up button */}
                            <ButtonSignUp Text={"SIGN UP"} Clicked={() => { alert("Text"); }}></ButtonSignUp>
                            {/* Small print text */}
                            *Basic subscription includes the first 15 projects free
                        </div>
                    </div>
                </div>
            </div>
            {/*------------Section-1 end ------------*/}
        </>
    );
}