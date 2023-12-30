export const Card = props => {
    const {cardW, cardH, topTitle1, topTitle2, subTitle1, subTitle2, botTitle, bg, topH, botH, play, idx} = props.card;
    return (
        <div className={`card ${idx}`} style={{width: cardW, height: cardH, background: "#fff"}}>
            <div className={'top'} style={{background: bg, height: topH}}>
                <div className={'top-title'}>
                    <div className={'top-title-one'} style={{width: topTitle1}}></div>
                    <div className={'top-title-one'} style={{width: topTitle2}}></div>
                </div>
                <div className={'top-sub-title'}>
                    <div className={'sub-title-box'} style={{width: subTitle1}}></div>
                    <div className={'sub-title-box'} style={{width: subTitle2}}></div>
                    <div></div>
                </div>
            </div>
            <div className={'play'} style={{bottom: play}}>
                <div className={'play-box'}></div>
            </div>
            <div className={'bot'} style={{height: botH}}>
                <div className={'top-title-one'} style={{width: botTitle}}></div>
            </div>
        </div>
    )
}