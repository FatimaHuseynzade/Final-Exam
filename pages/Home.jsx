import React from 'react'
import Section from '../Section'
import Section2 from '../Section2'
import Section3 from '../Section3'
import Section4 from '../Section4'
import Footer from '../Footer'



function Home() {
  return (
  <div>
<section className='nav_section'>
<div className='nav1'>
  <h1>Cloth& Wood Sofa</h1>
  <p>Incididunt ut labore et dolore magna aliqua quis ipsum
suspendisse ultrices gravida. Risus commodo viverra</p>

<a href="#">buy now</a>
</div>
<div className='nav2'>
  <img src="./banner_img.png.webp"  />
</div>
</section>
<Section/>
<Section2/>
<Section3/>
<Section4/>
<Footer/>
  </div>
  )
}

export default Home
