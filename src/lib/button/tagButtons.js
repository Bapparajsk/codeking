class easyButton {
    style() {
        return {
            backgroundColor: '#c2f9fb',
            borderRadius: '100px',
            boxShadow: 'rgba(70, 198, 194, .2) 0 -25px 18px -14px inset,rgba(70, 198, 194, .15) 0 1px 2px,rgba(70, 198, 194, .15) 0 2px 4px,rgba(70, 198, 194, .15) 0 4px 8px,rgba(70, 198, 194, .15) 0 8px 16px,rgba(70, 198, 194, .15) 0 16px 32px',
            color: '#46C6C2',
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
            boxShadow: 'rgba(70, 198, 194,.35) 0 -25px 18px -14px inset,rgba(70, 198, 194, .25) 0 1px 2px,rgba(70, 198, 194, .25) 0 2px 4px,rgba(70, 198, 194, .25) 0 4px 8px,rgba(70, 198, 194, .25) 0 8px 16px,rgba(70, 198, 194, .25) 0 16px 32px',
            transform: 'scale(1.05) rotate(-1deg)'
        }
    }

    mouseOut() {
        return {
            boxShadow: 'rgba(70, 198, 194, .2) 0 -25px 18px -14px inset,rgba(70, 198, 194, .15) 0 1px 2px,rgba(70, 198, 194, .15) 0 2px 4px,rgba(70, 198, 194, .15) 0 4px 8px,rgba(70, 198, 194, .15) 0 8px 16px,rgba(70, 198, 194, .15) 0 16px 32px',
            transform: 'scale(1) rotate(0deg)'
        }
    }
}

class mediumButton {
    style() {
        return {
            backgroundColor: '#c2fbd7',
            borderRadius: '100px',
            boxShadow: 'rgba(250, 195, 29, .2) 0 -25px 18px -14px inset,rgba(250, 195, 29, .15) 0 1px 2px,rgba(250, 195, 29, .15) 0 2px 4px,rgba(250, 195, 29, .15) 0 4px 8px,rgba(250, 195, 29, .15) 0 8px 16px,rgba(250, 195, 29, .15) 0 16px 32px',
            color: '#FAC31D',
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
            boxShadow: 'rgba(250, 195, 29,.35) 0 -25px 18px -14px inset,rgba(250, 195, 29,.25) 0 1px 2px,rgba(250, 195, 29,.25) 0 2px 4px,rgba(250, 195, 29, .25) 0 4px 8px,rgba(250, 195, 29,.25) 0 8px 16px,rgba(250, 195, 29, .25) 0 16px 32px',
            transform: 'scale(1.05) rotate(-1deg)'
        }
    }

    mouseOut() {
        return {
            boxShadow: 'rgba(250, 195, 29, .2) 0 -25px 18px -14px inset,rgba(250, 195, 29, .15) 0 1px 2px,rgba(250, 195, 29, .15) 0 2px 4px,rgba(250, 195, 29, .15) 0 4px 8px,rgba(250, 195, 29, .15) 0 8px 16px,rgba(250, 195, 29, .15) 0 16px 32px',
            transform: 'scale(1) rotate(0deg)'
        }
    }
}

const getButton = ( name ) => {
    if (name === "easy") {
        return new easyButton();
    }
    else if(name === "medium") {
        return new mediumButton();
    }
}

export default getButton;