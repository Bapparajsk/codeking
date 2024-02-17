import '$/login/signup.css';
import {useState} from "react";
import isValid from "@/validator/isValid";

export const Signup = props => {
    const [arrow3, setArrow3] = useState(false);
    const [pass1, setPass1] = useState("password");
    const [pass2, setPass2] = useState("password");

    // valid details states
    const [user_border, setUser_border] = useState("");
    const [email_border, setEmail_border] = useState("");
    const [pass_border, setPass_border] = useState("");
    const [cPass_border, setCPass_border] = useState("");

    // user details
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    // password valid
    const [lower, setLower] = useState("");
    const [upper, setUpper] = useState("");
    const [digit, setDigit] = useState("");
    const [special, setSpecial] = useState("");

    const hoverOnPasswordVisibility = (passwordState, setPasswordState) => {
        setPasswordState("text");
    };

    const hoverOUtPasswordVisibility = (passwordState, setPasswordState) => {
        setTimeout(() => {
            setPasswordState("password");
        }, 250)
    };

    const clickHandler = () => {
        props.setSignup("signin");
    }

    const userHandler = e => {
        let u = e.target.value;
        setUsername(u);
        setUser_border(u.length >= 5 ? "isWrite" : "isWrong");
    }


    const emailHandler = e => {
        let E = e.target.value;
        setEmail(E);
        setEmail_border(isValid.isEmail(E) ? "isWrite" : "isWrong");
    }

    const passwordHandler = e => {
        let p = e.target.value;
        setPassword(p);
        let passValid = isValid.isPassword(p);

        setLower(passValid[0] ? "isP-Write" : "isP-Wrong");
        setUpper(passValid[1] ? "isP-Write" : "isP-Wrong");
        setDigit(passValid[2] ? "isP-Write" : "isP-Wrong");
        setSpecial(passValid[3] ? "isP-Write" : "isP-Wrong");

        for (const boolean of passValid) {
            if (!boolean) {
                setPass_border("isWrong");
                return;
            }
        }
        setPass_border("isWrite");
    }

    const cPasswordHandler = (e) => {
        let c = e.target.value;
        setCPassword(c);
        setCPass_border(isValid.isPasswordSame(password, c) ? "isWrite" : "isWrong");
    }

    return (
        <div className={'signup-box'}>
            <div className={'up-hading flex'}>
                <lord-icon
                    src="https://cdn.lordicon.com/xcxzayqr.json"
                    trigger="loop"
                    delay="1500"
                    style={{width: "50px", height: "50px"}}>
                </lord-icon>
                <h1>Sing Up</h1>
            </div>
            <div className={'up-body'}>
                <form className={'flex'}>
                    <div className={'up-body-top flex'}>
                        <input
                            type="text"
                            value={username}
                            onChange={userHandler}
                            className={`inputs ${user_border.length !== 0 ? user_border : ""}`}
                            placeholder={'Username'} name={'username'}
                            required={true}
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={emailHandler}
                            className={`inputs ${email_border.length !== 0 ? email_border : ""}`}
                            placeholder={'E-mail address'}
                            name={'email'}
                            required={true}
                        />
                    </div>
                    <div className={'up-body-top flex'}>
                        <div className={'pass-eye flex pass-valid-box'}>
                            <input
                                type={pass1}
                                value={password}
                                onChange={passwordHandler}
                                required={true}
                                name={'password'}
                                placeholder={'Password'}
                                className={`inputs ${pass_border.length !== 0 ? pass_border : ""}`}
                            />
                            <div
                                className={'pass-eye-icon flex'}
                                onMouseOver={() => hoverOnPasswordVisibility(pass1, setPass1)}
                                onMouseOut={() => hoverOUtPasswordVisibility(pass1, setPass1)}>

                                <lord-icon
                                    src="https://cdn.lordicon.com/fmjvulyw.json"
                                    trigger="morph"
                                    state="morph-cross"
                                    style={{width: "25px", height: "25px"}}>
                                </lord-icon>
                            </div>
                            <p className={'pass-valid'}>
                                <span className={lower.length !== 0 ? lower : ""}>1 lowercase, </span>
                                <span className={upper.length !== 0 ? upper : ""}>1 uppercase, </span>
                                <span className={digit.length !== 0 ? digit : ""}>1 digit, </span>
                                <span className={special.length !== 0 ? special : ""}>1 special character</span>
                            </p>
                        </div>
                        <div className={'pass-eye flex'} >
                            <input
                                type={pass2}
                                required={true}
                                name={'password'}
                                placeholder={'Confirm Password'}
                                value={cPassword}
                                onChange={cPasswordHandler}
                                className={`inputs ${cPass_border.length !== 0 ? cPass_border : ""}`}
                            />
                            <div
                                className={'pass-eye-icon flex'}
                                onMouseOver={() => hoverOnPasswordVisibility(pass2, setPass2)}
                                onMouseOut={() => hoverOUtPasswordVisibility(pass2, setPass2)}
                                // style={{backgroundColor: 'red',}}
                            >

                                <lord-icon

                                    src="https://cdn.lordicon.com/fmjvulyw.json"
                                    trigger="morph"
                                    state="morph-cross"
                                    style={{width: "25px", height: "25px"}}>
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                    <button className={'login-form-button'}>Sign Up</button>
                </form>
            </div>
            <div className={'up-footer flex'}>
                <div className={'flex'}>
                    <p>Have an account?</p>
                    <div
                        onClick={clickHandler}
                        className={'sign-button flex'}
                        onMouseOver={() => setArrow3(true)}
                        onMouseOut={() => setArrow3(false)}>

                        <span>Sign In</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={arrow3 ? "loop" : ""}
                            style={{width: "20px", height: "20px"}}>
                        </lord-icon>
                    </div>
                </div>
                <p>
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy"
                       target={'_blank'}> Privacy Policy </a>
                    and <a href="https://policies.google.com/terms"
                           target={'_blank'}> Terms of Service </a>
                    apply.
                </p>
            </div>
        </div>
    )
}