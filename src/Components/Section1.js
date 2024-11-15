import pic1 from '../Assets/Images/section1_background.png'
import pic2 from '../Assets/Images/section1_right.jpg'

const Section1=()=>{
    return(
        <div className="section1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section1_left">
                        <h1>Buy, Sell And <br/>Collect NFTs </h1>
                        <p>The words Largest Digital Marketplace <br/>For Crypto Collectibles And Non-Fungible <br/>Tokens</p>
                    
                    <div className="section_button">
                        <button type="button" className="upload">Upload</button>
                        <button type="button" className="explore">Explore</button>    
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <div className='right_img '>
                            <img src={pic2} className="upper_background"/>
                            <img src={pic1} className="upper_pic"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Section1