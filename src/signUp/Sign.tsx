  // import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import '../sign.css'

     function Sign(){
        return (
            <>
              <div className='all-conts'>
             </div>

             <div className='pos-conts'>    
       
            <nav className='sign-header'>
              <Link to='/'>
              <div>
                <img className='net-logo' src="/logo.png" alt="" />
                </div>
              </Link>  
            </nav>
            <div className="form-cont">
              
              <form action="" className='form'>
                <div className='dark-form'>
                <h1 className='sign-text'>Sign In</h1>
                <div className='input-two'>
                <input type="text" className='input-sign' placeholder='Email or phone number' />
                </div>
                <div className='input-two'>
                <input type="password" className='input-sign' placeholder='Password'  /> 
                </div>
              <button className='sign-btn'>Sign In</button>
              <p className='forgot-txt'>Forgot password?</p>
              <div className='check-div'>
                <input className='check-input' type="checkbox" />
                <p className='rem-txt'>Remember me</p>
              </div>
              <p className='new-txt'>New to Netflix? <strong className='now-txt'>Sign up now.</strong></p>
              <p className='pro-txt'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <strong className='learn-txt'>Learn more.</strong> </p>
              </div>
              </form>
            </div>

             
             <footer className='footer-two'>
              <div className='darker-mode'>
              <div>
                <p className='us-text'>Questions? Contact us.</p>
              </div>
              <div className='containers'>
                <div>
                  <li>FAQ</li>
                  <li>Cookie Preferences</li>
                </div>

                <div>
                  <li>Help Centerx</li>
                  <li>Corporate Information</li>
                </div>

                <div>
                  <li>Terms of Use</li>
                </div>

                <div>
                  <li>Privacy</li>
                </div>
              </div>
              <div className='english-cont'>
                <p className='english-text'>English</p>
            </div>
            </div>
            </footer> 
            </div>
            </>
        )
     }

     export default Sign