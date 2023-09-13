import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Create from './Create'
import App from './App'
import NotFound from './NotFound'
import Edit from './Edit'

const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact="true" element={<App />} />
                <Route path='/create' exact="true" element={<Create />} />
                <Route path='*' element={<NotFound />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp