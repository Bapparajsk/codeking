"use client"

import { useEffect } from "react";
import { Footer } from "#/footer/Footer";
import "$/problem/style.css"
import { CardList } from "#/problem/CardList";
import { SubTitles } from "#/problem/SubTitles";

const Page = () => {

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
            </main>
            <Footer/>
        </>
    );
};

export default Page;
