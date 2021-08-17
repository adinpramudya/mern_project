import React from 'react'
import propTypes from 'prop-types'

import './index.scss'

export default function Star({ className, value, height, width, spacing }) {
    const desimals = Number(value) % 1;

    const star = [];
    let leftPos = 0
    for (let index = 0; index < 5 && index < value - desimals; index++) {
        leftPos =  leftPos + width;
        star.push(
            <div className="star" key={`star-${index}`} style={{left: index*width,height: height, width: width, marginRight: spacing}}></div>
        );
        
    }
    if(desimals > 0 && value <= 5)
    star.push(
        <div className="star" key={`starWithDesimal}`} style={{left: leftPos,height: height, width: desimals* width- spacing}}></div>
    );

    const starPlaceHolder = [];
    for (let index = 0; index < 5 ; index++) {
        star.push(
            <div className="star placeholder" key={`starPlaceHolder-${index}`} style={{left: index * width,height: height, width: width, marginRight: spacing}}></div>
        );
        
    }
    return (
        <>
            <div className={["stars", className].join(" ")} style={{ height: height }}>
                {starPlaceHolder}
                {star}
            </div>
        </>
    )
}

Star.propTypes={
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number
}
