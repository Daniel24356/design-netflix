import '../style/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div>
                <p className='us-text'>Questions? Contact us.</p>
            </div>
            <div className='container'>
                <div>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </div>

                <div>
                    <li>
                        Help Center</li>
                    <li>
                        Jobs</li>
                    <li>
                        Cookie Preferences</li>
                    <li>
                        Legal Notices</li>
                </div>

                <div>
                    <li>Account</li>
                    <li>
                        Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                </div>

                <div>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>
                        Contact Us</li>
                </div>
            </div>
            <div className='english-cont'>
                <p className='english-text'>English</p>
            </div>
            <div>
                <p className='coun-text'>Netflix Nigeria</p>
            </div>
        </footer>
    )
}

export default Footer