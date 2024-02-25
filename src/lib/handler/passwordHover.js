const textToPass = (value, setPassword, setPassHover) => {
    setPassword(value ? 'password' : 'text');
    setPassHover(!value);
}

module.exports = { textToPass };