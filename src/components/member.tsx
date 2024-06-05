import '../style/member.css'
    function Member(){
        return(
            <>
            <div className="member-cont">
                <h2 className='mem-text'>Get More From Your Membership</h2>
                <div className='ads-cont'>
                    <div className='pad-ads'>
                    <div>
                    <h3 className='game-text'>Mobile games now included in</h3>
                    <h3 className='game-text'>every plan</h3>
                    </div>
                    <div className='fee-cont'>
                        <p className='fee-text'>No ads, extra fees, or in-app purchases. Enjoy unlimited access</p>
                        <p className='fee-text'>to a growing catalog of popular and exclusive games.</p>
                    </div>
                    </div>
                   
                    <div>
                      <img src="second-half.PNG" alt="" />
                    </div>
                </div>
            </div>
            </>
        )
     }

     export default Member