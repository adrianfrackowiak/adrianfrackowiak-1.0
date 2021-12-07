import React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Adrian Frąckowiak - Front End Developer</title>
            </Helmet>
            <h1>adrianfrackowiak</h1>
        </>
    );
};

export default IndexPage;
