import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Main from '../components/main';
import About from '../components/about';
import Resume from '../components/resume';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Adrian Frąckowiak - Front End Developer</title>
            </Helmet>
            <About />
            <Resume />
            <Portfolio />
            <Contact />
        </Layout>
    );
};

export default IndexPage;
