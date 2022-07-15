import { Col } from 'antd'
import React, { useEffect } from 'react'
import { json } from 'stream/consumers'
import AllNews from './HomePageContents/AllNews'
import SignIn from './SignIn'
import SignUp from './SignUp'

const HomePage = () => {

  return (
    <div>
      <SignIn/>
      <SignUp/>
      <AllNews/>
    </div>
  )
}

export default HomePage