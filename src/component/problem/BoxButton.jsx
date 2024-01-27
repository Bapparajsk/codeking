import Link from "next/link";
import React, {useState} from "react";

export const BoxButton = props => {
    const [hover, setHover] = useState(false);

    return (
        <Link
            href={`/problems/top/${props.name}`}
            className={"login-button box-button"}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <span>Get Started</span>
            <lord-icon
                src="https://cdn.lordicon.com/vduvxizq.json"
                trigger={hover ? "loop" : ""}
                style={{width: "20px", height: "20px"}}
            >
            </lord-icon>
        </Link>
    )
}