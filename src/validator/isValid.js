const isEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const isPassword = pass => {
    let low = false;
    let up = false;
    let di = false;
    let sp = false;

    for (const ch of pass) {
        if (/[a-z]/.test(ch)) {
            low = true;
        } else if (/[A-Z]/.test(ch)) {
            up = true;
        } else if (/\d/.test(ch)) {
            di = true;
        } else {
            sp = true;
        }
    }

    return [low, up, di, sp];
}

const isPasswordSame = (pass1, pass2) => {
    if(pass2.length > pass1.length) {
        return false;
    }

    let n = pass2.length;
    for (let i = 0; i < n; i++) {
        if (pass1.charAt(i) !== pass2.charAt(i)) {
            return false;
        }
    }

    return true;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { isEmail, isPassword, isPasswordSame };