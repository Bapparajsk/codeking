'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { PuffLoader } from '@/component/Loader'
import { useAuthentication } from '@/context/authenticationContext'

const Page = () => {

    const router = useRouter();
    const pathname = usePathname();
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(false);
    const [sendOtpCoundtDown, setSendOtpCoundtDown] = useState(null);

    const { isSendOtp, setIsSendOtp, setupConfiguration } = useAuthentication();

    const setSendOtp = () => {
        setIsSendOtp(false);
        localStorage.setItem('isSendOtp', false);
        setTimeout(() => {
            localStorage.setItem('isSendOtp', true);
        },90_000)
    }

    const countdown = () => {
        let seconds = 100; // 1 minute and 30 seconds

        const timer = setInterval(() => {
            // Calculate remaining minutes and seconds
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;

            let time = '';
            if (minutes != 0) {
                time += `${minutes}m `;
            }
            time += `${remainingSeconds}s`;
            setSendOtpCoundtDown(time);
            seconds--;

            // Check if the timer has reached 0
            if (seconds < 0) {
                clearInterval(timer); // Stop the timer
                setSendOtpCoundtDown(null);
            }
        }, 1000); // Update every 1 second
    }

    
    const sendOtpInClient = async () => {
        const token = pathname.split('/')[3];
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/user/send-otp`,
                {  headers: {token} }
            );
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(true);
        }
        setSendOtp();
        countdown();
    }

    useEffect(() => {
        const istrue = setupConfiguration();
        if (istrue) {
            sendOtpInClient();
        }
    }, []);

    const submitOtp = async () => {
        try {
            const Usertoken = pathname.split('/')[3];
            const headers = {token : Usertoken};
            const body = { otp }
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/user/verify_otp`,
                body,
                {  headers }
            );

            const {token} = res.data;
            localStorage.setItem('token', token);
            router.push('/user/profile');

        } catch (e) {
            console.log('e.response.data',e.response.data);
        }
    }

    const reSendOtp = async () => {
        if (sendOtpCoundtDown)  return;

        try {
            await sendOtpInClient();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <main className="verify-page flex">
            {errorMessage ? (
                <p>Unauthorized</p>
            ) : isLoading ? (
                <PuffLoader/>
            ) : (
                <div className="verify-container flex">
                    <h1>Enter verification code</h1>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(otp) => <input {...otp} />}
                        containerStyle={'verify-inputs flex'}
                        inputStyle={'verify-input'}
                        inputType={'text'}
                    />
                    <div className="verify-button-container flex">
                        <button className={'verify-button'} disabled={sendOtpCoundtDown === null} onClick={reSendOtp}>
                            {sendOtpCoundtDown ? sendOtpCoundtDown : 'Resend OTP'}
                        </button>
                        <button className={'verify-button'} onClick={submitOtp}>
                            Send OTP
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Page;
