const getProgressStatusTemplate = () => {
    return {
        "Easy": {
            name: "Easy",
            total_Problems: 778,
            total_Solve: 215,
            progress_color: "#2fd19d",
        },
        "Medium" : {
            name: "Easy",
            total_Problems: 1591,
            total_Solve: 237,
            progress_color:"#FFC01E"
        },
        "Hard": {
            name: "Hard",
            total_Problems: 664, total_Solve: 44,
            progress_color: "#EF4743"
        }
    }
}

const setProgressValues = (value, totalNumbers) => {
    return {
        "Easy": {
            name: "Easy",
            total_Problems: totalNumbers['Easy'],
            total_Solve: value['Easy'],
            progress_color: "#2fd19d",
        },
        "Medium" : {
            name: "Medium",
            total_Problems: totalNumbers['Medium'],
            total_Solve: value['Medium'],
            progress_color:"#FFC01E"
        },
        "Hard": {
            name: "Hard",
            total_Problems: totalNumbers['Hard'],
            total_Solve: value['Hard'],
            progress_color: "#EF4743"
        }
    }
}

const setProgressStatusTemplate = (value, setValue, totalNumbers) => {
    setValue(setProgressValues(value, totalNumbers));
}

const getLanProgressTemplate = () => {
    return {
        "java": {
            name: "java",
            total: 0,
            solve: 0
        },
        "python": {
            name: "python",
            total: 0,
            solve: 0
        },
        "cpp": {
            name: "c++",
            total: 0,
            solve: 0
        },
        "c": {
            name: "c",
            total: 0,
            solve: 0
        },
        "javaScript": {
            name: "javaScript",
            total: 0,
            solve: 0
        },
    }
}

const setLan = (value) => {
    return {
        "java": {
            name: "java",
            solve: value['java']
        },
        "python": {
            name: "python",
            solve: value['python']
        },
        "cpp": {
            name: "c++",
            solve: value['cpp']
        },
        "c": {
            name: "c",
            solve: value['c']
        },
        "javaScript": {
            name: "javaScript",
            solve: value['javaScript']
        },
    }
}

const setLanProgressTemplate = (solve, setValues) => {
    setValues(setLan(solve));
}


const getTagesName = () => {
    const TagName  = [
        "Dynamic Programming",
        "Union Find",
        "Backtracking",
        "Divide and Conquer",
        "Monotonic Stack",
        "Trie",
        "Topological Sort",
        "Data Stream",
        "Hash Table",
        "Math",
        "Depth-First Search",
        "Greedy",
        "Breadth-First Search",
        "Tree",
        "Binary Tree",
        "Binary Search",
        "Array",
        "String",
        "Sorting",
        "Two Pointers",
        "Matrix",
        "Simulation",
        "Stack",
        "Linked List"
    ];
    return TagName;
}

const searchTagesName = (value) => {
    return getTagesName().filter((item) => item.toLowerCase().includes(value.toLowerCase()));
}

module.exports = { getProgressStatusTemplate, setProgressStatusTemplate, getLanProgressTemplate, setLanProgressTemplate, getTagesName, searchTagesName }