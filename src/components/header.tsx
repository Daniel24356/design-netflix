    import '../style/header.css'
    import  Button  from '../props/button';
    import { Link } from 'react-router-dom';

    function Header(){
        return (
            <>
            <nav className='header'>
                <div>
                <img className='logo-img' src="/logo.png" alt="" />
                </div>
                <div>
              <Link to='/sign'>
                <Button label="Sign In" color="readOnly" /> 
                </Link>   
                </div>
            </nav>
            </>
        )
    }
    export default Header