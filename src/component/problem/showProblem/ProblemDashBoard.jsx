import "$/problem/showProblem/dashboardNavbar.css"
import { DashboardNavbar } from "#/problem/showProblem/DashboardNavbar";
import { Dashboard } from "#/problem/showProblem/Dashboard";
import NavigateProvider from "@/context/navigation/NavigateProvider";

export const ProblemDashBoard = () => {
    return (
        <div className={"problem-dashboard flex"}>
            {/*<NavigateProvider>*/}
                <DashboardNavbar/>
                <Dashboard/>
            {/*</NavigateProvider>*/}
        </div>
    )
}