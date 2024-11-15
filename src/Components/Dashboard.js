import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GridViewIcon from "@mui/icons-material/GridView";
import ErrorIcon from "@mui/icons-material/Error";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import LogoutIcon from "@mui/icons-material/Logout";
import AppsIcon from "@mui/icons-material/Apps";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import pic from "../Assets/Images/profile.png";
import troffy from "../Assets/Images/troffy.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { Link } from "react-router-dom";
import graph from "../Assets/Images/dashboard_grahph.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import zip_pic from "../Assets/Images/zip.png";
import bank from "../Assets/Images/bank.png";
import avi from "../Assets/Images/avi.png";
import PollIcon from "@mui/icons-material/Poll";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import sell from "../Assets/Images/sell.png";
import master from "../Assets/Images/master.png";
import stripe from "../Assets/Images/Stripe.png";
import american from "../Assets/Images/American.png";
import citi from "../Assets/Images/citi.png";
import google from "../Assets/Images/google_pay.png";
import github from "../Assets/Images/github.png";
import slack from "../Assets/Images/slack.png";
import ocean from "../Assets/Images/ocean.png";
import aws from "../Assets/Images/aws.png";
import Fade from "react-reveal/Fade";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
const Dashboard = () => {
  function piyush() {
    var element = document.body;
    element.classList.toggle("mystyle");
  }
  return (
    <div className="dashboard">
      {/* <div className=" sidebar">
        <div className="sidebar_brand">
          <h1>
            <EmailIcon className="icon" />
            <span>MATERIO</span>
          </h1>
        </div>

        <div className="sidebar-pages">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                <HomeIcon className="home" /> <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ManageAccountsIcon className="manage" />{" "}
                <span> Account Settings</span>
              </a>
            </li>
            <p>PAGES</p>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <LogoutIcon className="login" />
                <span> Login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <PersonAddIcon className="registers" />
                <span>Register</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ErrorIcon className="error" />
                <span>Error</span>
              </a>
            </li>
            <p>USER INTERFACE</p>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <HomeIcon className="home" /> <span>Typography</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AppsIcon className="app_icon" />
                <span>Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CreditCardIcon className="credit_card" />
                <span> Cards</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BackupTableIcon className="table_icon" />
                <span>Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <GridViewIcon className="form_layout" />
                <span> Form Layouts</span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="header1">
        <div className="one">
          
             <div className="two">
              <button
                className="navbar-toggler"
                onClick={() => {
                  piyush();
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
              >
                <span className="navbar-toggler-icon">
                  <IndeterminateCheckBoxIcon className="tog_icon"/>
                   
                </span>
             
              </button>

              {/* <div className="header_first">
          <div className="field_icon">
        <SearchIcon className="search_icon"/><input type="text"/>
        </div>
        </div> */}
              <div className="header_second">
                <div className="header_first">
                  <div className="field_icon">
                    <SearchIcon className="search_icon" />
                    <input type="text" />
                  </div>
                </div>
                <button type="button">Logout</button>
              </div>
            </div>
         </div>

        <div className="section">
          <div className="container">
            <div className=" sidebar">
        <div className="sidebar_brand">
          <h1>
            <EmailIcon className="icon" />
            <span>MATERIO</span>
          </h1>
        </div>

        <div className="sidebar-pages">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                <HomeIcon className="home" /> <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ManageAccountsIcon className="manage" />{" "}
                <span> Account Settings</span>
              </a>
            </li>
            <p>PAGES</p>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <LogoutIcon className="login" />
                <span> Login</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <PersonAddIcon className="registers" />
                <span>Register</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ErrorIcon className="error" />
                <span>Error</span>
              </a>
            </li>
            <p>USER INTERFACE</p>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <HomeIcon className="home" /> <span>Typography</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AppsIcon className="app_icon" />
                <span>Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CreditCardIcon className="credit_card" />
                <span> Cards</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <BackupTableIcon className="table_icon" />
                <span>Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <GridViewIcon className="form_layout" />
                <span> Form Layouts</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
            <div className="row">
              <div className="col-xl-4 col-lg-12">
                <div className="congrats">
                  <h2>Congratulations John! 🥳</h2>
                  <p>Best seller of the month</p>
                  <div className="troffy">
                    <div className="heading_h3">
                      <h3>$ 42.8 k</h3>
                      <button type="button">View Sales</button>
                    </div>
                    <img src={troffy} />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="growth">
                  <h1>Statistic Card</h1>
                  <p>
                    Total 48.5% growth <span>😎 this month </span>
                  </p>
                  <div className="growth_icon">
                    <div className="growth_first">
                      <CallMissedOutgoingIcon className="call_icon" />
                      <div className="growth_heading">
                        <p>Sales</p>
                        <h4>245K</h4>
                      </div>
                    </div>
                    <div className="growth_first">
                      <AccountBoxIcon className="customers" />
                      <div className="growth_heading">
                        <p>Customers</p>
                        <h4>245K</h4>
                      </div>
                    </div>
                    <div className="growth_first">
                      <DevicesOtherIcon className="products" />
                      <div className="growth_heading">
                        <p>Products</p>
                        <h4>245K</h4>
                      </div>
                    </div>
                    <div className="growth_first">
                      <MonetizationOnIcon className="dollar" />
                      <div className="growth_heading">
                        <p>Revenue</p>
                        <h4>245K</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row_first">
              <div className="col-xl-4 col-lg-12">
                <div className="weekly">
                  <h2>Weekly Overview</h2>
                  <div className="image1">
                    <img src={graph} />
                  </div>
                  <div className="yours">
                    <h2>45 %</h2>
                    <p>
                      Your sales performance is 45% <br />
                      😎 better compared to last
                      <br />
                      month
                    </p>
                  </div>
                  <button type="button">DETAILS</button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="total">
                  <h2>Total Earning</h2>
                  <h1>
                    $24,895{" "}
                    <span>
                      <ArrowDropDownIcon />
                      10%
                    </span>
                  </h1>
                  <p>Compared to $84,325 last year</p>
                  <div className="zip">
                    <div className="zip_first">
                      <div className="zip_img">
                        <img src={zip_pic} />
                      </div>
                      <div className="zip_heading">
                        <h4>ZipCar</h4>
                        <p>Vuejs, React & HTML</p>
                      </div>
                    </div>
                    <div className="zip_second">
                      <div className="progress1">
                        <h3>$24,895.65</h3>
                        <progress id="file" value="50" max="100">
                          {" "}
                          32%{" "}
                        </progress>
                      </div>
                    </div>
                  </div>

                  <div className="zip">
                    <div className="zip_first">
                      <div className="zip_img1">
                        <img src={bank} />
                      </div>
                      <div className="zip_heading">
                        <h4>Bitbank</h4>
                        <p>Sketch, Figma & XD</p>
                      </div>
                    </div>
                    <div className="zip_second">
                      <div className="progress1">
                        <h3>$24,895.65</h3>
                        <progress id="file" value="50" max="100">
                          {" "}
                          32%{" "}
                        </progress>
                      </div>
                    </div>
                  </div>

                  <div className="zip">
                    <div className="zip_first">
                      <div className="zip_img1">
                        <img src={avi} />
                      </div>
                      <div className="zip_heading">
                        <h4>Aviato</h4>
                        <p>HTML & Angular</p>
                      </div>
                    </div>
                    <div className="zip_second">
                      <div className="progress1">
                        <h3>$24,895.65</h3>
                        <progress id="file" value="50" max="100">
                          {" "}
                          32%{" "}
                        </progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="row formar">
                  <div className="col-xl-6 col-md-6">
                    <div className="profit">
                      <PollIcon className="poll" />
                      <h1>Total Profit</h1>
                      <h2>
                        $25.6 K <sup>+ 42%</sup>
                      </h2>
                      <p>Weekly Profit</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="profit">
                      <MonetizationOnIcon className="dollar1" />
                      <h1>Refunds</h1>
                      <h2>
                        $78 <sup className="negtive">-15%</sup>
                      </h2>
                      <p>Past Month</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="profit">
                      <BusinessCenterIcon className="business" />
                      <h1>New Project</h1>
                      <h2>
                        862 <sup>+ 42%</sup>
                      </h2>
                      <p>Yearly Project</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="profit">
                      <HelpOutlineIcon className="help" />
                      <h1>Sales Queries</h1>
                      <h2>
                        15 <sup className="negtive">-15%</sup>
                      </h2>
                      <p>Last week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row_second">
              <div className="col-xl-4">
                <div className="count">
                  <h2>Sales by Countries</h2>
                  <div className="country">
                    <div className="country_first">
                      <h6>US</h6>
                      <div className="dollars">
                        <h2>
                          $8,656k{" "}
                          <span>
                            <ArrowDropDownIcon />
                            25.8%
                          </span>
                        </h2>
                        <p>USA</p>
                      </div>
                    </div>
                    <div className="left">
                      <h3>894K</h3>
                      <p>Sales</p>
                    </div>
                  </div>
                  <div className="country">
                    <div className="country_first">
                      <h6 className="second_h6">UK</h6>
                      <div className="dollars">
                        <h2>
                          $8,656k{" "}
                          <span>
                            <ArrowDropDownIcon />
                            25.8%
                          </span>
                        </h2>
                        <p>UK</p>
                      </div>
                    </div>
                    <div className="left">
                      <h3>894K</h3>
                      <p>Sales</p>
                    </div>
                  </div>

                  <div className="country">
                    <div className="country_first">
                      <h6 className="third_h6">IN</h6>
                      <div className="dollars">
                        <h2>
                          $8,656k{" "}
                          <span>
                            <ArrowDropDownIcon />
                            25.8%
                          </span>
                        </h2>
                        <p>India</p>
                      </div>
                    </div>
                    <div className="left">
                      <h3>894K</h3>
                      <p>Sales</p>
                    </div>
                  </div>

                  <div className="country">
                    <div className="country_first">
                      <h6 className="four_h6">JA</h6>
                      <div className="dollars">
                        <h2>
                          $8,656k{" "}
                          <span>
                            <ArrowDropDownIcon />
                            25.8%
                          </span>
                        </h2>
                        <p>Japan</p>
                      </div>
                    </div>
                    <div className="left">
                      <h3>894K</h3>
                      <p>Sales</p>
                    </div>
                  </div>

                  <div className="country">
                    <div className="country_first">
                      <h6 className="five_h6">KO</h6>
                      <div className="dollars">
                        <h2>
                          $8,656k{" "}
                          <span>
                            <ArrowDropDownIcon />
                            25.8%
                          </span>
                        </h2>
                        <p>Korea</p>
                      </div>
                    </div>
                    <div className="left">
                      <h3>894K</h3>
                      <p>Sales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 ">
                <div className="row d-flex bg-white">
                  <div className="col-md-6">
                    <div className="deposit">
                      <div className="all">
                        <h2>Deposit</h2>
                        <p> View All</p>
                      </div>
                      <div className="account">
                        <div className="sell">
                          <img src={sell} />
                          <div className="sell_para">
                            <h3>Gumroad Account</h3>
                            <p>Sell UI kit</p>
                          </div>
                        </div>
                        <h4>+$4,650</h4>
                      </div>
                      <div className="account">
                        <div className="sell">
                          <img src={master} />
                          <div className="sell_para">
                            <h3>Master Card</h3>
                            <p>Wallet Deposit</p>
                          </div>
                        </div>
                        <h4>+$4,650</h4>
                      </div>
                      <div className="account">
                        <div className="sell">
                          <img src={stripe} />
                          <div className="sell_para">
                            <h3>Stripe Account</h3>
                            <p>iOS Application</p>
                          </div>
                        </div>
                        <h4>+$4,650</h4>
                      </div>
                      <div className="account">
                        <div className="sell">
                          <img src={american} />
                          <div className="sell_para">
                            <h3>American Bank</h3>
                            <p>Bank Transfer</p>
                          </div>
                        </div>
                        <h4>+$4,650</h4>
                      </div>
                      <div className="account">
                        <div className="sell">
                          <img src={citi} />
                          <div className="sell_para">
                            <h3>Citi Bank</h3>
                            <p>Wallet Deposit</p>
                          </div>
                        </div>
                        <h4>+$4,650</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="withdraw">
                      <div className="deposit">
                        <div className="all">
                          <h2>Withdraw</h2>
                          <p> View All</p>
                        </div>
                        <div className="account">
                          <div className="sell">
                            <img src={google} />
                            <div className="sell_para">
                              <h3>Google Adsense</h3>
                              <p>Payable deposit</p>
                            </div>
                          </div>
                          <h4 className="neg">-$145</h4>
                        </div>
                        <div className="account">
                          <div className="sell">
                            <img src={github} />
                            <div className="sell_para">
                              <h3>Github Enterprise</h3>
                              <p>Security & Compilance</p>
                            </div>
                          </div>
                          <h4 className="neg">-$145</h4>
                        </div>
                        <div className="account">
                          <div className="sell">
                            <img src={slack} />
                            <div className="sell_para">
                              <h3>Upgrade Slack Plan</h3>
                              <p>Debit card Deposit</p>
                            </div>
                          </div>
                          <h4 className="neg">-$145</h4>
                        </div>
                        <div className="account">
                          <div className="sell">
                            <img src={ocean} />
                            <div className="sell_para">
                              <h3>Digital Ocean</h3>
                              <p>Cloud Hosting</p>
                            </div>
                          </div>
                          <h4 className="neg">-$145</h4>
                        </div>
                        <div className="account">
                          <div className="sell">
                            <img src={aws} />
                            <div className="sell_para">
                              <h3>AWS Account</h3>
                              <p>Choosing a Clout Platoform</p>
                            </div>
                          </div>
                          <h4 className="neg">-$145</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* <div className="row3">
            <table>
              <tr>
                <th className="table_heading">NAME</th>
                <th className="table_heading">EMAIL</th>
                <th className="table_heading">DATE</th>
                <th className="table_heading">SALARY</th>
                <th className="table_heading">AGE</th>
                <th className="table_heading">STATUS</th>
              </tr> 
              <tr>
                  
                  <div className="data">
                    <td><h4>Sally Quinn</h4></td>
                    <td><p>Human Resources Assistant</p></td>
                  </div>
          
                <td><p className="ps-3">eebsworth2m@sbwire.com</p></td>
                <td><p className="ps-3">09/27/2018</p></td>
                <td><p className="ps-3">$19586.23</p></td>
                <td><p className="ps-3">27</p></td>
                <td><button type="button" className="ms-3">Current</button></td>
                
                

              </tr>
            </table>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
