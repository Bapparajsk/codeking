"use client"

import React from 'react';
import {Footer} from "#/footer/Footer";
import '$/login/style.css'
import {Signin} from "#/login/Signin";
const Page = () => {
    return (
        <>
            <main className={'login-page flex'}>
                <div className={'login-container'}>
                    <Signin/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Page;