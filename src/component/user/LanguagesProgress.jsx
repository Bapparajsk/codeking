import React, {useState} from 'react';
import '$/user/languagesprogress.css';
import Image from "next/image";
import {LanProgress} from "#/user/LanProgress";


export const LanguagesProgress = () => {
    const [lanProgress, setLanProgress] = useState([
        {
        name: "java",
            total: 1000,
            solve: 600
        },
        {
            name: "python",
            total: 800,
            solve: 290
        },
        {
            name: "c++",
            total: 1300,
            solve: 800
        },
        {
            name: "c",
            total: 700,
            solve: 300
        },
        {
            name: "javaScript",
            total: 1000,
            solve: 500
        },
    ]);
    const [lanSolve, setLanSolve] = useState({
        name: "java",
        solve: 600
    });

    const setName = ( name, solve ) => {
        setLanSolve({ name, solve });
    }

    const setDefault = () => {
        setLanSolve({
            name: "java",
            solve: 600
        })
    }

    return (
        <div className={'lan-card flex'}>
            <div className={'lan-inner-box flex'}>
                <div className={'languages-progress flex'}>
                    <div className={'lan-pro-details'}>
                        <p><span>{lanSolve.name}</span><span>{lanSolve.solve}</span></p>
                    </div>
                    {
                        lanProgress.map((item, idx) => {
                            return <LanProgress key={idx} items={item} setName={setName} setDefualt={setDefault}/>
                        })
                    }
                </div>
                <div className={'languages-box flex'}>
                    <div className="flex" style={{width: "25px"}}><i className="fa-brands fa-java"></i></div>
                    <div className="flex" style={{width: "25px"}}><i className="fa-brands fa-python"></i></div>
                    <div className="flex" style={{width: "25px"}}><Image src="/images/cpp.png" alt="cpp" width={20} height={20} style={{filter: 'grayscale(100%)'}}/></div>
                    <div className="flex" style={{width: "25px"}}><i className="fa-solid fa-copyright"></i></div>
                    <div className="flex" style={{width: "25px"}}><i className="fa-brands fa-js"></i></div>
                </div>
            </div>
        </div>
    );
}