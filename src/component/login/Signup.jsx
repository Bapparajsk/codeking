import '$/login/signup.css';
import {useState} from "react";
import isValid from "@/validator/isValid";
import axios from "axios";
import { useUserDetails } from "@/context/user/UserProvider";
import { useAuthUser } from "@/context/usertoken/AuthUser";
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';
import { useProblem } from "@/context/problemList/ProblemProvider";

export const Signup = props => {
    const [arrow3, setArrow3] = useState(false);
    const [pass1, setPass1] = useState("password");
    const [pass2, setPass2] = useState("password");
    const [passHover, setPassHover] = useState({ pass1: false, pass2: false, });

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
    const [passwordValid, setPasswordValid] = useState({ lower: '', upper: '', digit: '', special: '' });

    const { setTokenInLocalstorage } = useAuthUser();
    const { setUserDetails, setProblemStatus } = useUserDetails();
    const { router } = useNavigateRouter();
    const { setProblems } = useProblem();

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

        const passwordValidObj = {
            lower: passValid[0] ? "isP-Write" : "isP-Wrong",
            upper: passValid[1] ? "isP-Write" : "isP-Wrong",
            digit: passValid[2] ? "isP-Write" : "isP-Wrong",
            special: passValid[3] ? "isP-Write" : "isP-Wrong"
        };

        setPasswordValid(passwordValidObj);

        const allValid = passValid.every(boolean => boolean);
        setPass_border(allValid ? "isWrite" : "isWrong");
    }

    const cPasswordHandler = (e) => {
        let c = e.target.value;
        setCPassword(c);
        setCPass_border(isValid.isPasswordSame(password, c) ? "isWrite" : "isWrong");
    }

    const handleSignup = async (e) => {
        e.preventDefault();

        let passValid = isValid.isPassword(password);
        const allValid = passValid.every(boolean => boolean);

        const userDetails = {
            userName: username,
            email: email,
            password: password
        }
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/sign-up`, userDetails);
            const { sessionToken } = res.data;
            router.push(`/login/verify/${sessionToken}`);
        } catch (error) {
            console.log('login error :- ', error);
        }
    }

    const textToPass = (value, setPass, setPassHover, name) => {
        console.log(value, name);
        setPass(value ? 'password' : 'text');
        setPassHover(prevState => ({
            ...prevState,
            [name]: !value
        }));
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
                <form className={'flex'} onSubmit={handleSignup}>
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
                            <i
                                className={`fa-regular ${passHover.pass1 ? "fa-eye-slash" : "fa-eye"} pass-eye-icon`}
                                onClick={() => textToPass(passHover.pass1, setPass1, setPassHover, 'pass1')}
                            ></i>
                            <p className={"pass-valid"}>
                                <span className={passwordValid.lower.length !== 0? passwordValid.lower : ''}>1 lowercase, </span>
                                <span className={passwordValid.upper.length !== 0? passwordValid.upper : ''}>1 uppercase, </span>
                                <span className={passwordValid.digit.length !== 0? passwordValid.digit : ''}>1 digit, </span>
                                <span className={passwordValid.special.length !== 0? passwordValid.special : ''}>1 special character</span>
                            </p>
                        </div>
                        <div className={"pass-eye flex"}>
                            <input
                                type={pass2}
                                required={true}
                                name={"password"}
                                placeholder={"Confirm Password"}
                                value={cPassword}
                                onChange={cPasswordHandler}
                                className={`inputs ${cPass_border.length !== 0 ? cPass_border : ""}`}
                            />
                            <i
                                className={`fa-regular ${passHover.pass2 ? "fa-eye-slash" : "fa-eye"} pass-eye-icon`}
                                onClick={() => textToPass(passHover.pass2, setPass2, setPassHover, "pass2")}
                            ></i>
                        </div>
                    </div>
                    <button type={"submit"} className={"login-form-button"}>Sign Up</button>
                </form>
            </div>
            <div className={"up-footer flex"}>
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
