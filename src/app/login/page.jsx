"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Footer } from "#/footer/Footer";
import '$/login/style.css'
import { Signin } from "#/login/Signin";
import { Signup } from "#/login/Signup";

const Page = () => {
    const [sing, setSing] = useState("signin");
    const [showMassageg, setShowMassageg] = useState(false)
    const [notification, setNotification] = useState({ animation: 'progressAnimation 2s linear', backgroundColor: '', shroll: '', massageg: ''})
    const notiRef = useRef();

    const setSignup = (value) => {
        setSing(value);
    }
    
    const showMassagegHandler = (massage, bg, shroll) => {

        setNotification(prevNotification => ({
            ...prevNotification,
            ['backgroundColor']: bg,
            ['shroll']: shroll,
            ['massageg']: massage
        }));

        setShowMassageg(true);
        setTimeout(() => {
            setShowMassageg(false);
        }, 2000);
    }

    useEffect(() => {
        document.title = "Code King - Account login"
    }, []);

    return (
        <>
            <main className={'login-page flex'}>
                <div className={'login-container flex'}>
                    {sing === "signin" ? <Signin setSignup={setSignup} showMassagegHandler={showMassagegHandler} /> : <Signup setSignup={setSignup} showMassagegHandler={showMassagegHandler} />}
                </div>
                { showMassageg &&
                    <div
                        ref={notiRef}
                        className={'notification flex'}
                        style={{backgroundColor: `#${notification.backgroundColor}`}}
                        onMouseOver={() => { notiRef.current.style.backgroundColor = `#${notification.backgroundColor}C9` }}
                        onMouseOut={() => { notiRef.current.style.backgroundColor = `#${notification.backgroundColor}` }}
                    >
                        <p>{notification.massageg}</p>
                        <div className={'notification-bottom-bar'} style={{animation: notification.animation, backgroundColor: `#${notification.shroll}`}}></div>
                    </div>
                }
            </main>
            <Footer />
        </>
    );
};

export default Page;
