"use client"

import '$/navbar/style.css';
import Link from "next/link";
import { useState } from "react";
import { useUserDetails } from '@/context/user/UserProvider';

export const Navbar = () => {

    const [logoHover, setLogoHover] = useState(false);
    const [homeHover, setHomeHover] = useState(false);
    const [problemHover, setProblemHover] = useState(false);
    const [userHover, setUserHover] = useState(false);
    const [singInHover, setSingInHover] = useState(false);
    const [isLogin, setIsLogin] = useState(true);


    const handleHovers = (setHover, value) => {
        setHover(value)
    }

    return (
        <nav className={'navbar'}>
            <ul className={'logo-bar'}>
                <li
                    className={"flex"}
                    onMouseOver={() => setLogoHover(true)}
                    onMouseOut={() => setLogoHover(false)}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/yedgackm.json"
                        trigger={logoHover ? "loop" : "in"}
                        stroke="light"
                        delay="150"
                        style={{width: "50px", height: "50px"}}>
                    </lord-icon>
                    <Link
                        href={'/'}
                        className={`nav-link brand-name`}
                    >
                        <span style={{color: "#1025e5"}}>Code King</span>
                    </Link>
                </li>
            </ul>

            <ul className={'details-ber'}>
                <li
                    onMouseOver={() => setHomeHover(true)}
                    onMouseOut={() => setHomeHover(false)}
                >
                    <Link href={'/'} className={'nav-link'}>
                        <lord-icon
                            src="https://cdn.lordicon.com/epietrpn.json"
                            trigger={homeHover ? "loop" : "in"}
                            delay="150"
                            style={{width: "35px", height: "35px"}}>
                        </lord-icon>
                        <span>Home</span>
                    </Link>
                </li>

                <li
                    onMouseOver={() => setProblemHover( true)}
                    onMouseOut={() => handleHovers(setProblemHover, false)}
                >
                    <Link href={'/problems'} className={'nav-link'}>
                        <lord-icon
                            src="https://cdn.lordicon.com/yhwigecd.json"
                            trigger={problemHover? "loop": "in"}
                            delay="150"
                            style={{width: "35px", height: "35px"}}>
                        </lord-icon>
                        <span>problems</span>
                    </Link>
                </li>

                <li
                    onMouseOver={() => handleHovers(setUserHover, true)}
                    onMouseOut={() => handleHovers(setUserHover, false)}
                >
                    <Link href={"/user/profile"} className={"nav-link"}>
                        <lord-icon
                            src="https://cdn.lordicon.com/ffpklhrd.json"
                            trigger={userHover ? "loop" : "in"}
                            delay="150"
                            style={{width: "35px", height: "35px"}}>
                        </lord-icon>
                        <span>User</span>
                    </Link>
                </li>

                <li
                    onMouseOver={() => handleHovers(setSingInHover, true)}
                    onMouseOut={() => handleHovers(setSingInHover, false)}
                >
                    { isLogin && <Link href={"/login"} className={"nav-link"}>
                        <lord-icon
                            src="https://cdn.lordicon.com/bdwluond.json"
                            colors="primary:#e8308c,secondary:#7166ee"
                            trigger={singInHover ? "loop" : "in"}
                            delay="150"
                            style={{ width: "35px", height: "35px" }}>
                        </lord-icon>
                        <span>Sing up</span>
                    </Link>}
                </li>
            </ul>
        </nav>
    );
}