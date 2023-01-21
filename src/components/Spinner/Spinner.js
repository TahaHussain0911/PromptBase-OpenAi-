import React from 'react'
import './Spinner.css'
import loading from '../../../src/assets/loadingBar.gif'
const Spinner = () => {
  return (
    <div class="d-flex justify-content-center">
    <img src={loading} alt="" />
</div>  
  )
}

export default Spinner