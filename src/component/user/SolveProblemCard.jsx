import { useState } from 'react';

export const SolveProblemCard = ({number, name}) => {

    const [solveHover, setSolveHover] = useState(false);
    function getCurrentDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        let yyyy = today.getFullYear();

        return dd + '/' + mm + '/' + yyyy;
    }

    return (
        <div
            className={'solve-problem-card flex'}
            onMouseOver={() => setSolveHover(true)}
            onMouseOut={() => setSolveHover(false)}
        >
            <div className={'problem-name-number'}>
                <span>{number}</span>
                <span>{name}</span>
            </div>
            <div className={'solve-date flex'}>
                <span>{getCurrentDate()}</span>
                <lord-icon
                    src="https://cdn.lordicon.com/cgzlioyf.json"
                    trigger={solveHover ? 'loop': 'in'}
                    stroke="bold"
                    state="hover-pinch"
                    colors="primary:#16c72e"
                    style={{ width: 25, height: 25 }}>
                </lord-icon>
            </div>
        </div>
    );
};
