import "$/problem/cards.css"
import Image from "next/image";
import dsa  from "/public/images/dsa.png";
import java from "/public/images/java.png";
import inter from "/public/images/inter.jpg";
import topq from  "/public/images/topq.jpg";
import {BoxButton} from "#/problem/BoxButton";

export const Dsa = () => {
    return (
        <div className={"problem-top-box"} id={"dsa"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={dsa}
                    alt={"this data photo"}
                />
                <div className={"top-box-sub-title"}>
                    <h1>Data Structures and <span>Algorithms</span></h1>
                    <h3>Top <span>DSA</span> Questions</h3>
                </div>
            </div>
            <div className={"inner-problem-bottom-box"}>
                <BoxButton details={{page: "pp", name: "Get Started"}}/>
            </div>
        </div>
    );
}

export const TopQ = () => {
    return (
        <div className={"problem-top-box"} id={"topq"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={topq}
                    alt={"this data photo"}
                />
                <div className={"top-box-sub-title"}>
                    <h1>Code King</h1>
                    <h3>Top Questions</h3>
                </div>
            </div>
            <div className={"inner-problem-bottom-box"}>
                <BoxButton details={{page: "pp", name: "Get Started"}}/>
            </div>
        </div>
    );
}

export const Interview = () => {
    return (
        <div className={"problem-top-box"} id={"interview"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={inter}
                    alt={"this data photo"}
                />
                <div className={"top-box-sub-title"}>
                    <h1>Top Interview Questions</h1>
                </div>
            </div>
            <div className={"inner-problem-bottom-box"}>
                <BoxButton details={{page: "pp", name: "Get Started"}}/>
            </div>
        </div>
    );
}

export const Java = () => {
    return (
        <div className={"problem-top-box"} id={"java"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={java}
                    alt={"this data photo"}
                />
                <div className={"top-box-sub-title"}>
                    <div className={"sub-title-top"}></div>
                    <div className={"sub-title-bottom"}></div>
                </div>
            </div>
            <div className={"inner-problem-bottom-box"}>
                <BoxButton details={{page: "pp", name: "Get Started"}}/>
            </div>
        </div>
    );
}