import * as React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Page not found - Adrian Frąckowiak - Front End Developer
                </title>
            </Helmet>
            <h1>404</h1>
        </>
    );
};

export default NotFoundPage;
