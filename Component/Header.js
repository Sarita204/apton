import React from 'react';

function Header() {
    return (
        <div className="header-container">
            <div className="header-component">
                <div className="logo">
                    <img
                        src="logo.png" alt="logo" width={"65.5px"} height={"31px"} />
                </div>

                <div className="nav-component">
                    <div className="block-a">Practices</div>
                    <div className="block-b">Services</div>
                    <div className="block-c">About Us</div>
                    <div className="block-d">
                        <div className="block-e">Schedule a call</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;