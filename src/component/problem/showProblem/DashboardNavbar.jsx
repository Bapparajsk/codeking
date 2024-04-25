import { useState } from "react";
import { useNavigateRouter } from "@/context/navigation/NavigateProvider";

export const DashboardNavbar = () => {
    const [desHover, setDesHover] = useState(false);
    const [subHover, setSubHover] = useState(false);
    const [testHover, setTestHover] = useState(false);
    const [recHover, setRecHover] = useState(false);
    const [solHover, setSolHover] = useState(false);

    const { setNavigate } = useNavigateRouter();

    return (
        <div className={"dashboard-nav flex"}>
            <ul className={"flex"}>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setDesHover(true)}
                    onMouseOut={() => setDesHover(false)}
                    onClick={() => setNavigate('Description')}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/vdjwmfqs.json"
                        trigger={desHover ? "loop" : "in"}
                        colors="primary:#2516c7"
                        style={{width: 25, height: 25}}>
                    </lord-icon>
                    <span>Description</span>
                </li>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setSolHover(true)}
                    onMouseOut={() => setSolHover(false)}
                    onClick={() => setNavigate('Solution')}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/yodjuckr.json"
                        trigger={solHover ? "loop" : "in"}
                        colors="primary:#2516c7,secondary:#b4b4b4"

                        style={{width: 25, height: 25}}>
                    </lord-icon>
                    <span>Solution</span>
                </li>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setTestHover(true)}
                    onMouseOut={() => setTestHover(false)}
                    onClick={() => setNavigate('TestCase')}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/oqdmuxru.json"
                        trigger={testHover ? "loop" : "in"}
                        colors="primary:#16c72e"
                        style={{width: 25, height: 25}}>
                    </lord-icon>
                    <span>TestCase</span>
                </li>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setRecHover(true)}
                    onMouseOut={() => setRecHover(false)}
                    onClick={() => setNavigate('TestResult')}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/xynjytfp.json"
                        trigger={recHover ? "loop" : "in"}
                        colors="primary:#16c72e,secondary:#109121"
                        stroke="bold"
                        style={{width: 25, height: 25}}>
                    </lord-icon>
                    <span>Test Result</span>
                </li>
                <li
                    className={"dashboard-nav-name"}
                    onMouseOver={() => setSubHover(true)}
                    onMouseOut={() => setSubHover(false)}
                    onClick={() => setNavigate('Submissions')}
                >
                    <lord-icon
                        src="https://cdn.lordicon.com/vuiggmtc.json"
                        trigger={subHover ? "loop" : "in"}
                        colors="primary:#2516c7"
                        style={{width: 25, height: 25}}>
                    </lord-icon>
                    <span>Submissions</span>
                </li>
            </ul>
        </div>
    );
}
