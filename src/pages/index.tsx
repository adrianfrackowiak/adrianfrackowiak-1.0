import React from 'react';
import Layout from '../components/layout';
import Main from '../components/main';
import About from '../components/about';
import Resume from '../components/resume';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import '../styles/index.scss';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Main />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
        </Layout>
    );
};

export default IndexPage;
