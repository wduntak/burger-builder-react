import React from 'react';

const hamburgerButton = (props) => {
    return (
        <div>
            <img src="./menu.svg" onClick={props.clicked} alt="menu" style={{width: "20px"}}/>
        </div>
    );
};

export default hamburgerButton;