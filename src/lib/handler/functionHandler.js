const createLink = ( name ) => {
    if (name) {
        return name.replaceAll(' ', '-');
    }
    return ''
}

const linkToName = (link) => {
    if (link) {
        return link.replaceAll('-', ' ');
    }
    return ''
}

const composeFile = (key, value) => {
    const newFile = {};

    if(key['user_name']) {
        newFile['user_name'] = value['user_name'];
    }
    if(key['email']) {
        newFile['email'] = value['email'];
    }
    if(key['about_me']) {
        newFile['about_me'] = value['about_me'];
    }
    if(key['county']) {
        newFile['county'] = value['county'];
    }
    if(key['student_professional']) {
        newFile['student_professional'] = value['student_professional'];
    }
    if(key['cursor']) {
        newFile['cursor'] = value['cursor'];
    }

    return newFile;
}

const findMaxLangth = (data) => {
    let max = 0;
    let n = data.length;
    for (let i = 0; i < n; i++) {
        if (data[i].length > max) {
            max = data[i].length;
        }
    }
    return max;
}

const Split = (inputString) => {
    return inputString.split(', ').map(pair => {
        const [key, value] = pair.split(' = ');
        const type = value.trim()[0] === '[' ? 'Array' : !isNaN(parseFloat(value)) && isFinite(value) ? 'Number' : 'String';
        return { key, value, type };
    }).filter(obj => obj.value !== undefined);
};

const splitTestCase = (testCase) => {
    const result = [];
    result.push(Split(testCase.example1.input));
    result.push(Split(testCase.example2.input))

    return result;
}

const getpinNamesIcon = (item) => {
    return item === ' Todo' ? <i className="fa-solid fa-window-minimize" style={{color: '#ffffff', transform: 'translateY(-4.5px)'}}></i> :
        item === " Solved" ? <i className="fa-solid fa-check" style={{color: '#28a745'}}></i> :
            item == " Attempted" ? <i className="fa-solid fa-file-pen" style={{color: '#FFD43B'}}></i>: '';
}

const getTextCode = (name) => {
    return name === 'Easy' ? '#16C2AC' : name === 'Medium' ? '#FFC02F' : name === 'Hard' ? '#FF3B47' : '';
}

module.exports = { createLink, linkToName, composeFile, findMaxLangth, splitTestCase, Split, getpinNamesIcon, getTextCode }
