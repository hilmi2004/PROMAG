import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children, title = 'Promag - Integrated Services', description = 'Promag offers integrated ICT, Telecommunication, and Agricultural services in Nigeria.' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/testtailwind/public/favicon.ico" />
            </Head>

            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Layout;