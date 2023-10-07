

import { BrowserRouter  as Router,Routes,Route} from 'react-router-dom';
import Topbar from './component/topbar/Topbar';
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Setting from './pages/setting/Setting';
import SinglePost from './pages/single/SinglePost';
import { useContext } from 'react';
import { Context } from './content/Context';
import Footer from './component/footer/Footer';





function App() {
  const{user} = useContext(Context)
  return (
  <Router>
      <Topbar/>
      <Routes>
    
        <Route exact path='/' element={<Home/>}></Route>

        <Route path='/register' element={user ? <Home/> : <Register/>}></Route>
        <Route path='/login' element={user ? <Home/> : <Login/>}></Route>
        <Route path='/write' element={user ? <Write/> : <Register/>}></Route>
        <Route path='/setting' element={user ? <Setting/> : <Register/>}></Route>

        <Route path='/create/:postId' element={<SinglePost/>}></Route>


      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
