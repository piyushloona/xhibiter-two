import pic from '../Assets/Icons/header_logo.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
// import { Face } from '@mui/icons-material';
const Section6=()=>{
    return(
        <div className="section6">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className='section6_first'>
                        <img src={pic}/>
                        <p>Create, Sell And Collect Truly Rare Digital Artworks.<br/>Powered By Blockchain Technology.</p>
                        <div className='icons'>
                            <FacebookRoundedIcon className='icon'/>
                            <TwitterIcon className='icon'/>
                            <InstagramIcon className='icon'/>
                            <MusicNoteRoundedIcon className='icon'/>
                        </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-6'>
                        <ul>
                            <h3>Marketplace</h3>
                            <li>All NFTs</li>
                            <li>Art</li>
                            <li>Music</li>
                            <li>Domain Names</li>
                            <li>Collections</li>
                            <li>Virtual World</li>
                            
                        </ul>
                    </div>

                    <div className='col-xl-2 col-lg-6'>
                        <ul>
                            <h3>Company</h3>
                            <li>Explore</li>
                            <li>About us</li>
                            <li>Our Blog</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className='col-xl-3 col-lg-6'>
                        <ul>
                            <h3>My Account</h3>
                            <li>Authors</li>
                            <li>Collection</li>
                            <li>Author Profile</li>
                            <li>Create Item</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="last">
                    <p>@ 2023 Xhibiter-  Made by <span>Ib-themes</span></p>
                    <div className="terms">
                        <h3><a href='#'>Terms And Conditions</a></h3>
                        <h3><a href='#'>Privacy Policy</a></h3>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section6;