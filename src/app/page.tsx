import React from 'react'
import Hero from './components/Hero'
import FeaturedProducts from './components/Featured'
import Topcategory from './components/Catogery'
import { PartnerLogos } from './components/Partners'
import Newstyle from './components/Popular'
import Product from './components/Product'
const page = () => {
  return (
    <div>
        < Hero />
        < PartnerLogos />
        < FeaturedProducts />
        < Topcategory />
        < Newstyle />
        < Product />
    </div>
  )
}

export default page