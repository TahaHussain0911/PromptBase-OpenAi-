import React,{useContext} from 'react'
import './Error.css'
import PromptContext from '../../context/PromptContext'
const Error = () => {
    const getContext=useContext(PromptContext);
    const {error}=getContext
  return (
    <>
    {error && <div className='error-container'>
        <h2>Servers are down. Please try later</h2>
    </div>}
    </>
  )
}

export default Error