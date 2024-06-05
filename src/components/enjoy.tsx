import '../style/enjoy.css'
  function Enjoy(){
    return (
        <>
        <div className="enjoy-cont">
        <h2 className='reason-text'>More Reasons to Join</h2>
        <div className='enjoy-box'>

            <div className='enjoy-indiv'>
                <h3  className='reason-texts'>Enjoy on your TV</h3>
                <div className='smart-cont'>
                    <p className='smart-text'>Watch on Smart TVs,</p>
                    <p className='smart-text'>Playstation, Xbox,</p>
                    <p className='smart-text'>Chromecast, Apple TV, Blu-</p>
                    <p className='smart-text'>ray players, and more.</p>
                </div>
                <div className='enjoy-img'><img src="pc-img.PNG" alt="" /></div>
            </div>
 
            <div className='enjoy-indiv'>
                <div>
                <h3  className='reason-texts'>Download your</h3>
                <h3  className='reason-texts'>shows to watch</h3>
                <h3  className='reason-texts'>offline</h3>
                </div>
               
                <div className='smart-cont'>
                    <p className='smart-text'>Save your favorites easily and</p>
                    <p className='smart-text'>always have something to</p>
                    <p className='smart-text'>watch.</p>
                </div>
                <div className='enjoy-imgs'><img src="down-arrow.PNG" alt="" /></div>
            </div>

            <div className='enjoy-indiv'>
                <h3  className='reason-texts'>Watch everywhere</h3>
                <div className='smart-cont'>
                    <p className='smart-text'>Stream unlimited movies and</p>
                    <p className='smart-text'>TV shows on your phone,</p>
                    <p className='smart-text'>tablet, laptop, and TV.</p>
                </div>
                <div className='enjoy-imgss'><img src="scope.PNG" alt="" /></div>
            </div>

            <div className='enjoy-indiv'>
                <h3  className='reason-texts'>Create profiles for</h3>
                <h3  className='reason-texts'>kids</h3>
                <div  className='smart-cont'>
                    <p className='smart-text'>Send kids on adventures with</p>
                    <p className='smart-text'>their favorite characters in a</p>
                    <p className='smart-text'>space made just for them —</p>
                    <p className='smart-text'>free with your membership.</p>
                </div>
                <div className='enjoy-imgsss'><img src="chat.PNG" alt="" /></div>
            </div>
        </div>
        </div>
        </>
    )
   }

   export default Enjoy