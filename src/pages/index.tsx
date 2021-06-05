import * as React from 'react';
import Layout from '../components/layout';
import Main from '../components/main';
import About from '../components/about';
import '../styles/index.scss';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Main />
            <About />
        </Layout>
    );
};

export default IndexPage;
