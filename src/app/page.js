import HeroSection from '@/components/homepage/Herosection'
import PropertyTypesSection from '@/components/homepage/PropertyTypeSec'
import WhyChooseUsSection from '@/components/homepage/WhyChooseUs'
import Clientsec from '@/components/homepage/Clientsec'
import React from 'react'
import GetInTouchSection from '@/components/homepage/Getintouch'
import FeaturedPropertiesSection from '@/components/homepage/FeaturedProperties'
import Testimonials from '@/components/homepage/Testimonials'
import Contactus from '@/components/homepage/Contactus'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <PropertyTypesSection/>
      <Clientsec/>
      <WhyChooseUsSection/>
      <FeaturedPropertiesSection/>
      <Contactus/>
      <GetInTouchSection/>
      <Testimonials/>
    </div>
  )
}

export default page