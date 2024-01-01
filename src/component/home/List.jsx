import React from 'react';

const List = props => {
    return (
        <div className={'list-child'}>
            <div className={'list-child-left'}></div>
            <div className={'list-child-right'} style={{background: props.color}}></div>
        </div>
    );
};
export default List;