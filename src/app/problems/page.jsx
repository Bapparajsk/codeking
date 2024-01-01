"use client"

import React, {useState} from 'react';

const Page = () => {

    const [c, setC] = useState(true);
    const click = () => {
        setC(!c);
        console.log(c);
    }

    return (
        <div className={'eye'}>
            <lord-icon
                src="https://cdn.lordicon.com/fmjvulyw.json"
                trigger="click"
                state="morph-lashes"
                style={{width: "250px", height: "250px"}}>
            </lord-icon>
            <button onClick={click}>
                <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="click"
                    state={c? "morph-lashes" : "in-reveal"}
                    style={{width: "250px", height: "250px"}}>
                </lord-icon>
            </button>

        </div>
    );
};

export default Page;