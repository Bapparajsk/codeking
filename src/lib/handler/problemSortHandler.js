export const sort = ( problemList, condition, Status ) => {
    const { list, difficulty, status } = condition;
    const { accepted, runtimeError, timeLimitExceeded, wrongAnswer, notAttempted } = Status;
    const sorted = problemList.filter(( problem ) => {

        if (difficulty !== '' && problem.difficulty !== difficulty) {
            return;
        }

        if(status !== '') {
            console.log(!timeLimitExceeded[problem.number])
            if(status === 'Accepted' && !accepted[problem.number]) {
                return;
            }
            if (status === 'Runtime Error' && !runtimeError[problem.number]) {
                return;
            }

            if (status === 'Time Limit Exceeded' && !timeLimitExceeded[problem.number]) {
                return;
            }
            if (status === 'Wrong Answer' && !wrongAnswer[problem.number]) {
                return;
            }
            if (status === 'Not Attempted' && notAttempted[problem.number]) {
                return;
            }
        }

        return problem;
    });
    console.log('sorted',sorted);
    return sorted;
}