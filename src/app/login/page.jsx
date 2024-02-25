"use client"

import React, {useEffect, useState} from 'react';
import { Footer } from "#/footer/Footer";
import '$/login/style.css'
import { Signin } from "#/login/Signin";
import { Signup } from "#/login/Signup";

const Page = () => {
    const [sing, setSing] = useState("signin");

    const setSignup = (value) => {
        console.log("this " + value);
        setSing(value); // Change this line to setSing
    }

    useEffect(() => {
        document.title = "Code King - Account login"
    }, []);

    return (
        <>
            <main className={'login-page flex'}>
                <div className={'login-container flex'}>
                    {sing === "signin" ? <Signin setSignup={setSignup} /> : <Signup setSignup={setSignup} />}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Page;
