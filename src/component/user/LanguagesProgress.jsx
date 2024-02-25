import React, {useState} from 'react';
import '$/user/languagesprogress.css';
import Image from "next/image";
import { LanProgress } from "#/user/LanProgress";
import { useUserDetails } from "@/context/user/UserProvider";
import { getLanProgressTemplate } from '@/lib/templates/template';


export const LanguagesProgress = () => {

    const { userDetails } = useUserDetails();

    const [lanProgress, setLanProgress] = useState(getLanProgressTemplate());
    const [lanSolve, setLanSolve] = useState({ name: "java", solve: 600 });

    const setName = ( name, solve ) => {
        setLanSolve({ name, solve });
    }

    const setDefault = () => {
        setLanSolve({
            name: "java",
            solve: 600
        })
    }

    return (
        <div className={'lan-card flex'}>
            <div className={'lan-inner-box flex'}>
                <div className={'languages-progress flex'}>
                    <div className={'lan-pro-details'}>
                        <p><span>{lanSolve.name}</span><span>{lanSolve.solve}</span></p>
                    </div>
                    <LanProgress  items={lanProgress['java']} setName={setName} setDefualt={setDefault}/>
                    <LanProgress  items={lanProgress['python']} setName={setName} setDefualt={setDefault}/>
                    <LanProgress  items={lanProgress['cpp']} setName={setName} setDefualt={setDefault}/>
                    <LanProgress  items={lanProgress['c']} setName={setName} setDefualt={setDefault}/>
                    <LanProgress  items={lanProgress['javaScript']} setName={setName} setDefualt={setDefault}/>
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