'use client'

import React from 'react';
import '$/problem/showProblem/textresult.css'
import { List } from './List.jsx'


export const TestResult = ({ taseCases }) => {
    
    return (
        <div className={'test-result'}>
            <div className={'test-result-hading'}>
                <h4>Test Result</h4>
            </div>
            <div className={'test-result-container'}>
                {
                    taseCases && taseCases.map((item, index) => (
                        <List isTrue={true} Id={'dlm'} key={index} />
                    ))
                }
            </div>
        </div>
    );
};
