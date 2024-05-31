import { useState } from "react";

// One of the button components used in this section
import ButtonSignUp from "./Other-Components/ButtonSignUp";

// Overlay component is used for creating the Login/signup page and some message boxes 
import Overlay from "..//src//Other-Components/Overlay";

// CSS styles 
import Style from "./LoginSignup.module.css";

// Image for Student login/signup side
import imgStudents from "./assets/LoginSignup/students.png";
// Image for Teacher login/signup side
import imgTeachers from "./assets/LoginSignup/teachers.png";

// This component generate the login/signup page,
export default function LoginSignup({
    IsOpen, // IsOpen and ToggleOverlay is used to open and close Overlay component used in this section
    ToggleOverlay,
    IsLogin, // IsLogin and LoginStatus is used to determine and set if it's Login or Signup option IsLogin == True means it's a Login
    LoginStatus,
    UserName, // UserName and SetUser is used set and clear user's name after loggin in and loggin off
    SetUser
}) {

    // This useState variable opens and closes message box based on Overlay component
    const [OverlayMessageBox, setOverlayMessageBox] = useState(false);
    const ToggleMessageBox = () => {
        setOverlayMessageBox(!OverlayMessageBox);
    }

    // message to be displayed on the message box
    const [messageToRender, setMessageToRender] = useState("");

    // these holds the student data to be checked against and transfer to API
    const [StudentEmail, setStudentEmail] = useState("");
    const [StudentPassword, setStudentPassword] = useState("");
    const [StudentConfirmPassword, setStudentConfirmPassword] = useState("");
    const [StudentFullName, setStudentFullName] = useState("");

    // these holds the teacher data to be checked against and transfer to API
    const [TeacherEmail, setTeacherEmail] = useState("");
    const [TeacherPassword, setTeacherPassword] = useState("");
    const [TeacherConfirmPassword, setTeacherConfirmPassword] = useState("");
    const [TeacherFullName, setTeacherFullName] = useState("");

    // clears all the data in input boxes 
    const clearInputs = () => {
        setStudentEmail("");
        setStudentPassword("");
        setStudentFullName("");
        setStudentConfirmPassword("");

        setTeacherEmail("");
        setTeacherPassword("");
        setTeacherConfirmPassword("");
        setTeacherFullName("");
    }

    // this loads the data typed in input boxes to corresponding variables as you type them
    const handleInput = (event) => {
        switch (event.target.name) {
            case "StudentEmail":
                setStudentEmail(event.target.value);
                break;
            case "StudentPassword":
                setStudentPassword(event.target.value);
                break;
            case "StudentConfirmPassword":
                setStudentConfirmPassword(event.target.value);
                break;
            case "StudentFullName":
                setStudentFullName(event.target.value);
                break;

            case "TeacherEmail":
                setTeacherEmail(event.target.value);
                break;
            case "TeacherPassword":
                setTeacherPassword(event.target.value);
                break;
            case "TeacherConfirmPassword":
                setTeacherConfirmPassword(event.target.value);
                break;
            case "TeacherFullName":
                setTeacherFullName(event.target.value);
                break;
        }
    }

    // this function handles the student login option
    const handleStudentLogin = async (event) => {
        event.preventDefault();
        // checks to see if the inputs are empty, if any of them are empty as error message is displayed
        if (StudentEmail === "" || StudentPassword === "") {
            handleErrors(1001);
            return;
        }
        try {
            const response = await fetch('https://lightupworks-backend-f8cf07655fb6.herokuapp.com/students/login', { // Calls the API to check if login data is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: StudentEmail, password: StudentPassword }),
            });
            // if the fetch was successful
            if (response.status === 200) {
                clearInputs();
                ToggleOverlay();
                // get the logged in student name from the response and set the username in the Home->Nav section
                const data = await response.json();
                SetUser(`Student: ${data}`); // set the user to student who logged in
            }
            else {
                handleErrors(response.status); // if the fetch was unsuccessful, call the error handling function.
            }
        }
        catch (err) {
            console.log(err); // displays any other errors occurred during the API call on the console
        }
    }

    // this function handles the teacher login option
    const handleTeacherLogin = async (event) => {
        event.preventDefault();
        // checks to see if the inputs are empty, if any of them are empty as error message is displayed
        if (TeacherEmail === "" || TeacherPassword === "") {
            handleErrors(1001);
            return;
        }
        try {
            const response = await fetch('https://lightupworks-backend-f8cf07655fb6.herokuapp.com/teachers/login', { // Calls the API to check if login data is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: TeacherEmail, password: TeacherPassword }),
            });
            // if the fetch was successful
            if (response.status === 200) {
                clearInputs();
                ToggleOverlay();
                // get the logged in teacher name from the response and set the username in the Home->Nav section
                const data = await response.json();
                SetUser(`Teacher: ${data}`); // set the teacher to student who logged in
            }
            else {
                handleErrors(response.status); // if the fetch was unsuccessful, call the error handling function.
            }
        }
        catch (err) {
            console.log(err) // displays any other errors occurred during the API call on the console
        }
    }

    // this function calls an API to create a new student
    const handleStudentSignup = async (event) => {
        event.preventDefault();
        // checks to see if the inputs are empty, if any of them are empty as error message is displayed
        if (StudentEmail === "" || StudentPassword === "" || StudentFullName === "" || StudentConfirmPassword === "") {
            handleErrors(1001);
            return;
        }
        // Checks if password input and confirm password input are matching
        if (StudentPassword === StudentConfirmPassword) {
            try {
                const response = await fetch('https://lightupworks-backend-f8cf07655fb6.herokuapp.com/students/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: StudentFullName, email: StudentEmail, password: StudentPassword })
                });
                // if the fetch was successful.. 
                if (response.status === 200) {
                    const messageToRender = <span> Successfully signed up. Please login to continue...</span>;
                    setMessageToRender(messageToRender);
                    ToggleMessageBox(); // shows a message box 
                    clearInputs(); // clears inputs
                    LoginStatus(true); // switch page to login side
                    SetUser(""); // log off any users that's logged in
                }
                else {
                    handleErrors(response.status); // if the fetch was unsuccessful call the error handling function
                }
            }
            catch (err) {
                console.log(error); // catches any other errors and displays on the console
            }
        }
        else { // displays a message box if the passwords are not matching
            const messageToRender = <span>Passwords don't match. Please check and try again.</span>
            setMessageToRender(messageToRender);
            ToggleMessageBox();
        }
    }

    // this function calls an API to create a new teacher
    const handleTeacherSignup = async (event) => {
        event.preventDefault();
        // checks to see if the inputs are empty, if any of them are empty as error message is displayed
        if (TeacherEmail === "" || TeacherPassword === "" || TeacherFullName === "" || TeacherConfirmPassword === "") {
            handleErrors(1001);
            return;
        }
        // Checks if password input and confirm password input are matching
        if (TeacherPassword === TeacherConfirmPassword) {
            try {
                const response = await fetch('https://lightupworks-backend-f8cf07655fb6.herokuapp.com/teachers/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: TeacherFullName, email: TeacherEmail, password: TeacherPassword })
                });
                // if the fetch was successful.
                if (response.status === 200) {
                    const messageToRender = <span> Successfully signed up. Please login to continue...</span>;
                    setMessageToRender(messageToRender);
                    ToggleMessageBox(); // shows a message box
                    clearInputs(); // clears inputs
                    LoginStatus(true); // switch page to login side
                    SetUser(""); // log off any users that's logged in
                }
                else {
                    handleErrors(response.status); // if the fetch was unsuccessful call the error handling function
                }
            }
            catch (err) {
                console.log(err); // catches any other errors and displays on the console

            }
        }
        else { // displays a message box if the passwords are not matching
            const messageToRender = <span>Passwords don't match. Please check and try again.</span>
            setMessageToRender(messageToRender);
            ToggleMessageBox();
            return;
        }
    }

    // The common error handling function for all the Login/Signup functions
    function handleErrors(err) {
        let message = "";
        switch (err) {
            case 404: // email does not exist in the database
                message = <span> No user account with that e-mail address.</span>;
                setMessageToRender(message);
                ToggleMessageBox(); // displays the message box
                break;
            case 401: // wrong password 
                message = <span> Incorrect password. </span>;
                setMessageToRender(message);
                ToggleMessageBox(); // displays the message box
                break;
            case 409: // e-mail address already exist in the database
                message = <span> User with email id already exists </span>;
                setMessageToRender(message);
                ToggleMessageBox(); // shows a message box
                break;
            case 500:
                message = <span> Unknown Error.</span>;
                setMessageToRender(message);
                ToggleMessageBox(); // displays the message box
                break;
            case 1001:  // checks to see if the inputs are empty, if any of them are empty as error message is displayed
                message = <span> All the fields are required. </span>
                setMessageToRender(message);
                ToggleMessageBox(); // displays the message box
                break;
            default:
                console.log(response.status); // displays any other errors on the console
        }
    }

    return (
        <>
            {/* Creates an Overlay component to hold login/signup components. Clears the inputs of exit */}
            <Overlay isOpen={IsOpen} onClose={() => { ToggleOverlay(); clearInputs(); }}>
                <div className={Style.OverlayDiv}> {/* encloses all the components */}
                    <div className={Style.BorderDiv}>
                        <div> {/* Student image */}
                            <img className={Style.Img} src={imgStudents} alt="" />
                        </div>
                        <h2>Students</h2>  {/* Student heading */}

                        <div className={Style.LoginSignupDiv}>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <h3
                                className={IsLogin ? Style.h3Active : Style.h3Inactive}
                                onClick={() => {
                                    LoginStatus(true); clearInputs();
                                }}
                            >
                                LOG IN
                            </h3>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <h3
                                className={IsLogin ? Style.h3Inactive : Style.h3Active}
                                onClick={() => {
                                    LoginStatus(false); clearInputs();
                                }}
                            >
                                SIGN UP
                            </h3>
                        </div>
                        <div className={Style.LoginSignupDiv}>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <div
                                className={
                                    IsLogin
                                        ? Style.LoginDivUnderLineActive
                                        : Style.LoginDivUnderLineInactive
                                }
                            ></div>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <div
                                className={
                                    IsLogin
                                        ? Style.SignupDivUnderLineInactive
                                        : Style.SignupDivUnderLineActive
                                }
                            ></div>
                        </div>
                        {/* Check IsLogin to see if this is a login or signup and displays inputs accordingly */}
                        {IsLogin ? (
                            <form>
                                <input
                                    type="email"
                                    name="StudentEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                    value={StudentEmail}
                                />
                                <input
                                    type="password"
                                    name="StudentPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                    value={StudentPassword}
                                />
                                <ButtonSignUp Text={"LOG IN"} Clicked={handleStudentLogin}></ButtonSignUp>
                            </form>
                        ) : (
                            <form>
                                <input
                                    type="text"
                                    name="StudentFullName"
                                    placeholder="Full Name"
                                    onChange={handleInput}
                                    value={StudentFullName}
                                />
                                <input
                                    type="email"
                                    name="StudentEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                    value={StudentEmail}
                                />
                                <input
                                    type="password"
                                    name="StudentPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                    value={StudentPassword}
                                />
                                <input
                                    type="password"
                                    name="StudentConfirmPassword"
                                    onChange={handleInput}
                                    placeholder="Confirm Password"
                                    value={StudentConfirmPassword}
                                />
                                <ButtonSignUp Text={"SIGN UP"} Clicked={handleStudentSignup}></ButtonSignUp>

                            </form>
                        )}
                        {/* displays relevant messages on message box after calling the handleStudentLogin function */}
                        <Overlay isOpen={OverlayMessageBox} onClose={ToggleMessageBox}>
                            <div className={Style.MessageBoxStyling}>
                                <h3 className={Style.h3Active}>{messageToRender}</h3>
                                <ButtonSignUp Text="Close" Clicked={ToggleMessageBox} />

                            </div>
                        </Overlay>
                    </div>

                    {/* displays grey line dividing student and teacher sections */}
                    <div className={Style.MiddleBorderDiv} />

                    <div className={Style.BorderDiv}>
                        <div> {/* Teacher image */}
                            <img className={Style.Img} src={imgTeachers} alt="" />
                        </div>
                        <h2>Teachers</h2>  {/* Teacher heading */}

                        <div className={Style.LoginSignupDiv}>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <h3
                                className={IsLogin ? Style.h3Active : Style.h3Inactive}
                                onClick={() => {
                                    LoginStatus(true); clearInputs();
                                }}
                            >
                                LOG IN
                            </h3>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <h3
                                className={IsLogin ? Style.h3Inactive : Style.h3Active}
                                onClick={() => {
                                    LoginStatus(false); clearInputs();
                                }}
                            >
                                SIGN UP
                            </h3>
                        </div>
                        <div className={Style.LoginSignupDiv}>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <div
                                className={
                                    IsLogin
                                        ? Style.LoginDivUnderLineActive
                                        : Style.LoginDivUnderLineInactive
                                }
                            ></div>
                            {/* Check IsLogin to see if this is a login or signup and apply CSS styles accordingly */}
                            <div
                                className={
                                    IsLogin
                                        ? Style.SignupDivUnderLineInactive
                                        : Style.SignupDivUnderLineActive
                                }
                            ></div>
                        </div>
                        {/* Check IsLogin to see if this is a login or signup and displays inputs accordingly */}
                        {IsLogin ? (
                            <form>
                                <input
                                    type="email"
                                    name="TeacherEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                    value={TeacherEmail}
                                />
                                <input
                                    type="password"
                                    name="TeacherPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                    value={TeacherPassword}
                                />
                                <ButtonSignUp Text={"LOG IN"} Clicked={handleTeacherLogin}></ButtonSignUp>

                            </form>
                        ) : (
                            <form>
                                <input
                                    type="text"
                                    name="TeacherFullName"
                                    placeholder="Full Name"
                                    onChange={handleInput}
                                    value={TeacherFullName}
                                />
                                <input
                                    type="email"
                                    name="TeacherEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                    value={TeacherEmail}
                                />
                                <input
                                    type="password"
                                    name="TeacherPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                    value={TeacherPassword}
                                />
                                <input
                                    type="password"
                                    name="TeacherConfirmPassword"
                                    onChange={handleInput}
                                    placeholder="Confirm Password"
                                    value={TeacherConfirmPassword}
                                />
                                <ButtonSignUp Text={"SIGN UP"} Clicked={handleTeacherSignup}></ButtonSignUp>

                            </form>
                        )}
                        {/* displays relevant messages on message box after calling the handleStudentLogin function */}
                        <Overlay isOpen={OverlayMessageBox} onClose={ToggleMessageBox}>
                            <div className={Style.MessageBoxStyling}>
                                <h3 className={Style.h3Active}>{messageToRender}</h3>
                                <ButtonSignUp Text="Close" Clicked={ToggleMessageBox} />

                            </div>
                        </Overlay>
                    </div>
                </div>
            </Overlay>
        </>
    );
}
