import { useState, useEffect } from "react";
import { findMaxLangth, getpinNamesIcon, getTextCode } from '@/lib/handler/functionHandler';

export const ControlButton = ({ buttonName, list, setPinName, keyName }) => {
    const [roted, setRoted] = useState(0);
    const [box, setBox] = useState(0);

    const onClickHandle = () => {
        if (roted === 0) {
            setRoted(180);
            setTimeout(() => {
                window.addEventListener("click", windowHan);
            }, 300)

        } else {
            setRoted(0);
            setTimeout(() => {
                window.removeEventListener("click", windowHan);
            }, 300)
        }
    }

    const windowHan = (e) => {
        setRoted(0);
        setTimeout(() => {
            window.removeEventListener("click", windowHan);
        }, 300)
    }

    useEffect(() => {
        return () => {
            window.removeEventListener("click", windowHan);
        };
    }, [roted]);

    useEffect(() => {
        if (list) {
            const maxLangth = findMaxLangth(list);
            setBox((maxLangth * 10) + 40);
        }

    }, [list]);

    return (
        <div className={"pro-con-button flex"} onClick={onClickHandle}>
            <p >{buttonName}</p>
            <i className="fa-solid fa-angle-down" style={{transform: `rotate(${roted}deg)`}}></i>
            <div className={'pro-con-box'} style={{width: `${box}px`, display: `${roted === 0 ? 'none' : 'block'}`}}>
                <ul>
                    {list?.map((item, index) => {
                        let textColor = getTextCode(item);
                        return (
                            <li
                                key={index}
                                style={{color: `${textColor.length !== 0 ? textColor : ''}`}}
                                onClick={() => setPinName(keyName, item)}
                            >
                                { getpinNamesIcon(item)}
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
