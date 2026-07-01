import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <h2 className='text-center text-emerald-600 text-3xl font-bold mt-10 bg-yellow-200 py-4'>This Page is not exist. Please go to <Link className='text-blue-600' to='/' >Home</Link> </h2>
  )
}

export default ErrorPage
