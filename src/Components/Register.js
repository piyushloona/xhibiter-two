import EmailIcon from '@mui/icons-material/Email';
import pic1 from '../Assets/Images/login1.png'
import pic2 from '../Assets/Images/login2.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const Register=()=>{
    return(
        
        <div className='register'>
            <div className='left_pic'>
                <img src={pic1}/>
            </div>
           
            <div className='register_page'>
            <Link to="/"><KeyboardBackspaceIcon className='back_button'/></Link>
           
                <h1><EmailIcon className='icon'/> Materio</h1>
                <h2>Welcome to Materio</h2>
                <p>Please sign-in to your account and start the adventure</p>
         
                <div className="form-floating mb-3 mt-3">
      <input type="email" className="form-control" id="email" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="email" className='label_fname'>First Name</label>
    </div>
    <div className="form-floating mb-3 mt-3">
      <input type="text" className="form-control" id="email" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="email" className='label_lname'>Last Name</label>
    </div>
    <div className="form-floating mb-3 mt-3">
      <input type="text" className="form-control" id="email" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="email" className='email'>Email</label>
    </div>
    <div className="form-floating mb-3 mt-3">
      <input type="text" className="form-control" id="email" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="email" className='country'>country</label>
    </div>
    <div className="form-floating mb-3 mt-3">
      <input type="text" className="form-control" id="email" placeholder="Enter email" autoComplete='off'/>
      <label HTMLfor="email" className='address'>address</label>
    </div>
    <button type="button"><a href='#' className='text-decoration-none'>Sign up </a></button>
            </div>
            <div className='right_pic'>
              <img src={pic2}/>
            </div>
        </div>
    )
}
export default Register;