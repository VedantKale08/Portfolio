import { useRef, useState,useContext } from 'react'
import "./contact.css"
import Phone from '../../Img/phone.png'
import Email from '../../Img/email.png'
import Address from '../../Img/location.png'
import emailjs from '@emailjs/browser';
import { ThemeConext } from '../../context';


function Contact() {

    const theme = useContext(ThemeConext)
    const darkMode = theme.state.darkMode;

    const formRef = useRef()
    const  [done,setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yyp9qyo', 'template_oahodrw', formRef.current, 'zqTjEf9wfB3_vMyQX')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                document.getElementById("name").value ="";
                document.getElementById("email").value ="";
                document.getElementById("subject").value ="";
                document.getElementById("msg").value ="";

            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Interested to work together? Let's talk</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img className='c-icon'
                                src={Phone}
                                alt=''
                            />
                            +91 8657828477
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon'
                                src={Email}
                                alt=''
                            />
                            vedantkale8114@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon'
                                src={Address}
                                alt=''
                            />
                            C-wing 604 Mahalaxmi CHS, worli, Mumbai-30
                        </div>
                    </div>
                </div>
            <div className='c-right'>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input id="name" type="text" placeholder="Name" name="user_name" style={{borderBottom:darkMode ? "1px solid white" : "1px solid black"}}/>
                        <input id="email" type="text" placeholder="Email" name="user_email" style={{borderBottom:darkMode ? "1px solid white" : "1px solid black"}}/>
                        <input id="subject" type="text" placeholder="Subject" name="user_subject" style={{borderBottom:darkMode ? "1px solid white" : "1px solid black"}}/>
                        <textarea id="msg" rows='5' placeholder="Message" name="message" style={{borderBottom:darkMode ? "1px solid white" : "1px solid black"}}/>
                        <button>Submit</button>
                        {done && "  Thank You"}
                    </form>
                </div>
            </div>
            <footer class="footer py-5">
          <div class="container">
               <div class="row">

                    <div class="col-lg-12 col-12">                                
                        <p class="copyright-text text-center">Copyright © 2022  <a>VEDANT KALE</a>. All rights reserved</p>
                        <p class="copyright-text text-center">Designed by <a rel="nofollow" href="https://www.linkedin.com/in/vedant-kale-1b3b9523b/">VEDANT KALE</a></p>
                    </div>
                    
               </div>
          </div>
     </footer>
            
        </div>
    )
}

export default Contact