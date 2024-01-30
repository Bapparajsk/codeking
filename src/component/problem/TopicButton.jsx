export const TopicButton = props=> {

    const { iconName, buttonName, color } = props.details;

    return (
        <div className={"pro-control-button flex"}>
            <i className={iconName} style={{color: color}}></i>
            <p>{buttonName}</p>
        </div>
    )
}