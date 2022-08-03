import React, { useContext } from 'react'
import './darkmode.css'
import Sun from '../../Img/sun.png'
import Moon from '../../Img/moon.png'
import { ThemeConext } from '../../context'

function Darkmode() {

  const theme = useContext(ThemeConext)
  const handleCLick=()=>{
    theme.dispatch({type:"TOGGLE"})
  }

  return (
    <div>
        <div className='d'>
            <img src={Sun} alt='' className='d-icon'/>
            <img src={Moon} alt='' className='d-icon'/>
            <div className='d-button' onClick={handleCLick} style={{left:theme.state.darkMode ? 0 : 25}}>

            </div>

        </div>
    </div>
  )
}

export default Darkmode