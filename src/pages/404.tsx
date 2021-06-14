import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    Page not found - Adrian Frąckowiak - Front End Developer
                </title>
            </Helmet>
            <section className="notfound">
                <h2>Page not found</h2>
                <p>
                    Go to <Link to="/">Home Page</Link> or to{' '}
                    <Link to="/blog">Blog Page</Link>.
                </p>
            </section>
        </Layout>
    );
};

export default NotFoundPage;
