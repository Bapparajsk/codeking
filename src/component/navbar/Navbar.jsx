"use client"

import '$/navbar/style.css';
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {

    const [logoHover, setLogoHover] = useState(false);
    const [homeHover, setHomeHover] = useState(false);
    const [problemHover, setProblemHover] = useState(false);
    const [userHover, setUserHover] = useState(false);
    const [singInHover, setSingInHover] = useState(false);

    const handleHovers = (setHover, value) => {
        setHover(value)
    }


    return (
        <nav className={'navbar'}>
            <ul className={'logo-bar'}>
                <li
                    onMouseOver={() => handleHovers(setLogoHover, true)}
                    onMouseOut={() => handleHovers(setLogoHover, false)}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/yedgackm.json"
                        trigger={logoHover ? "loop" : ""}
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
                    onMouseOver={() => handleHovers(setHomeHover, true)}
                    onMouseOut={() => handleHovers(setHomeHover, false)}
                >
                    <Link href={'/'} className={'nav-link'}>
                        <lord-icon
                            src="https://cdn.lordicon.com/epietrpn.json"
                            trigger={homeHover ? "loop" : ""}
                            delay="150"
                            style={{width: "35px", height: "35px"}}>
                        </lord-icon>
                        <span>Home</span>
                    </Link>
                </li>

                <li
                    onMouseOver={() => handleHovers(setProblemHover, true)}
                    onMouseOut={() => handleHovers(setProblemHover, false)}
                >
                    <Link href={'/problems'} className={'nav-link'}>
                        <lord-icon
                            src="https://cdn.lordicon.com/yhwigecd.json"
                            trigger={problemHover? "loop": ""}
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
                    <Link href={'/user/profile'} className={'nav-link'}>
                        <lord-icon
                            src="https://cdn.lordicon.com/ffpklhrd.json"
                            trigger={userHover ? "loop" : ""}
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
                    <Link href={'/login'} className={'nav-link'}>
                        <lord-icon
                            src="https://cdn.lordicon.com/bdwluond.json"
                            colors="primary:#e8308c,secondary:#7166ee"
                            trigger={singInHover ? "loop" : ""}
                            delay="150"
                            style={{width: "35px", height: "35px"}}>
                        </lord-icon>
                        <span>Sing up</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}