import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour =12;
  const closeHour= 22;
  const isOpen = hour=>openHour  && hour<= closeHour;
  return (
    <div>
      <footer className="footer">{new Date().toLocaleTimeString()} We are currently open.</footer>
    </div>
  );
}

export default Footer;
