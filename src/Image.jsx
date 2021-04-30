import React from 'react';

const Image = (props) => {


    return (
        <>

            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(${props.imgSrc})` }}>
                </div>
            </div>

        </>
    )
}

export default Image;