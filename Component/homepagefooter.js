import React from "react";

function Homepagefooter() {
    return (
        <div className="homepagefooter-container">
            <div className="footerlogo">
                <img
                    src="HMlogo.png" alt="footerlogo" width={"210px"} height={"90px"}
                />
            </div>

            <div className="footer-icons">
                <div className="F-icon1" >
                <img 
            src="ficon1.jpg" alt="logo1" width={"35px"} height={"20px"}
            />
              
                    </div>
                <div className="F-icon2" >
                <img 
            src="ficon2.png" alt="logo2" width={"35px"} height={"20px"}
            />
                </div>
                <div className="F-icon3" >
                <img 
            src="ficon3.png" alt="logo3" width={"30px"} height={"20px"}
            />
                </div>
                <div className="F-icon4" >
                <img 
            src="ficon4.png" alt="logo4" width={"30px"} height={"20px"}
            />
                </div>
                <div className="F-icon5" >
                <img 
            src="download.svg" alt="logo5" width={"30px"} height={"20px"}
            />
                </div>
                <div className="F-icon6" >6</div>
            </div>

        </div>
    );
}
export default Homepagefooter;