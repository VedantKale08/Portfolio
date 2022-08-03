import React from 'react'
import './about.css'
import Me2 from '../../Component/AboutComp/Me2.jpeg'

function about() {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src={Me2} alt='' className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                It is a long established fact that a reader will be distracted by the readable content.
            </p>
            <p className='a-desc'>
                I am Vedant Kale. I am third year Diploma student pursuing Computer Engineering at Government Polytechnic Mumbai. I am always ready to learn new things, computer languages,etc. I am always ready to solve complex problems. I love Painting.😀
            </p>
            {/* <div className='a-award'>

            </div> */}
        </div>
    </div>
  )
}

export default about