import { useState } from "react";
import Link from "next/link";

export const SubBox = props => {
    const [iconColor, setIconColor] = useState('#000');
    const { iconName, cardHading, cardTitle, target } = props.iDetaile;
    const hoverOnHandler = () => {
        setIconColor('#fff');
    };

    const hoverOutHandler = () => {
        setIconColor('#000');
    };

    return (
        <Link
            className={"p-sub-card flex"}
            onMouseOver={hoverOnHandler}
            onMouseOut={hoverOutHandler}
            href={`/studyplan/${target}`}
        >
            <div className={"p-sub-card-icon flex"}>
                <i className={`${iconName} fa-2x`} id={"icon"} style={{color: iconColor}}></i>
            </div>
            <div className={"p-sub-card-name flex"}>
                <h3>{cardHading}</h3>
                <p>{cardTitle}</p>
            </div>
        </Link>
    )
}