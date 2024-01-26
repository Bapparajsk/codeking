import "$/problem/cards.css"
import Image from "next/image";
import Dsa  from "/public/images/Dsa.png";
import java from "/public/images/java.jpg";
import inter from "/public/images/inter.jpg";
import topq from  "/public/images/topq.jpg";

export const Java = () => {
    return (
        <div className={"problem-top-box java problem-top-box"} id={"java"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={Dsa}
                    alt={"this data photo"}
                />
            </div>
            <div className={"inner-problem-bottom-box"}>
            </div>
        </div>
    );
}

export const Python = () => {
    return (
        <div className={"problem-top-box python"} id={"python"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={topq}
                    alt={"this data photo"}
                />
            </div>
            <div className={"inner-problem-bottom-box"}></div>
        </div>
    );
}

export const JavaScript = () => {
    return (
        <div className={"problem-top-box javascript"} id={"javaScript"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={inter}
                    alt={"this data photo"}
                />
            </div>
            <div className={"inner-problem-bottom-box"}></div>
        </div>
    );
}

export const Cpp = () => {
    return (
        <div className={"problem-top-box cpp"} id={"cpp"}>
            <div className={"inner-problem-top-box"}>
                <Image
                    src={java}
                    alt={"this data photo"}
                />
            </div>
            <div className={"inner-problem-bottom-box"}></div>
        </div>
    );
}