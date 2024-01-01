import '$/login/signin.css'
import Link from "next/link";
import {useState} from "react";

export const Signin = () => {
    const [arrow1, setArrow1] = useState(false);
    const [arrow2, setArrow2] = useState(false);
    const [pass, setPass] = useState("password");

    const onPassToText = () => {
        setTimeout(() => {
            setPass("text")
        }, 250);
    }

    const onTextToPass = () => {
        setTimeout(() => {
            setPass("password")
        }, 250);
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
                <form className={'flex'}>
                    <input type={'email'} required={true} name={'email'} placeholder={'Username or Email'} className={'inputs'}/>
                    <div className={'pass-eye flex'}>
                        <input type={pass} required={true} name={'password'} placeholder={'Password'} className={'inputs'}/>
                        <div className={'pass-eye-icon flex'} onMouseOver={onPassToText} onMouseOut={onTextToPass}>
                            <lord-icon
                                src="https://cdn.lordicon.com/fmjvulyw.json"
                                trigger="morph"
                                state="morph-cross"
                                style={{width: "30px", height: "30px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <button>Sign in</button>
                </form>
            </div>
            <div className={'login-footer flex'}>
                <div className={'login-footer-button flex'}>
                    <Link href={'/password/reset'} className={'forgot-password flex'}  onMouseOver={() => setArrow1(true)} onMouseOut={() => setArrow1(false)}>
                        <span>Forgot Password?</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={arrow1 ? "loop" : ""}
                            style={{width: "20px", height: "20px"}}>
                        </lord-icon>
                    </Link>
                    <button className={'sing-up flex'} onMouseOver={() => setArrow2(true)} onMouseOut={() => setArrow2(false)}>
                        <span>Sign Up</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={arrow2 ? "loop" : ""}
                            style={{width: "20px", height: "20px"}}>
                        </lord-icon>
                    </button>
                </div>
                <div className={'login-privacy-policy flex'}>
                    <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target={'_blank'}>Privacy Policy</a> and <a
                        href="https://policies.google.com/terms" target={'_blank'}>Terms of Service</a> apply.</p>
                </div>
            </div>
        </div>
    )
}