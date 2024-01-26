import "$/problem/cardList.css";
import { Java, Python, JavaScript, Cpp } from "#/problem/Cards";

export const CardList = () => {
    return (
        <div className={'cards flex'}>
            <div className={"card"}><Java/></div>
            <div className={"card"}><Python/></div>
            <div className={"card"}><JavaScript/></div>
            <div className={"card"}><Cpp/></div>
        </div>
    );
}