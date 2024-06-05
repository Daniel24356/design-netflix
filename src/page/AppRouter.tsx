import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Sign from '../signUp/Sign'
import HomeNew from '../components/HomeNew'


function AppRouter() {
  return (
    <Router>
        {/* <NavHead/> */}
        <ToastContainer />
        <Routes>
            <Route path='/' element={<HomeNew/>}/>
            <Route path='/sign' element={<Sign/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter