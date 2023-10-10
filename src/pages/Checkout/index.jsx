import { useState } from "react"
import { Link } from "react-router-dom"

const Checkout = () => {
  const [value , setValue] = useState('')
  // Los eventos sinteticos son OBJETOS
  const handleInput = (event) => {
    if(event.target.value) return
    setValue(event.target.value)
  }


  const handleInputCustom = (e) => {
    console.log(e)
    
}


  return (
    <h1>
      

      
      Checkout
      ir a <Link to={'/'}>Home</Link>
    </h1>
    
  )
}

export default Checkout
