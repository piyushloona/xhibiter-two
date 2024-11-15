

import Header from '../Components/Header'


import pic1 from '../Assets/Images/resources.jpg'
import pic2 from '../Assets/Images/section1_background.png'
import Footer from '../Components/Section6'
const Resources=()=>{

    return(
        <>
        <div className="resources">
                {/* <Header /> */}
            <div className="resource_section">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-xl-6 col-lg-6">
                            <div className="first_resource ">
                            <h5>Sign Up For The Tide, Xhibiter's <br/>Newsletter !</h5>
                            <p>
                            Join Our Mailing List To Stay In The Loop With Our<br/>
                            Newest Feature Releases, NFT Drops, And Tips And <br/>
                            Tricks For Navigating Xhibiter
                            </p>
                            <div className="mail py-2 d-flex justify-content-between my-5">
                                <input type="text" placeholder="Email Address" className="w-100"/>
                                <button type='submit' className='me-2 p-2' ><a href='#' className='text-decoration-none p-3'>Subscribe</a></button>

                            </div>
                            </div>                            
                            

                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="second_resource">
                                <div className="images">
                                    <div className="image_first">
                                    <img src={pic1} className="pic1"/>
                                    </div>
                                    <div className="upper_resource">
                                    <img src={pic2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
        </>
    )
}
export default Resources;