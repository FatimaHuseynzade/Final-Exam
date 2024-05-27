import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Section2() {
  const[data,setdata]=useState([])
  const [deleted, sedeleted] = useState(false)

  

  useEffect(() => {
    axios.get('http://localhost:8000/cards')
  .then(res=>setdata(res.data))
  }, [deleted]);
  const deleteData = (id) => {
    axios.delete(`http://localhost:8000/cards/${id}`)
      .then(res => sedeleted(!deleted))
  }
  return (
    <section className='company'>
<div className='company_text'>
  <h1>Awesome </h1>
  <span>Shop</span>
</div>
<div className='company_body'>
 {
  data.map(Element=>{
    return(
      <div className='box' key={Element.id}>
      <div className='box-img'>
  <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png.webp" alt="" />
      </div>
      <div className='box-text'>
      <h3>{Element.name}</h3>
      <p>{Element.cost}</p>
      <button onClick={() => deleteData(Element.id)}>Delete</button>
      </div>
    </div>
    
    )
  })
 }
  
</div>
    </section>
  )
}

export default Section2
