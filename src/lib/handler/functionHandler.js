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

module.exports = { createLink, linkToName }