import '$/login/signup.css';
import {useState} from "react";

export const Signup = props => {
    const [arrow3, setArrow3] = useState(false);
    const [pass1, setPass1] = useState("password");
    const [pass2, setPass2] = useState("password");

    const togglePasswordVisibility = (passwordState, setPasswordState) => {
        setTimeout(() => {
            setPasswordState(passwordState === "password" ? "text" : "password");
        }, 250);
    };
    const clickHandler = () => {
        props.setSignup("signin");
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
                        <input type="text" className={'inputs'} placeholder={'Username'} name={'username'}
                               required={true}/>
                        <input type="email" className={'inputs'} placeholder={'E-mail address'} name={'email'}
                               required={true}/>
                    </div>
                    <div className={'up-body-top flex'}>
                        <div className={'pass-eye flex'}>
                            <input type={pass1} required={true} name={'password'} placeholder={'Password'}
                                   className={'inputs'}/>
                            <div className={'pass-eye-icon flex'} onMouseOver={() => togglePasswordVisibility(pass1, setPass1)} onMouseOut={() => togglePasswordVisibility(pass1, setPass1)}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/fmjvulyw.json"
                                    trigger="morph"
                                    state="morph-cross"
                                    style={{width: "25px", height: "25px"}}>
                                </lord-icon>
                            </div>
                        </div>
                        <div className={'pass-eye flex'} >
                            <input type={pass2} required={true} name={'password'} placeholder={'Confirm Password'}
                                   className={'inputs'}/>
                            <div className={'pass-eye-icon flex'} onMouseOver={() => togglePasswordVisibility(pass2, setPass2)} onMouseOut={() => togglePasswordVisibility(pass2, setPass2)}>
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
                    <div onClick={clickHandler} className={'sign-button flex'} onMouseOver={() => setArrow3(true)} onMouseOut={() => setArrow3(false)}>
                        <span>Sign In</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={arrow3 ? "loop" : ""}
                            style={{width: "20px", height: "20px"}}>
                        </lord-icon>
                    </div>
                </div>
                <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"
                                                                         target={'_blank'}>Privacy Policy</a> and <a
                    href="https://policies.google.com/terms" target={'_blank'}>Terms of Service</a> apply.</p>
            </div>
        </div>
    )
}