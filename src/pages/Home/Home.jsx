import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch,useSelector } from 'react-redux'
// import { userRemainingSelector } from '../../redux/selector/Selector';
import Userslice, { setUser } from '../../redux/slices/Userslice'
const Home = props => {
  const dispatch = useDispatch();
  const userRemaining = useSelector(state=>state.User);
 

  useEffect(()=>{
    dispatch(setUser({
      username:"minh tu",
      password:"0998776677"
    }))
  },[])

 console.log("User",userRemaining)
  return (
    <div>Home</div>
  )
}

Home.propTypes = {}

export default Home