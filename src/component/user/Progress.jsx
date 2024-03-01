export const Progress = ({ items }) => {
    const { name, total_Problems , total_Solve , progress_color } = items;
    let progress_width = total_Solve / total_Problems * 250;
    return (
        <div className={'progress-shadow flex'} style={{backgroundColor: `${progress_color}56`}}>
            <div className={'progress-status flex'}>
                <p>{name}</p>
                <p><span>{total_Solve}</span> / {total_Problems}</p>
            </div>
            <div className={'main-progress'} style={{backgroundColor: progress_color, width: progress_width}}></div>
        </div>
    );
}