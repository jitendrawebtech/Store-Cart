
import { Outlet } from 'react-router-dom'
import Hero from '../componets/sections/Hero'
import ProductsList from '../componets/sections/ProductsList'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsList />
    </>
  )
}

export default Home
