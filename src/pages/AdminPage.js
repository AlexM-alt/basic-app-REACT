import React from 'react'
import {Navigate} from 'react-router-dom'

const permission = false


const AdminPage = () => {
    return (
            <>
                { permission ? (<h1>Panel Admina - dzień dobry</h1>) : (<Navigate to="/login"/>)}
            </>
        )
}
 
export default AdminPage;