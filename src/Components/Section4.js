import InsightsIcon from "@mui/icons-material/Insights";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PaletteIcon from "@mui/icons-material/Palette";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LanguageIcon from "@mui/icons-material/Language";
import pic1 from "../Assets/Images/section_6.webp";
import pic4 from "../Assets/Images/section_5.webp";
import pic5 from "../Assets/Images/section_7.webp";

import pic2 from "../Assets/Images/section4_first.png";
import pic3 from "../Assets/Images/section4_second.png";
import pic6 from "../Assets/Images/section3_third.jpg";
import Fade from "react-reveal/Fade";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AvTimerIcon from "@mui/icons-material/AvTimer";  
const Section4 = () => {
  return (
    <div className="section4">
      <div className="container">
        <h1>
          <InsightsIcon className="trending" /> Trending Categories
        </h1>
        <div className="row">
          <div className="all">
            <Tabs className="tabs">
              <TabList className="tab_list">
                <Tab>
                  <button>All</button>
                </Tab>
                <Tab>
                  <button>
                    <PaletteIcon /> Art
                  </button>
                </Tab>
                <Tab>
                  <button>
                    <LibraryBooksIcon /> Collectibles
                  </button>
                </Tab>
                <Tab>
                  <button>
                    <DomainAddIcon /> Domain
                  </button>
                </Tab>
                <Tab>
                  <button>
                    <MusicNoteIcon /> Music
                  </button>
                </Tab>
                <Tab>
                  <button>
                    <CameraAltIcon /> Photography
                  </button>
                </Tab>
                <Tab>
                  <button>
                    <LanguageIcon /> Virtual World
                  </button>
                </Tab>
                {/* <Tab>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Trending
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </Tab> */}
              </TabList>

              <div className="row1">
                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>

                <TabPanel>
                  <Fade bottom>
                    <div className="row">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic1} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic4} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="back">
                      <div className="section_image">
                        <img src={pic5} className="cap_img" />
                        <img src={pic2} className="round1" />
                        <img src={pic3} className="round2" />
                        <div className="liked">
                          <h2>
                            <FavoriteBorderIcon className="heart" /> 158
                          </h2>
                        </div>
                      </div>

                      <div className="flour">
                        <h3>Flourishing Cat #180</h3>
                        <h4>....</h4>
                      </div>
                      <p>From 8.49 ETH 2/8</p>
                      <div className="buy">
                        <h2>Buy Now</h2>
                        <h3>
                          {" "}
                          <AvTimerIcon className="timer" /> View History
                        </h3>
                      </div>
                    </div>
                   
                    </div>
                    </div>
                  </Fade>
                </TabPanel>
                
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
