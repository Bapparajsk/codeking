import "$/problem/subTitle.css";
import {SubBox} from "$/problem/SubBox";

export const SubTitles = () => {
    return (
        <div className={"problem-page-sub-title-box flex"}>
            <span className={"problem-span"} style={{top: 10, left: 65}}>Study Plan</span>
            <div className={"sub-title-box-container"}>
                <div className={"p-sub-container-top flex"}>
                    <SubBox/>
                    <SubBox/>
                    <SubBox/>
                    <SubBox/>
                    <SubBox/>
                </div>
                <div className={"p-sub-container-bottom flex"}>
                    <SubBox/>
                    <SubBox/>
                    <SubBox/>
                    <SubBox/>
                    <SubBox/>
                </div>
            </div>
            <span className={"problem-span"} style={{bottom: 10, right: 65}}>See all</span>
        </div>
    )
}