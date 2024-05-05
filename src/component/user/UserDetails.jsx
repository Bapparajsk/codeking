import '$/user/userDetails.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserDetails } from '@/context/user/UserProvider';

export const UserDetails = () => {
    const [edit_hover, setEdit_hover] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const [userDetail , setUserDetail] = useState(undefined);

    const { getUserDetails } = useUserDetails();

    useEffect(() => {
        const init = async () => {
            try {
                const data = await getUserDetails();
                console.log('data', data);
                const base64String = Buffer.from(data.profile_image.data).toString('base64');
                const imageSrc = `data:image/jpeg;base64,${base64String}`;
                setImageSrc(imageSrc)
                setUserDetail(data);
            } catch (error) {
                console.log(error);
            }

        }

        init();
    }, []);

    return (
        <div className={'details-card'}>
            <div className={'details-card-top flex'}>
                <div className={'d-card-img'}>
                    {imageSrc ? <img src={imageSrc} alt="Image" /> :
                        <img src={"https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/boy-512.png"}
                             alt={"user image"} />}
                </div>
                <h1>{userDetail?.user_name}</h1>
                <div
                    className={'user-settings flex'}
                    onClick={() => router.push('/user/setting')}
                    onMouseOver={() => setEdit_hover(true)}
                    onMouseOut={() => setEdit_hover(false)}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/lecprnjb.json"
                        trigger={edit_hover ? 'loop': 'in'}
                        delay="1500"
                        state="hover-cog-2"
                        style={{ width: "25px", height: "25px" }}>
                    </lord-icon>
                </div>
            </div>
            <div className={"details-card-body"}>
                <ul>
                    <li>
                        <p>Username : <span>{userDetail?.user_name}</span></p>
                        <hr />
                    </li>
                    <li>
                        <p>About Me : <span>{userDetail?.about_me}</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>County : <span>{userDetail?.county}</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>Student/Professional : <span>{userDetail?.student_professional}</span></p>
                        <hr/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
