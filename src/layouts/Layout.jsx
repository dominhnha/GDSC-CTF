import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Mainrouter from '../routes/Mainrouter'
import Loading from '../components/Loading/Loading'

const Layout = props => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Header></Header>
        <main>
          <Mainrouter/>
        </main>
        <Footer></Footer>
      </Suspense>
    </BrowserRouter>
  )
}

Layout.propTypes = {}

export default Layout