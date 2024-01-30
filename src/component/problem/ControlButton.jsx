import { useState, useEffect } from "react";

export const ControlButton = props => {
    const [roted, setRoted] = useState(0);
    const onClickHandle = () => {
        if (roted === 0) {
            setRoted(180);
            console.log(roted)
            setTimeout(() => {
                window.addEventListener("click", windowHan);
            }, 300)
            // w.addEventListener("click", windowHan);
        } else {
            setRoted(0);
            console.log(roted)
            setTimeout(() => {
                window.removeEventListener("click", windowHan);
            }, 300)
        }
    }

    const windowHan = () => {
        setRoted(0);
        setTimeout(() => {
            window.removeEventListener("click", windowHan);
        }, 300)
    }

    useEffect(() => {
        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener("click", windowHan);
        };
    }, [roted]);

    return (
        <div className={"pro-con-button flex"} onClick={onClickHandle}>
            <p >{props.buttonName}</p>
            <i className="fa-solid fa-angle-down" style={{transform: `rotate(${roted}deg)`}}></i>
        </div>
    )
}