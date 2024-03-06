"use client"

import '$/user/setting/style.css'
import React from 'react';
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';
import { useUserDetails } from '@/context/user/UserProvider';
const Page = () => {

    const { router } = useNavigateRouter();
    const { userDetails } = useUserDetails();
    const cursorOutline = document.getElementById('cursorOutline');

    return (
        <div className={'setting-page flex'}>
            <div className={'setting-back-page-button flex'}
                 onClick={() => router.back()}
                 onMouseOver={() => cursorOutline.style.borderColor = 'red'}
                 onMouseOut={() => cursorOutline.style.borderColor = '#000000B2'}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className={'setting-page-main-container'}>
                <form>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>User Name</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={'updates-input'}
                                value={'bapparajsk@gmail.com'}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>About Me</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={'updates-input'}
                                value={'I am Full Stack Developer'}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>County</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={'updates-input'}
                                value={'India'}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>Student/Professional</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={'updates-input'}
                                value={'Professional'}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>Cursor</span></div>
                        <div className={'updates-inputs up-cursor flex'}>
                            <span>animated</span>
                            <input type="checkbox" id="switch" className={'switch-label'}/>
                            <label htmlFor="switch">Toggle</label>
                        </div>
                    </div>
                    <hr/>
                    <button
                        type={'submit'}
                        className={'setting-update-button'}
                        onMouseOver={() => cursorOutline.style.borderColor = 'red'}
                        onMouseOut={() => cursorOutline.style.borderColor = '#000000B2'}
                    >
                        <span>Save Changes</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;