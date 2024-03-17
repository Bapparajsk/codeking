export const sort = (problemList, condition, Status) => {
    const { difficulty, status } = condition;
    const { accepted, runtimeError, timeLimitExceeded, wrongAnswer, notAttempted } = Status;

    return problemList.filter((problem) => {
        if (difficulty !== '' && problem.difficulty !== difficulty) {
            return false;
        }

        if (status !== '') {
            const statusMap = {
                'Accepted': accepted[problem.number],
                'Runtime Error': runtimeError[problem.number],
                'Time Limit Exceeded': timeLimitExceeded[problem.number],
                'Wrong Answer': wrongAnswer[problem.number],
                'Not Attempted': !notAttempted[problem.number]
            };

            return statusMap[status];
        }

        return true;
    });
};

export const sortByTagName = (problemList, tages) => {
    // const wordSet = new Set(tagName);
    return problemList.filter((problem) => {
        const wordSet = new Set(problem.tagName);
        console.log(problem);
        console.log(wordSet);
        let flag = false;
        for (let key in tages) {
            if (wordSet.has(key)) {
                flag = true;
                break;
            }
        }

        return flag;
    });
}

