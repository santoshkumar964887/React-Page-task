import React from "react";
import "./App.css";
import logo from "./assert/Capture.PNG";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CallIcon from '@material-ui/icons/Call';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

function App() {
  return (
    <div>
      <div className="container1">
        <div className="header-left">
          <ul className="top-menu">
            <li>
              <a href="#">Links</a>
              <ul className="ul1">
                <li>
                  <div className="header-dropdown">
                    USD < ArrowDropDownOutlinedIcon style={{verticalAlign:"middle"}} />
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">Eur</a>
                        </li>
                        <li>
                          <a href="#">Usd</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="header-dropdown">
                    English < ArrowDropDownOutlinedIcon style={{verticalAlign:"middle"}} />
                    <div className="header-menu">
                      <ul>
                        <li>
                          English
                        </li>
                        <li>
                          French
                        </li>
                        <li>
                          Spanish
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li style={{margin:"0px 30px"}}>
                <CallIcon style={{verticalAlign:"middle"}}/>+59322464526
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="header-right">
          <ul className="top-menu">
            <li>
              <a href="#">Account</a>
              <ul className="ul2">
                <li  style={{fontSize:"14Px",color:"#867979"}}>
                  <div className="demo3"><PersonOutlineIcon className="demo4" style={{fontSize:"16Px",marginRight:"10px",opacity:"0.8",color:"#867979"}} /> <spn style={{verticalAlign:"top"}}>Sign In</spn></div>
                  <div>
                  <FacebookIcon className="demo4" style={{fontSize:"16Px",marginRight:"10px",opacity:"0.8"}}/>
                  </div>
                  
                  <TwitterIcon className="demo4" style={{fontSize:"16Px",marginRight:"10px",opacity:"0.8"}}/>
                  <YouTubeIcon className="demo4" style={{fontSize:"16Px",marginRight:"10px",opacity:"0.8"}}/>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* {//,///////////////////////end top header/////////////////////////////////////} */}
      <div className="headear">
        <div className="middle-header">
          <img style={{height:"50px",marginLeft:"40px"}} src={logo} />
          <div className="searchfeild">
            <input style={{width:"500px",height:"36px"}} type="text" placeholder="Serch Product" />
            <span class="demo7" >
              <SearchIcon style={{verticalAlign:"middle"}}/>
            </span>
          </div>
          <div className="icons">
            <PersonOutlineIcon style={{marginRight:"15px"}}/>
            <FavoriteBorderIcon style={{marginRight:"15px"}} />
            <AddShoppingCartIcon style={{marginRight:"35px"}} />
          </div>
        </div>
        <div className="header-below">
          <span className="demo8">
            <DehazeIcon/>
            <select name="cars" id="cars" style={{verticalAlign:"top"}}>
              <option value="volvo">All Categories</option>
              <option value="saab">Eletrnics</option>
              <option value="opel">Eletrnics</option>
              <option value="audi">Eletrnics</option>
            </select>
          </span>
          <div className="new">
            <div>Today's Deals</div>
            <div>Special Offer!</div>
            <div>Sell on Quicentro</div>
            <div>Blog</div>
          </div>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////// */}

      <div className="demo1">
        <div className="Imag3"></div>

        <div>
          <div className="demo2">
            <div className="Imag1">
              <div>Clearence Chairs Up to 40% off1</div>
              <div className="shopButton">Shop <span classsName="arrow" ><ArrowRightAltIcon style={{verticalAlign:"middle"}} /></span> </div>
            </div>
            <div className="Imag1">
              <div> Anniversary Special 15% off1</div>
              <div className="shopButton"> Shop Now<span classsName="arrow"><ArrowRightAltIcon style={{verticalAlign:"middle"}}/></span></div>
            </div>
          </div>

          <div className="Imag2">
          <div> Anniversary Special 15% off2</div>
              <div className="shopButton">Shop Now <span classsName="arrow"><ArrowRightAltIcon style={{verticalAlign:"middle"}} /></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
