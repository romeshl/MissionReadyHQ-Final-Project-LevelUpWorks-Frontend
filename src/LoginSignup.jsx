import React from "react";

import ButtonSignUp from "./Other-Components/ButtonSignUp";
import Overlay from "..//src//Other-Components/Overlay";

import Style from "./LoginSignup.module.css";

import imgStudents from "./assets/LoginSignup/students.png";
import imgTeachers from "./assets/LoginSignup/teachers.png";

export default function LoginSignup({
    StartOverlay,
    CloseOverlay,
    IsLogin,
    LoginStatus,
}) {
    function handleInput() { }
    return (
        <>
            <Overlay isOpen={StartOverlay} onClose={CloseOverlay}>
                <div className={Style.OverlayDiv}>
                    <div className={Style.BorderDiv}>
                        <div>
                            <img className={Style.Img} src={imgStudents} alt="" />
                        </div>
                        <h2>Students</h2>

                        <div className={Style.LoginSignupDiv}>
                            <h3
                                className={IsLogin ? Style.h3Active : Style.h3Inactive}
                                onClick={() => {
                                    LoginStatus(true);
                                }}
                            >
                                LOG IN
                            </h3>
                            <h3
                                className={IsLogin ? Style.h3Inactive : Style.h3Active}
                                onClick={() => {
                                    LoginStatus(false);
                                }}
                            >
                                SIGN UP
                            </h3>
                        </div>
                        <div className={Style.LoginSignupDiv}>
                            <div
                                className={
                                    IsLogin
                                        ? Style.LoginDivUnderLineActive
                                        : Style.LoginDivUnderLineInactive
                                }
                            ></div>
                            <div
                                className={
                                    IsLogin
                                        ? Style.SignupDivUnderLineInactive
                                        : Style.SignupDivUnderLineActive
                                }
                            ></div>
                        </div>

                        {IsLogin ? (
                            <form>
                                <input
                                    type="email"
                                    name="StudentEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                />
                                <input
                                    type="password"
                                    name="StudentPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                />
                                <ButtonSignUp Text={"LOG IN"}></ButtonSignUp>
                            </form>
                        ) : (
                            <form>
                                <input
                                    type="text"
                                    name="StudentFullName"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="email"
                                    name="StudentEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                />
                                <input
                                    type="password"
                                    name="StudentPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                />
                                <input
                                    type="password"
                                    name="StudentConfirmPassword"
                                    onChange={handleInput}
                                    placeholder="Confirm Password"
                                />
                                <ButtonSignUp Text={"SIGN UP"}></ButtonSignUp>
                            </form>
                        )}
                    </div>

                    <div className={Style.MiddleBorderDiv} />

                    <div className={Style.BorderDiv}>
                        <div>
                            <img className={Style.Img} src={imgTeachers} alt="" />
                        </div>
                        <h2>Teachers</h2>

                        <div className={Style.LoginSignupDiv}>
                            <h3
                                className={IsLogin ? Style.h3Active : Style.h3Inactive}
                                onClick={() => {
                                    LoginStatus(true);
                                }}
                            >
                                LOG IN
                            </h3>
                            <h3
                                className={IsLogin ? Style.h3Inactive : Style.h3Active}
                                onClick={() => {
                                    LoginStatus(false);
                                }}
                            >
                                SIGN UP
                            </h3>
                        </div>
                        <div className={Style.LoginSignupDiv}>
                            <div
                                className={
                                    IsLogin
                                        ? Style.LoginDivUnderLineActive
                                        : Style.LoginDivUnderLineInactive
                                }
                            ></div>
                            <div
                                className={
                                    IsLogin
                                        ? Style.SignupDivUnderLineInactive
                                        : Style.SignupDivUnderLineActive
                                }
                            ></div>
                        </div>

                        {IsLogin ? (
                            <form>
                                <input
                                    type="email"
                                    name="TeacherEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                />
                                <input
                                    type="password"
                                    name="TeacherPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                />
                                <ButtonSignUp Text={"LOG IN"}></ButtonSignUp>
                            </form>
                        ) : (
                            <form>
                                <input
                                    type="text"
                                    name="TeacherFullName"
                                    placeholder="Full Name"
                                />
                                <input
                                    type="email"
                                    name="TeacherEmail"
                                    onChange={handleInput}
                                    placeholder="Email Address"
                                />
                                <input
                                    type="password"
                                    name="TeacherPassword"
                                    onChange={handleInput}
                                    placeholder="Password"
                                />
                                <input
                                    type="password"
                                    name="TeacherConfirmPassword"
                                    onChange={handleInput}
                                    placeholder="Confirm Password"
                                />
                                <ButtonSignUp Text={"SIGN UP"}></ButtonSignUp>
                            </form>
                        )}
                    </div>
                </div>
            </Overlay>
        </>
    );
}
