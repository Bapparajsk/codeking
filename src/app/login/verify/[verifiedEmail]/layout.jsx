'use client'

import React from 'react';
import './style.css'
import { AuthenticationProvider } from '@/context/authenticationContext';

const VerifyPageLayout = ({children}) => {
    return (
        <html>
            <body>
                <AuthenticationProvider>
                    {children}
                </AuthenticationProvider>
            </body>
        </html>
    );
};

export default VerifyPageLayout;
