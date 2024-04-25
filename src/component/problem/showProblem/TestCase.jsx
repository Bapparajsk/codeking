import React, { useState, useEffect } from 'react';
import '$/problem/showProblem/testCase.css';
import { useProblem } from '@/context/problemList/ProblemProvider';

export const TestCase = ({ testCases, setTestCases }) => {
    const [showAddtext, setShowAddtext] = useState(false);
    const [howcurrntTaseCAse, setHowcurrntTaseCAse] = useState(undefined);
    const [activeTestCase, setActiveTestCase] = useState(0);

    const handleAddCase = () => {
        setTestCases(prev => {
            const newCase = howcurrntTaseCAse.map((input, idx) => {
                return { key: input.key, value: input.value};
            });
            return [...prev, newCase];
        });
    }

    const handleInputChange = (newValue, idx) => {
        setTestCases(prev => {
            const updatedCases = [...prev];
            updatedCases[activeTestCase][idx].value = newValue;
            return updatedCases;
        });
    };

    useEffect(() => {
        if (testCases) {
            setHowcurrntTaseCAse(testCases[0]);
        }
    }, []);


    return (
        <div className={'testCase-box'}>
            <div className={'testCase-title flex'}>
                {
                    testCases?.map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={() => {
                                    console.log("activeTestCase");
                                    setHowcurrntTaseCAse(testCases[idx])
                                    setActiveTestCase(idx);
                                }}
                            >
                                <CaseButton
                                    caseNumber={idx+1}
                                    isActive={activeTestCase === idx}
                                />
                            </div>
                        )
                    })
                }
                { testCases?.length < 8 &&
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
            <div className={'testCase-show-box flex'}>
                {
                    howcurrntTaseCAse && howcurrntTaseCAse.map((input, idx) => {
                        return (
                            <div key={idx} className={'testCase-show-card flex'}>
                                <InputName name={input.key}/>
                                <InputValue
                                    value={input.value}
                                    onChange={(newValue) => {
                                        console.log(newValue);
                                        handleInputChange(newValue, idx);
                                    }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};


const CaseButton = ({caseNumber, isActive}) => {
    const [showXMark, setShowXMark] = useState(false);
    return (
        <button
            className={`case-button ${isActive ? 'case-button-active' : ''}`}
            onMouseOver={() => setShowXMark(true)}
            onMouseOut={() => setShowXMark(false)}
        >
            {caseNumber !== 1 && <div
                className={'case-button-icon flex '}
                style={{display: showXMark ? 'flex' : 'none'}}
            >
                <i className="fa-solid fa-xmark"></i>
            </div>}
            <span>Case {caseNumber}</span>
        </button>
    )
}

const InputName = ({name}) => {
    return (
        <div className={'testCase-show-box-input-name'}>
            <span>{name} =</span>
        </div>
    )
}

const InputValue = ({ value, onChange }) => {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className={'testCase-show-box-input-value'}>
            <input value={value} onChange={handleInputChange}/>
        </div>
    )
}

