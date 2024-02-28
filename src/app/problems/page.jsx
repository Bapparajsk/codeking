"use client"

import { useEffect } from "react";
import { Footer } from "#/footer/Footer";
import "$/problem/style.css"
import { CardList } from "#/problem/CardList";
import { SubTitles } from "#/problem/SubTitles";
import { ProblemsList } from "#/problem/ProblemsList";
import { useNavigateRouter } from '@/context/navigation/NavigateProvider';
import { useAuthUser } from '@/context/usertoken/AuthUser';

const Page = () => {

    const { router } = useNavigateRouter();
    const { token, getAndSetTokenInLocalstorage } = useAuthUser();

    if (token === undefined) {
        router.push('/login');
    }

    useEffect(() => {
        document.title = "Code King - Problems List"
    }, []);

    return (
        <>
            <main className={"problem-page"}>
                <div className={"problem-page-hero-bar"}>
                    <CardList/>
                </div>
                <div className={"problem-page-sub-title-bar"}>
                    <SubTitles/>
                </div>
                <div className={"problem-lists"}>
                    <ProblemsList/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Page;
