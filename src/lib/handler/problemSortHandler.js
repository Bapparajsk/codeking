const sortByDifficulty = (problemList, difficulty) => {
    return problemList.filter((problem) => problem.difficulty === difficulty );
};

const sortByStatus = (problemList, status, userStatus) => {;
    const { Solved, Attempted } = userStatus;

    return problemList.filter((problem) => {
        const { id } = problem;
        if (status === ' Todo') {
            return !Solved[id] && !Attempted[id];
        } else if (status === ' Solved') {
            return Solved[id];
        }
        return Attempted[id];
    });
};

const sortByTagName = (problemList, tages) => {
    // const wordSet = new Set(tagName);
    return problemList.filter((problem) => {
        const wordSet = new Set(problem.tagName);
        let flag = true;
        for (let key in tages) {
            if (!wordSet.has(key)) {
                flag = false;
                break;
            }
        }

        return flag;
    });
}

export { sortByDifficulty, sortByStatus, sortByTagName };
