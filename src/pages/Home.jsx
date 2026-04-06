import React from 'react'
import Header from '../components/header'
import SpecialityMenu from '../components/specialityMenu'
import Topdoctors from '../components/Topassets'
import Banner from '../components/banner'
import TopAssets from '../components/Topassets'

const Home = () => {
  return (
    <div>
         <Header />
         <SpecialityMenu />
         <TopAssets />
         <Banner />
    </div>
  )
}

export default Home