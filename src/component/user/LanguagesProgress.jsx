import React, { useState, useEffect } from 'react';
import '$/user/languagesprogress.css';
import Image from "next/image";
import { LanProgress } from "#/user/LanProgress";
import { useUserDetails } from "@/context/user/UserProvider";
import { getLanProgressTemplate, setLanProgressTemplate } from '@/lib/templates/template';
import { useProblem } from '@/context/problemList/ProblemProvider'

export const LanguagesProgress = () => {

    const { userDetails } = useUserDetails();
    const { getSize } = useProblem();

    const [lanProgress, setLanProgress] = useState(getLanProgressTemplate());
    const [lanSolve, setLanSolve] = useState({ name: "", solve: 0 });
    const [defultLan, setDefultLan] = useState(undefined);
    const [totalProblem, setTotalProblem] = useState(0);
    
    const setName = ( name, solve ) => {
        setLanSolve({ name, solve });
    }

    const setDefaultName = () => {
        console.log('djdjksdjkfhasuih', defultLan)
        if (defultLan !== undefined) {
            setLanSolve({name: defultLan.name, solve: defultLan.solve})
        }
    }

    useEffect(() => {
        if (userDetails) {
            const { language } = userDetails;

            
            setLanProgressTemplate(language, setLanProgress);
            let name = '';
            let solve = -1;

            const { java, python, cpp, c, javaScript } = language;
            let maxSolve = -1;
            let maxName = '';

            for (const [lang, solve] of Object.entries(language)) {
                if (solve > maxSolve) {
                    maxSolve = solve;
                    maxName = lang;
                }
            }

            console.log(maxName, maxSolve)

            setLanSolve({ name: maxName, solve: maxSolve });
            setDefultLan({ name: maxName, solve: maxSolve });
        }

        setTotalProblem(getSize())
    }, [userDetails, getSize]);

    return (
        <div className={'lan-card flex'}>
            <div className={'lan-inner-box flex'}>
                <div className={'languages-progress flex'}>
                    <div className={'lan-pro-details'}>
                        <p><span>{lanSolve.name}</span><span>{lanSolve.solve}</span></p>
                    </div>
                    <LanProgress  items={lanProgress['java']} setName={setName} size={totalProblem} setDefaultName={setDefaultName}/>
                    <LanProgress  items={lanProgress['python']} setName={setName} size={totalProblem} setDefaultName={setDefaultName}/>
                    <LanProgress  items={lanProgress['cpp']} setName={setName} size={totalProblem} setDefaultName={setDefaultName}/>
                    <LanProgress  items={lanProgress['c']} setName={setName} size={totalProblem} setDefaultName={setDefaultName}/>
                    <LanProgress  items={lanProgress['javaScript']} setName={setName} size={totalProblem} setDefaultName={setDefaultName}/>
                </div>
                <div className={'languages-box flex'}>
                    <div className="flex" style={{width: "25px"}}><i className="fa-brands fa-java"></i></div>
                    <div className="flex" style={{width: "25px"}}><i className="fa-brands fa-python"></i></div>
                    <div className="flex" style={{width: "25px"}}><Image src="/images/cpp.png" alt="cpp" width={20} height={20} style={{filter: 'grayscale(100%)'}}/></div>
                    <div className="flex" style={{width: "25px"}}><i className="fa-solid fa-copyright"></i></div>
                    <div className="flex" style={{width: "25px"}}><i className="fa-brands fa-js"></i></div>
                </div>
            </div>
        </div>
    );
}