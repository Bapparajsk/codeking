import "$/problem/showProblem/dashboardNavbar.css"
import { DashboardNavbar } from "#/problem/showProblem/DashboardNavbar";
import { Dashboard } from "#/problem/showProblem/Dashboard";


export const ProblemDashBoard = () => {
    return (
        <div className={"problem-dashboard flex"}>
            <DashboardNavbar/>
            <Dashboard/>
        </div>
    )
}