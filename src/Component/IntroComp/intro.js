import React from 'react'
import "./intro.css"
import Me from '../../Component/IntroComp/Me.png'
import Instgram from '../../Img/instagram.png'
import Telegram from '../../Img/telegram.png'
import Youtube from '../../Img/youtube.png'

function intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <div className='i-icons'>
                        <a href="https://www.instagram.com/mi_vedantkale/" target="_blank" rel="noreferrer">
                            <img src={Instgram} alt='' />
                        </a>
                        <a href="https://web.telegram.org/k/#777000" target="_blank" rel="noreferrer">
                            <img src={Telegram} alt='' />
                        </a>
                        <a href="https://www.youtube.com/channel/UC9-UQutoPne4vJIuPSDOyPA" target="_blank" rel="noreferrer">
                            <img src={Youtube} alt='' />
                        </a>
                    </div>
                    <br></br>
                    <h2 className='i-intro'>Hello, My name is </h2>
                    <h1 className='i-name'><b>Vedant Kale</b><br /></h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Android AppDev</div>
                            <div className='i-title-item'>Artist</div>
                            <div className='i-title-item'>Youtuber</div>
                        </div>
                    </div>
                    <div className='i.desc'>
                        <br />
                        Building a successful product is a challenge.
                        <br></br>
                        I want to design and develope experiences that make peoples lives simple.
                    </div>
                </div>
            </div>
            <div className='i-right'>
                <div className='i-bg'></div>
                <img src={Me} alt='' className='i-img' />

            </div>
        </div>
    )
}

export default intro