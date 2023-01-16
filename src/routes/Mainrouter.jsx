import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home' 

const Mainrouter = props => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} >
               
            </Route>
            {/* <Route path='*' element={<Error />}></Route> */}
        </Routes>
    )
}

Mainrouter.propTypes = {}

export default Mainrouter