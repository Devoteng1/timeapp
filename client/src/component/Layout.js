import React, { Fragment } from 'react';
//import { Link } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import ContentTable from './ContentTable';
import Login from '../auth/Login'


const Layout = ({ children }) => {

    return (
        <Fragment>
           <Header />
           <Menu />
           <ContentTable />
           <Footer />
           <div className='container'>{children}  </div>
        </Fragment>
    )
}

export default Layout;