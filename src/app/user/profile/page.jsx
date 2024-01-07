import React from 'react';
import '$/user/style.css'
import {Footer} from "#/footer/Footer";
import {UserDetails} from "#/user/UserDetails";

const Profile = () => {
    return (
        <>
            <main className={'user-profile-main flex'}>
                <div className={'user-details-card'}>
                    <div className={'user-pro-hading flex'}>
                        <div className={'pro-hading-left pro-hading'}>
                            <UserDetails/>
                        </div>
                        <div className={'pro-hading-right pro-hading flex'}>
                            <div className={'h-right-top h-right'}></div>
                            <div className={'h-right-top h-right'}></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>

    );
};

export default Profile;