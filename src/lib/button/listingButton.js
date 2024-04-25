export const getButtonDetails = () => {
    return [
        {
            iconName: "fa-solid fa-box-archive",
            buttonName: "All Topics",
            color: "#ffffff"
        },
        {
            iconName: "fa-solid fa-code-compare",
            buttonName: "Algorithms",
            color: "#c2a309",
        },
        {
            iconName: "fa-solid fa-server",
            buttonName: "Database",
            color: "#2712ed",
        },
        {
            iconName: "fa-solid fa-terminal",
            buttonName: "Shell",
            color: "#12ed57",
        },
        {
            iconName: "fa-brands fa-node-js",
            buttonName: "JavaScript",
            color: "#0ce7ef",
        }
    ];
}

export const sortButton = (name) => {
    if (name === 'difficulty') {
        return [
            'Easy',
            'Medium',
            'Hard',
        ];
    }

    return [
        ' Todo',
        ' Solved',
        ' Attempted',
    ];
}
