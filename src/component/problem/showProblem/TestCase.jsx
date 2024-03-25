import React, { useState, useEffect } from 'react';
import '$/problem/showProblem/testCase.css';
import { useProblem } from '@/context/problemList/ProblemProvider';
import { Split } from '@/lib/handler/functionHandler';

export const TestCase = ({ testCases, setTestCases }) => {
    const [activeTestCase, setActiveTestCase] = useState();
    const [showAddtext, setShowAddtext] = useState(false);
    const [howcurrntTaseCAse, setHowcurrntTaseCAse] = useState(undefined);

    const handleAddCase = () => {

        setTestCases(prev => {
            const newCase = testCases[testCases.length - 1];
            return [...prev, newCase];
        });
    }

    useEffect(() => {
        if (testCases) {
            let key = 1;
            const updatedState = {};
            for (const testCase of testCases) {
                updatedState[key] = key === 1;
                key++;
            }
            setActiveTestCase(updatedState);
            setHowcurrntTaseCAse(testCases[0][0]);
        }
    }, [testCases]);


    return (
        <div className={'testCase-box'}>
            <div className={'testCase-title flex'}>
                {
                    activeTestCase && Object.keys(activeTestCase).map((key, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={() => {
                                    console.log("activeTestCase");
                                    setHowcurrntTaseCAse(testCases[idx][0])
                                    setActiveTestCase(prevState => {
                                        const updatedState = {};
                                        for (const k in prevState) {
                                            updatedState[k] = (k === key);
                                        }
                                        return updatedState;
                                    });
                                }}
                            >
                                <CaseButton
                                    caseNumber={key}
                                    isActive={activeTestCase[key]}
                                />
                            </div>

                        )
                    })
                }
                { testCases.length < 8 &&
                    <div className={'add-case-button flex'}>
                        <i
                            className="fa-solid fa-plus"
                            onMouseOver={() => setShowAddtext(true)}
                            onMouseOut={() => setShowAddtext(false)}
                            onClick={handleAddCase}
                        ></i>
                        <div className={'add-case-button-text flex'} style={{display: showAddtext ? 'flex' : 'none'}}>
                            <span>Add Case</span>
                        </div>
                    </div>
                }
            </div>
            <div>
                {
                    howcurrntTaseCAse?.key
                }
                {
                    howcurrntTaseCAse?.value
                }
            </div>
        </div>
    );
};


const CaseButton = ({caseNumber, isActive}) => {
    const [showXMark, setShowXMark] = useState(false);
    console.log(caseNumber);
    return (
        <button
            className={`case-button ${isActive ? 'case-button-active' : ''}`}
            onMouseOver={() => setShowXMark(true)}
            onMouseOut={() => setShowXMark(false)}
        >
            {caseNumber !== '1' && <div
                className={'case-button-icon flex '}
                style={{display: showXMark ? 'flex' : 'none'}}
            >
                <i className="fa-solid fa-xmark"></i>
            </div>}
            <span>Case {caseNumber}</span>
        </button>
    )
}
