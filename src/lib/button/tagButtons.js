class mainStyle {

    constructor( rgb, color ) {
        this.rgb = rgb;
        this.color = color
    }

    getStyle() {
        return {
            backgroundColor: '#c2f9fb',
            borderRadius: '100px',
            boxShadow: `rgba(${this.rgb}, .2) 0 -25px 18px -14px inset,rgba(${this.rgb}, .15) 0 1px 2px,rgba(${this.rgb}, .15) 0 2px 4px,rgba(${this.rgb}, .15) 0 4px 8px,rgba(${this.rgb}, .15) 0 8px 16px,rgba(${this.rgb}, .15) 0 16px 32px`,
            color: this.color,
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif',
            padding: '7px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'all 250ms',
            border: '0',
            fontSize: '16px',
            userSelect: 'none',
            webkitUserSelect: 'none',
            touchAction: 'manipulation',
        }
    }

    mouseOver() {
        return {
            boxShadow: `rgba(${this.rgb}, .35) 0 -25px 18px -14px inset,rgba(${this.rgb}, .25) 0 1px 2px,rgba(${this.rgb}, .25) 0 2px 4px,rgba(${this.rgb}, .25) 0 4px 8px,rgba(${this.rgb}, .25) 0 8px 16px,rgba(${this.rgb}, .25) 0 16px 32px`,
            transform: 'scale(1.05) rotate(-1deg)'
        }
    }

    mouseOut() {
        return {
            boxShadow: `rgba(${this.rgb}, .2) 0 -25px 18px -14px inset,rgba(${this.rgb}, .15) 0 1px 2px,rgba(${this.rgb}, .15) 0 2px 4px,rgba(${this.rgb}, .15) 0 4px 8px,rgba(${this.rgb}, .15) 0 8px 16px,rgba(${this.rgb}, .15) 0 16px 32px`,
            transform: 'scale(1) rotate(0deg)'
        }
    }
}

const getButton = ( name ) => {
    if (name === "Easy") {
        return new mainStyle("70, 198, 194", "#46C6C2");
    }
    else if(name === "Medium") {
        return new mainStyle("250, 195, 29", "#FAC31D");
    }

    return new mainStyle("255, 55, 66", "#FF3742");
}

export default getButton;