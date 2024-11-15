import EmailIcon from '@mui/icons-material/Email';
import pic1 from '../Assets/Images/login1.png'
import pic2 from '../Assets/Images/login2.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const Login=()=>{
    return(
        <div className="login">
            
            <div className='left_pic'>
                <img src={pic1}/>
            </div>
               
             <div className='form'>
             <Link to="/"><KeyboardBackspaceIcon className='back_button'/></Link>
           
                        <div className='icon'>
                <EmailIcon className='email_icon'/>
                 
                <h1>MATERIO</h1>
                </div>
                <h2>Welcome to Materio! 👋🏻 </h2>
                <p>Please sign-in to your account and start the adventure</p>
                
                <div className="form-floating mb-3 mt-3">
      <input type="text" className="form-control" id="email" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="email" className='label_email'>Email</label>
    </div>
                {/* <input type="email" className='email' placeholder='Email'></input> */}
                {/* <input type="password" className='password' placeholder='Password'></input> */}
                <div className="form-floating mb-3 mt-3">
      <input type="password" className="form-control" id="pass" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="password" className='label_pass'>Password</label>
    </div>
                <div className='forgot'>
                    <div className='remember'>
                    <input type="checkbox" className='check'></input>
                    <h3>Remember me</h3>
                    </div>
                    <h3>Forgot Password ?</h3>
                </div>
                <button type='button' className='login_button'><a href='#' className='text-decoration-none'>Login</a></button>
                <div className='sign_up'>
                <p className='new'>New on Our Platform ?</p>                
                <h4><a href='#'>Create an account</a></h4>
                </div>
                
                </div>
            <div className='right_pic'>
            <img src={pic2}/>
            </div>   
                
           
        </div>
    )
}
export default Login;