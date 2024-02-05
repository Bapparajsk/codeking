import {useState} from "react";

export const DashboardNavbar = () => {
    const [desHover, setDesHover] = useState(false);
    const [subHover, setSubHover] = useState(false);

    const setHover = (value, setValue) => {
        setValue(value);
    }

    return (
        <div className={"dashboard-nav flex"}>
            <ul className={"flex"}>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setHover(true, setDesHover)}
                    onMouseOut={() => setHover(false, setDesHover)}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/vdjwmfqs.json"
                        trigger={desHover ? "loop" : "in"}
                        colors="primary:#2516c7"
                        style={{width:25,height:25}}>
                    </lord-icon>
                    <span>Description</span>
                </li>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setHover(true, setSubHover)}
                    onMouseOut={() => setHover(false, setSubHover)}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/vuiggmtc.json"
                        trigger={subHover ? "loop" : "in"}
                        colors="primary:#2516c7"
                        style={{width:25,height:25}}>
                    </lord-icon>
                    <span>Submissions</span>
                </li>
            </ul>
        </div>
    );
}