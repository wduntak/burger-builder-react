import React, { Fragment } from 'react';

import classes from './Layout.css';

const layout = ( props ) => (
    <Fragment>
        <main className={classes.content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;