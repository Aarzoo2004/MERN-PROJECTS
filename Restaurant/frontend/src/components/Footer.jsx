import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Azure Kitchen</div>
          <div className="right">
            <p>
              123 Culinary Street, Downtown District, Nagpur, Maharashtra 440001
            </p>
            <p>Open Daily: 8:00 AM - 11:00 PM | Kitchen closes at 10:30 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>
              Developed by <strong>Azure Kitchen Development Team</strong>
            </p>
          </div>
          <div className="right">
            <p>&copy; 2024 Azure Kitchen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
