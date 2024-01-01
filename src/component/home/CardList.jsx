import '$/home/cardList.css';
import {Card} from "#/home/Card";

const cardDetails = [
    {
        cardW : "180px",
        cardH : "180px",
        topTitle1 : "10px",
        topTitle2 : "80px",
        subTitle1 : "50px",
        subTitle2 : "80px",
        botTitle: "80px",
        bg : "linear-gradient(rgba(12, 239, 164, 0.4), rgba(12, 239, 164, 0.82))",
        topH: "120px",
        botH: "60px",
        play: "30px",
        idx: "card1"
    },
    {
        cardW : "230px",
        cardH : "230px",
        topTitle1 : "80px",
        topTitle2 : "30px",
        subTitle1 : "80px",
        subTitle2 : "50px",
        botTitle: "80px",
        bg : "linear-gradient(rgba(213, 24, 24, 0.45), rgba(213, 24, 24, 0.85))",
        topH: "160px",
        botH: "70px",
        play: "40px",
        idx: "card2"
    },
    {
        cardW : "250px",
        cardH : "280px",
        topTitle1 : "30px",
        topTitle2 : "90px",
        subTitle1 : "90px",
        subTitle2 : "40px",
        botTitle: "100px",
        bg : "linear-gradient(rgba(202, 32, 129, 0.39), rgba(202, 32, 129, 0.85))",
        topH: "200px",
        botH: "80px",
        play: "50px",
        idx: "card3"
    }
]

export const CardList = () => {
    return (
        <div className={'card-list'}>
            {cardDetails.map((card, idx) => {
                return <Card key={idx} card={card}/>
            })}
        </div>
    )
}