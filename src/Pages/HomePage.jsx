import React from 'react'
import MainCarosel from '../customer/components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../customer/components/HomeSectionCarosel/HomeSectionCarosel'
import { mensShoes } from '../Data/mensShoes';
import { mensShirts } from '../Data/mensShirt';
import Footer from '../customer/components/Footer/Footer';

const HomePage = () => {
  return (
    <div>
     <MainCarosel/>
     <div>
      <HomeSectionCarosel data={mensShoes} sectionName={"Men's Shoes"}/>
      <HomeSectionCarosel data={mensShirts} sectionName={"Men's Shirts"}/>
     </div>
     <Footer/>
    </div>
  )
}

export default HomePage
