import React from 'react';

export const Spnner = ({size}) => {
    return (
        <div className="lds-ring" style={{wight: '100%', height: '100%'}}>
            <div style={{width: `${size}px`, height: `${size}px`}}></div>
            <div style={{width: `${size}px`, height: `${size}px`}}></div>
            <div style={{width: `${size}px`, height: `${size}px`}}></div>
            <div style={{width: `${size}px`, height: `${size}px`}}></div>
        </div>
    );
};