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

const setProgressValues = (value) => {
    return {
        "Easy": {
            name: "Easy",
            total_Problems: 778,
            total_Solve: value['Easy'],
            progress_color: "#2fd19d",
        },
        "Medium" : {
            name: "Easy",
            total_Problems: 1591,
            total_Solve: value['Medium'],
            progress_color:"#FFC01E"
        },
        "Hard": {
            name: "Hard",
            total_Problems: 664,
            total_Solve: value['Hard'],
            progress_color: "#EF4743"
        }
    }
}

const setProgressStatusTemplate = (value, setValue) => {
    setValue(setProgressValues(value));
}

const getLanProgressTemplate = () => {
    return {
        "java": {
            name: "java",
            total: 1000,
            solve: 600
        },
        "python": {
            name: "python",
            total: 800,
            solve: 290
        },
        "cpp": {
            name: "c++",
            total: 1300,
            solve: 800
        },
        "c": {
            name: "c",
            total: 700,
            solve: 300
        },
        "javaScript": {
            name: "javaScript",
            total: 1000,
            solve: 500
        },
    }
}

module.exports = { getProgressStatusTemplate, setProgressStatusTemplate, getLanProgressTemplate }