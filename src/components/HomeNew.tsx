import Enjoy from "./enjoy"
import Footer from "./footer"
import Header from "./header"
import Home from "./home"
import Member from "./member"
import Question from "./question"
import '../App.css'

 const HomeNew = () => {
    return (
        <>
        <body className="body">
        <div className='all-cont'>
        </div>
        <div className='pos-cont'>
          <Header />
          <Home />
          <Member/>
          <Enjoy/>
          <Question/>
          <Footer/>
        </div>
      </body>
      
        </>
    )
 }

 export default HomeNew