    import '../style/home.css'
    import  Button  from '../props/button';
     function Home(){
        return (
            <>
            <div className='home-all'>
            <div>
            <h1 className='welcome-text'>Unlimited movies,</h1>
              <h1 className='welcome-text'>TV shows, and more</h1>
            </div>
              <p className='start-text'>Starts at ₦1,600. Cancel anytime.</p>
              <h3 className='watch-text'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='input-cont'>
                <div className='input-box'>
                <input className='input-a' placeholder="Email address" type="email" />
                </div>
                <Button label="Get Started" color="secondary" />
              </div>
            </div>
          
            </>
        )
     }
     export default Home 