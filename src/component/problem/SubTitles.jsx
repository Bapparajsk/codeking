import "$/problem/subTitle.css";
import { SubBox } from "#/problem/SubBox";
import Link from "next/link";

export const SubTitles = () => {

    const icons1 = [
        {
            iconName: 'fa-regular fa-message',
            cardHading: "Top Interview 100",
            cardTitle: "Must-do List for Interview Prep",
            target: "top-interview-100"
        },
        {
            iconName: 'fa-solid fa-bullseye',
            cardHading: "Code King 50",
            cardTitle: "Ace Coding Interview with 50 Qs",
            target: "code-king-50"
        },
        {
            iconName: 'fa-solid fa-database',
            cardHading: "SQL 30",
            cardTitle: "Crack SQL Interview 50 Qs",
            target: "sql-30"
        },
        {
            iconName: 'fa-brands fa-amazon',
            cardHading: "Amazon Spring '23 High Frequency",
            cardTitle: "Practice Amazon 25 Recently",
            target: "amazon-spring-23-high-frequency"
        },
        {
            iconName: 'fa-brands fa-google',
            cardHading: "Google Spring '23 High Frequency",
            cardTitle: "Practice Amazon 25 Recently",
            target: "google-spring-23-high-frequency"
        }
    ];

    const icons2 = [
        {
            iconName: 'fa-brands fa-react',
            cardHading: "Algorithms 200",
            cardTitle: "Top 200 Frequency Algorithms",
            target: "algorithms-200"
        },
        {
            iconName: 'fa-solid fa-terminal',
            cardHading: "Shell 50",
            cardTitle: "Best Shell Scripts",
            target: "shell-50"
        },
        {
            iconName: 'fa-solid fa-sitemap',
            cardHading: "Tree Algorithms",
            cardTitle: "Most Frequency Tree Algorithms",
            target: "tree-algorithms"
        },
        {
            iconName: 'fa-solid fa-diagram-project',
            cardHading: "Graph Theory",
            cardTitle: "Essential Graph Problem",
            target: "graph-theory"
        },
        {
            iconName: 'fa-solid fa-circle-nodes',
            cardHading: "Dynamic Programming",
            cardTitle: "Essential DP Patterns",
            target: "dynamic-programming"
        }
    ];

    return (
        <div className={"problem-page-sub-title-box flex"}>
            <Link href={"/studyplan"}>
                <span className={"problem-span"} style={{top: 10, left: 65}}>Study Plan</span>
            </Link>

            <div className={"sub-title-box-container"}>
            <div className={"p-sub-container-top flex"}>
                    {
                        icons1.map((icon, idx) => {
                            return <SubBox key={idx} iDetaile={icon}/>
                        })
                    }
                </div>
                <div className={"p-sub-container-bottom flex"}>
                    {
                        icons2.map((icon, idx) => {
                            return <SubBox key={idx} iDetaile={icon}/>
                        })
                    }
                </div>
            </div>
            <Link href={"/studyplan"}>
                <span className={"problem-span"} style={{bottom: 10, right: 65}}>See all</span>
            </Link>
        </div>
    );
}