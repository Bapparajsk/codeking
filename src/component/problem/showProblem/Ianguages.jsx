export const Languages = ({ opa, setLan, currLAn }) => {

    const lan = [ "java", "c", "cpp", "python", "javaScript" ];

    const handleClick = (selectedLanguage) => {
        if (setLan) {
            setLan(selectedLanguage);
        }
    };

    return (
        <div className={"editor-languages-box flex"} style={{opacity: opa}}>
            {
                lan.map((value, index) => (
                    <span
                        key={index}
                        className={`flex ${currLAn === value ? 'is-current' : ''}`}
                        onClick={() => handleClick(value)}
                    >
                        {value}
                    </span>
                ))
            }
        </div>
    )
}