import "$/problem/problems.css"
import {ProblemBox} from "#/problem/ProblemBox";
import Link from "next/link";

export const Problems = () => {
    return (
        <div className={"problems-container flex"}>
            <Link href={"ss"} style={{width: "100%"}}>
                <ProblemBox
                    successful={false}
                    problemNumber={101}
                    problemName={"Letter Combinations of a Phone Number"}
                    difficulty={"Easy"}
                    submission={{sub: 100, total: 5000}}
                />
            </Link>

            <ProblemBox
                successful={true}
                problemNumber={387}
                problemName={"Find First and Last Position of Element in Sorted"}
                difficulty={"Medium"}
                submission={{sub: 2000, total: 5000}}
            />
            <ProblemBox
                successful={true}
                problemNumber={10}
                problemName={"Regular Expression Matching"}
                difficulty={"Hard"}
                submission={{sub: 80, total: 5000}}
            />
            <ProblemBox
                successful={false}
                problemNumber={10}
                problemName={"Regular Expression Matching"}
                difficulty={"Hard"}
                submission={{sub: 80, total: 5000}}
            />
        </div>
    )
}