import '$/user/userDetails.css'
import Link from "next/link";
import {useState} from "react";

export const UserDetails = () => {
    const [edit_hover, setEdit_hover] = useState(false);

    return (
        <div className={'details-card'}>
            <div className={'details-card-top flex'}>
                <div className={'d-card-img'}>
                    <img src={'https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/boy-512.png'} alt={'user image'}/>
                </div>
                <h1>bapparaj sk</h1>
            </div>
            <div className={'details-card-body'}>
                <ul>
                    <li>
                        <p>Username : <span>Bapparaj sk</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>About Me : <span>I am FullStack Developer</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>County : <span>India</span></p>
                        <hr/>
                    </li>
                    <li>
                        <p>Student/Professional : <span>Professional</span></p>
                        <hr/>
                    </li>
                </ul>
                <div className={'edit-card flex'}>
                    <Link href={'user/profile/edit'} className={'link'}>
                        <div
                            className={'edit-button flex'}
                            onMouseOver={() => setEdit_hover(true)}
                            onMouseOut={() => setEdit_hover(false)}
                        >
                            <span>Edit Now</span>
                            <lord-icon
                                src="https://cdn.lordicon.com/zfzufhzk.json"
                                trigger={edit_hover ? "loop": ""}
                                style={{width: "25px", height: "25px"}}>
                            </lord-icon>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}