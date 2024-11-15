import Landing from './Components/Landing';
import './Assets/CSS/style.css';
import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";
import Login from './Components/Login';
import Header from './Components/Header';
import  Register from './Components/Register';
import  Dashboard  from './Components/Dashboard';
import Dashboard1 from './Components/Dashboard1'
import Resources from './Components/Resources'
import Footer from './Components/Section6'
import Admin from './Components/Admin'

function App() {
  function LoginLayout() {
    return (
      <>
        <Outlet/> 
         
              
      </>
    )
  }
  function PublicLayout() {
    return (
      <>
        <Header/>
          <Outlet />
        <Footer/>
              
      </>
    )
  }
  function PrivateLayout() {
    return (
      <>
        
          <Outlet />              

      </>
    )
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Resources' element={<Resources/>}/>  
          <Route path='/admin' element={<Admin/>}/>  
      
        </Route>




        <Route element={<PrivateLayout/>}>

        </Route>
      
        <Route element={<LoginLayout/>}>
        <Route path='/login' element={<Login/>}/>          
        <Route path='/register' element={<Register/>}/>  
        {/* <Route path='/dashboard' element={<Dashboard/>}/>   */}
        <Route path='/Dashboard1' element={<Dashboard1/>}/>  
        
        
        
                
        
        </Route>
      
      </Routes>

    </BrowserRouter>
  );
}
  
export default App;
