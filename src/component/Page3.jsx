import '$/page3.css'
import Link from "next/link";
import React, {useState} from "react";
import {CardList} from "#/CardList";

export const Page3 = () => {
    const [loop, setLoop] = useState(false);

    return (
        <div className={'page3'}>
            <div className={'explore-box'}>
                <div className={'explore'}>
                    <div className={'hading'}>
                        <h1>Start Exploring</h1>
                        <div className={'hading-ex-icon'}>
                            <lord-icon
                                src="https://cdn.lordicon.com/fkdzyfle.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#ffffff"
                                style={{width: "25px", height: "25px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <p>Explore is a well-organized tool that helps you get the most out of Code King by providing
                        structure to guide your progress towards the next step in your programming career.</p>
                    <Link className={'explore-button'} href={'/exploring'} onMouseOver={() => setLoop(true)}
                          onMouseOut={() => setLoop(false)}>
                        <span>Create Account</span>
                        <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger={loop ? "loop" : ""}
                            style={{width: "20px", height: "20px"}}
                        >
                        </lord-icon>
                    </Link>
                </div>
                <div className={'explore-icons'}>
                    <CardList/>
                </div>
            </div>
        </div>
    )
}