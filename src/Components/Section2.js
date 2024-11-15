import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic1 from '../Assets/Images/section2.webp'
import pic2 from '../Assets/Images/section_3.webp'
import pic3 from '../Assets/Images/section_4.webp'
import pic4 from '../Assets/Images/section_5.webp'
import pic6 from '../Assets/Images/section_6.webp'
import pic7 from '../Assets/Images/section_7.webp'
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Section2=(props)=>{
        
    return(
        <>
        <div className="section2">
            <h1 className="text-center"><LocalFireDepartmentIcon className="fire_icon"/> Hot Bids </h1>
           <div className='container'>
           <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={ {
      280:{
        slidesPerView:1,
      } ,       
        300:{
          slidesPerView:1,
        },
      330:{
        slidesPerView:1,
      },
        380:{
        slidesPerView:1,
      },
      
        400:{
        slidesPerView:1,
      },
      
      
        420:{
        slidesPerView:1,
      },
      
      
        576:{
        slidesPerView:1,
       },
        650:{
          slidesPerview:1,
        },
        
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        
        1200: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
}
    >
      <SwiperSlide>
        <div className="img_background">
          <img src={pic1}/>
          <div className='outside'>
            <h1>ETHMe Outside</h1>
            <span className='toolti'>ETH</span>
           
            <div className="icon_para">
            
              <DiamondIcon className='diamond'/>
              
              <p>1.3 ETH</p>
              
            </div>
          </div>
          <p className='current'>Current Bid <span>1.55 ETH</span></p>
          <div className='place'>
            <p className='place1'>Place bid</p>
            <div className="like">
              <FavoriteBorderIcon className='favourite'/>
              <h4>158</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
     
      <SwiperSlide>
        <div className="img_background">
          <img src={pic2}/>
          <div className='outside'>
            <h1>ETHMe Outside</h1>
            {/* <span className='toolti'>ETH</span> */}
           
            <div className="icon_para">
            
              <DiamondIcon className='diamond'/>
              
              <p>1.3 ETH</p>
              
            </div>
          </div>
          <p className='current'>Current Bid <span>1.55 ETH</span></p>
          <div className='place'>
            <p className='place1'>Place bid</p>
            <div className="like">
              <FavoriteBorderIcon className='favourite'/>
              <h4>158</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ...

      <SwiperSlide>
        <div className="img_background">
          <img src={pic3}/>
          <div className='outside'>
            <h1>ETHMe Outside</h1>
            {/* <span className='toolti'>ETH</span> */}
           
            <div className="icon_para">
            
              <DiamondIcon className='diamond'/>
              
              <p>1.3 ETH</p>
              
            </div>
          </div>
          <p className='current'>Current Bid <span>1.55 ETH</span></p>
          <div className='place'>
            <p className='place1'>Place bid</p>
            <div className="like">
              <FavoriteBorderIcon className='favourite'/>
              <h4>158</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
     


      <SwiperSlide>
        <div className="img_background">
          <img src={pic4}/>
          <div className='outside'>
            <h1>ETHMe Outside</h1>
            {/* <span className='toolti'>ETH</span> */}
           
            <div className="icon_para">
            
              <DiamondIcon className='diamond'/>
              
              <p>1.3 ETH</p>
              
            </div>
          </div>
          <p className='current'>Current Bid <span>1.55 ETH</span></p>
          <div className='place'>
            <p className='place1'>Place bid</p>
            <div className="like">
              <FavoriteBorderIcon className='favourite'/>
              <h4>158</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
     

      <SwiperSlide>
        <div className="img_background">
          <img src={pic6}/>
          <div className='outside'>
            <h1>ETHMe Outside</h1>
            {/* <span className='toolti'>ETH</span> */}
           
            <div className="icon_para">
            
              <DiamondIcon className='diamond'/>
              
              <p>1.3 ETH</p>
              
            </div>
          </div>
          <p className='current'>Current Bid <span>1.55 ETH</span></p>
          <div className='place'>
            <p className='place1'>Place bid</p>
            <div className="like">
              <FavoriteBorderIcon className='favourite'/>
              <h4>158</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
     
      <SwiperSlide>
        <div className="img_background">
          <img src={pic7}/>
          <div className='outside'>
            <h1>ETHMe Outside</h1>
            {/* <span className='toolti'>ETH</span> */}
           
            <div className="icon_para">
            
              <DiamondIcon className='diamond'/>
              
              <p>1.3 ETH</p>
              
            </div>
          </div>
          <p className='current'>Current Bid <span>1.55 ETH</span></p>
          <div className='place'>
            <p className='place1'>Place bid</p>
            <div className="like">
              <FavoriteBorderIcon className='favourite'/>
              <h4>158</h4>
            </div>
          </div>
        </div>
      </SwiperSlide>
     
    </Swiper>
          </div>

        </div>
        </>
    )
}
export default Section2;