import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Create from './Create'
import App from './App'

const RoutedApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact="true" element={<App />} />
                <Route path='/create' exact="true" element={<Create />} />
            </Routes>
        </Router>
    )
}

export default RoutedApp