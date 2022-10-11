import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import ContactPage from '../pages/ContactPage'
import AdminPage from '../pages/AdminPage'
import LoginPage from '../pages/LoginPage'
import ErrorPage from '../pages/ErrorPage'

const Page = () => {
    return ( 
        <Routes>
            <Route path="/"  element={<HomePage/>} />
            <Route path="/contact"  element={<ContactPage/>} />
            <Route path="/products"  element={<ProductPage/>} />
            <Route path="/admin"  element={<AdminPage/>} />
            <Route path="/login"  element={<LoginPage/>} />
            <Route path="*"  element={<ErrorPage/>} />
        </Routes>
    )
}
 
export default Page;