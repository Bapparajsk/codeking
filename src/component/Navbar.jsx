import '$/navbar.css';
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className={'navbar'}>
            <ul className={'logo-bar'}>
                <lord-icon
                    src="https://cdn.lordicon.com/yedgackm.json"
                    trigger="hover"
                    stroke="light"
                    style={{width: "50px", height: "50px"}}>
                </lord-icon>
                <Link
                    href={'/'}
                    className={`nav-link brand-name`}
                >
                    <span>Code King</span>
                </Link>
            </ul>

            <ul className={'details-ber'}>
                <Link href={'/'} className={'nav-link'}>
                    <lord-icon
                        src="https://cdn.lordicon.com/epietrpn.json"
                        trigger="hover"
                        style={{width: "35px",height: "35px"}}>
                    </lord-icon>
                    <span>Home</span>
                </Link>
                <Link href={'/problems'} className={'nav-link'}>
                    <lord-icon
                        src="https://cdn.lordicon.com/yhwigecd.json"
                        trigger="hover"
                        style={{width: "35px", height: "35px"}}>
                    </lord-icon>
                    <span>problems</span>
                </Link>
                <Link href={'/user'} className={'nav-link'}>
                    <lord-icon
                        src="https://cdn.lordicon.com/ffpklhrd.json"
                        trigger="hover"
                        style={{width: "35px", height: "35px"}}>
                    </lord-icon>
                    <span>User</span>
                </Link>
                <Link href={'/login'} className={'nav-link'}>
                    <lord-icon
                        src="https://cdn.lordicon.com/bdwluond.json"
                        colors="primary:#e8308c,secondary:#7166ee"
                        trigger="hover"
                        style={{width: "35px", height: "35px"}}>
                    </lord-icon>
                    <span>Login</span>
                </Link>
            </ul>
        </nav>
    )
}