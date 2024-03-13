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

module.exports = { createLink, linkToName, composeFile, findMaxLangth }