import React from 'react'
import MainCarosel from '../customer/components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../customer/components/HomeSectionCarosel/HomeSectionCarosel'
import { mensShoes } from '../Data/mensShoes';
import { mensShirts } from '../Data/mensShirt';

const HomePage = () => {
  return (
    <div>
     <MainCarosel/>
     <div>
      <HomeSectionCarosel data={mensShoes} sectionName={"Men's Shoes"}/>
      <HomeSectionCarosel data={mensShirts} sectionName={"Men's Shirts"}/>
     </div>
    </div>
  )
}

export default HomePage
