import { useRef } from "react";

export const List = ({ isTrue }) => {
    const ref = useRef();

    return (
        <div
            className={`submissions-content-lists content-lists-before-${isTrue ? 'correct' : 'wrong'} flex`}
            ref={ref}
            onMouseOver={() => ref.current.style.backgroundColor = `rgba(${isTrue ? '11, 232, 62' : '252, 0, 0'}, 0.07)`}
            onMouseOut={() => ref.current.style.backgroundColor = ''}
        >
            <div className={'submissions-content-lists-item flex'}>
                <i className={`fa-regular fa-circle-${isTrue ? 'check' : 'xmark'}`} style={{color: `#${isTrue ? '63E6BE' : 'FF204E'}`}}></i>
                <span style={{color: `#${isTrue ? '63E6BE' : 'FF204E'}`}}>{isTrue ? 'Accepted' : 'Wrong Answer'}</span>
            </div>
        </div>
    )
}
