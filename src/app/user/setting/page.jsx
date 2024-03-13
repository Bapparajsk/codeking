"use client"

import '$/user/setting/style.css'
import { useState, useEffect } from 'react';
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';
import { useUserDetails } from '@/context/user/UserProvider';
import { useCursor } from '@/context/cursor/cursorProvider';
import { composeFile } from '@/lib/handler/functionHandler';
import { useAuthUser } from '@/context/usertoken/AuthUser';

const Page = () => {

    const [isUpdates, setIsUpdates] = useState({ user_name: '', email: '', about_me: '', county: '', student_professional: '', cursor: false });
    const [isUpdate, setIsUpdate] = useState({ user_name: false, email: false, about_me: false, county: false, student_professional: false, cursor: false});
    const [button, setButton] = useState(false);

    const { router } = useNavigateRouter();
    const { userDetails, updateUserDetails } = useUserDetails();
    const { cursorRef } = useCursor();
    const { token } = useAuthUser();

    const handleInput = (event, name) => {
        let value = event.target.value;
        setIsUpdates(prev => ({ ...prev, [name]: value }));
        if (userDetails?.[name] !== value) {
            setIsUpdate(prev => ({ ...prev, [name]: true }));
        } else {
            setIsUpdate(prev => ({ ...prev, [name]: false }));
        }

    }

    const handleCursor = () => {
        setIsUpdates(prev => ({ ...prev, cursor: !prev.cursor }));
        setIsUpdate(prev => ({ ...prev, cursor: !prev.cursor }));
    }

    const userInit = () => {
        console.log('userDetails :- ', userDetails);
        const details = {
            user_name: userDetails?.user_name,
            email: userDetails?.email,
            about_me: userDetails?.about_me,
            county: userDetails?.county,
            student_professional: userDetails?.student_professional,
            cursor: userDetails?.cursor
        }

        setIsUpdates(details);
    }

    useEffect(() => {
        if (userDetails) {
            userInit();
        }

    }, [userDetails, useCursor]);

    useEffect(() => {
        const { user_name, email, about_me, county, student_professional, cursor } = isUpdate;
        if (user_name || email || about_me || county || student_professional || cursor) {
            console.log('djdj')
            setButton(true);
        } else {
            setButton(false);
        }

    }, [isUpdate]);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const newFile = composeFile(isUpdate, isUpdates);
        if (Object.keys(newFile).length === 0) return;
        try {
            const response = await updateUserDetails(newFile, token);
            if (response) {
                console.log('update Successful...')
                userInit();
                setIsUpdate({ user_name: false, email: false, about_me: false, county: false, student_professional: false, cursor: false});
            } else {
                console.log('update failed...')
            }
        } catch (error) {
            console.log('error :- ',error);
        }
    }

    return (
        <div className={'setting-page flex'}>
            <div className={'setting-back-page-button flex'}
                 onClick={() => router.back()}
                 // onMouseOver={() => cursorOutline.style.borderColor = 'red'}
                 // onMouseOut={() => cursorOutline.style.borderColor = '#000000B2'}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className={'setting-page-main-container'}>
                <form onSubmit={HandleSubmit}>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>User Name</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={`updates-input ${isUpdate.user_name ? 'is-update' : ''}`}
                                value={isUpdates.user_name}
                                onChange={(e) => handleInput(e, 'user_name')}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>Email</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={`updates-input ${isUpdate.email ? 'is-update' : ''}`}
                                value={isUpdates.email}
                                onChange={(e) => handleInput(e, 'email')}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>About Me</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={`updates-input ${isUpdate.about_me ? 'is-update' : ''}`}
                                value={isUpdates.about_me}
                                onChange={(e) => handleInput(e, 'about_me')}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>County</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={`updates-input ${isUpdate.county ? 'is-update' : ''}`}
                                value={isUpdates.county}
                                onChange={(e) => handleInput(e, 'county')}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>Student/Professional</span></div>
                        <div className={'updates-inputs flex'}>
                            <input
                                className={`updates-input ${isUpdate.student_professional ? 'is-update' : ''}`}
                                value={isUpdates.student_professional}
                                onChange={(e) => handleInput(e, 'student_professional')}
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={'setting-container flex'}>
                        <div className={'updates-names flex'}><span>Cursor</span></div>
                        <div className={'updates-inputs up-cursor flex'}>
                            <span>animated</span>
                            <input type="checkbox" checked={isUpdates.cursor} id="switch"  onClick={handleCursor} className={'switch-label'}/>
                            <label htmlFor="switch">Toggle</label>
                        </div>
                    </div>
                    <hr/>
                    <button
                        disabled={!button}
                        type={'submit'}
                        className={'setting-update-button'}
                        style={{ backgroundColor: button ? '#124076A6' : '#FFF7F1A6', borderRadius: button? '20px': '5px', color:  button ? '#FFF' : '#000000B2'}}
                        // onMouseOver={() => cursorOutline.style.borderColor = 'red'}
                        // onMouseOut={() => cursorOutline.style.borderColor = '#000000B2'}
                    >
                        <span>Save Changes</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;