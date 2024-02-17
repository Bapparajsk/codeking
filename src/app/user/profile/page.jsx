"use client"

import React, {useEffect} from 'react';
import '$/user/style.css'
import { Footer } from "#/footer/Footer";
import { UserDetails } from "#/user/UserDetails";
import { ProgressCard } from "#/user/ProgressCard";
import { LanguagesProgress } from "#/user/LanguagesProgress";
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';
import { useAuthUser } from '@/context/usertoken/AuthUser';

const Profile = () => {

    const { router } = useNavigateRouter();
    const { token } = useAuthUser();

    if(token === undefined) {
        router.push('/login') // Redirect to login page if user is not logged in
    }
    
    useEffect(() => {
        document.title = "Code King - Profile"
    }, []);

    return (
        <>
            <main className={'user-profile-main flex'}>
                <div className={'user-details-card'}>
                    <div className={'user-pro-hading flex'}>
                        <div className={'pro-hading-left pro-hading'}>
                            <UserDetails />
                        </div>
                        <div className={'pro-hading-right pro-hading flex'}>
                            <div className={'h-right-top h-right'}>
                                <ProgressCard />
                            </div>
                            <div className={'h-right-bot h-right'}>
                                <LanguagesProgress />
                            </div>
                        </div>
                    </div>
                    <div className={'user-pro-body'}></div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Profile;
