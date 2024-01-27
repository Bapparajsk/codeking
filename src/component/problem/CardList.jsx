import "$/problem/cardList.css";
import { Java, Dsa, TopQ, Interview } from "#/problem/Cards";

export const CardList = () => {
    return (
        <div className={'cards flex'}>
            <div className={"card"}><Dsa/></div>
            <div className={"card"}><TopQ/></div>
            <div className={"card"}><Interview/></div>
            <div className={"card"}><Java/></div>
        </div>
    );
}