import '$/login/signin.css'
import Link from "next/link";
import { useState } from "react";
import isValid from "@/validator/isValid";
import axios from "axios";
import Image from "next/image";
import { useUserDetails } from "@/context/user/UserProvider";
import { useAuthUser } from "@/context/usertoken/AuthUser";
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';
import { useProblem } from "@/context/problemList/ProblemProvider";
import github from '@/../public/images/github.png';
import google from '@/../public/images/google.jpg';
import linkedin from '@/../public/images/linkedin.png';
import { textToPass } from '@/lib/handler/passwordHover'


export const Signin = ({ setSignup, showMassagegHandler }) => {
    const [arrow1, setArrow1] = useState(false);
    const [arrow2, setArrow2] = useState(false);
    const [pass, setPass] = useState("password");
    const [email_border, setEmail_border] = useState("");
    const [pass_border, setPass_border] = useState("");
    const [passHover, setPassHover] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setTokenInLocalstorage } = useAuthUser();
    const { setUserDetails } = useUserDetails();
    const { router } = useNavigateRouter();
    const { setProblems } = useProblem();



    // const clickHandler = () => {
    //     setSignup("signup");
    // }

    const setEmailHandler = (e) => {
        let email = e.target.value;
        setEmail(email);
        let isValidEmail = isValid.isEmail(email);
        if (isValidEmail) {
            setEmail_border("isWrite");
        } else {
            setEmail_border("isWrong");
        }
    }

    const setPasswordHandler = (e) => {
        let p = e.target.value;
        setPassword(p);

        if (p.length >= 8) {
            setPass_border("isWrite");
        } else {
            setPass_border("isWrong");
        }
    }

    const handleSignin = async (e) => {
        e.preventDefault();

        const useS = {
            email: email, password:password
        }
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/sign-in`, useS);
            const { userDetails, token } = res.data;

            setUserDetails(userDetails);
            setTokenInLocalstorage(token)

            const headers = { 'token': token };

            const resProblem = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/problem/get-all`, {headers});
            setProblems(resProblem.data.problem);
            console.log('si.sdkjfghsakhjgfdddddddddddddddddddddddddsuedyg')
            router.push('/user/profile');
        } catch (e) {
            console.log(e);
            router.push('/login');
        }

    }

    return (
        <div className={'login-box'}>
            <div className={'login-hading flex'}>
                <lord-icon
                    src="https://cdn.lordicon.com/xcxzayqr.json"
                    trigger="loop"
                    delay="1500"
                    style={{width: "50px", height: "50px"}}>
                </lord-icon>
                <h1>Sing in</h1>
            </div>
            <div className={'login-body'}>
                <form className={'flex'} onSubmit={handleSignin}>
                    <input type={'email'} value={email} onChange={setEmailHandler} required={true} name={'email'} placeholder={'Username or Email'} className={`inputs ${email_border.length !== 0 ? email_border : ""}`}/>
                    <div className={"pass-eye flex"}>
                        <input type={pass} value={password} onChange={setPasswordHandler} required={true}
                               name={"password"} placeholder={"Password"}
                               className={`inputs`}
                        />
                        <i
                            className={`fa-regular ${passHover ? 'fa-eye-slash' : 'fa-eye'} pass-eye-icon`}
                            onClick={() => textToPass(passHover, setPass, setPassHover)}
                        ></i>
                    </div>
                    <button type={"submit"} className={'login-form-button'}>Sign in</button>
                </form>
            </div>
            <div className={'login-footer flex'}>
                <div className={'login-footer-button flex'}>
                    <Link href={'/password/reset'} className={'forgot-password flex'}
                          onMouseOver={() => setArrow1(true)} onMouseOut={() => setArrow1(false)}>
                        <span>Forgot Password?</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={arrow1 ? "loop" : ""}
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </Link>
                    <button onClick={() => setSignup("signup")} className={'sing-up flex'} onMouseOver={() => setArrow2(true)}
                            onMouseOut={() => setArrow2(false)}>
                        <span>Sign Up</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={arrow2 ? "loop" : "in"}
                            style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                    </button>

                </div>
                <div className={'login-options flex'}>
                    <Image src={github} alt={'github'} className={'img github'}/>
                    <Image src={google} alt={'google'} className={'img google'}/>
                    <Image src={linkedin} alt={'linkedin'} className={'img linkedin'}/>
                </div>
                <div className={'login-privacy-policy flex'}>
                    <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"
                                                                             target={'_blank'}>Privacy Policy</a> and <a
                        href="https://policies.google.com/terms" target={'_blank'}>Terms of Service</a> apply.</p>
                </div>
            </div>
        </div>
    )
}