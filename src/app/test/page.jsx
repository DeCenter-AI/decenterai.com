'use client'
import React from 'react'
import { createTable,add_user,add_user_models } from '../utils/tablelandUtils'

const test = () => {
  const handleClick = async (e) => {
    e.preventDefault()
    await add_user_models('abhay203@gmail.com','Somemodel','badfscc...')
  }

  return <button onClick={handleClick}>Test</button>
}

export default test
